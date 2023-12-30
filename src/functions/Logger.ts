// Copyright (c) Toolbi Software. All rights reserved.
// Check the README file in the project root for more information.

// TODO Add a new method to allow the usage of provided presets. If the presets are complex, the user will be able to define a template that can be used with the normal method.

import sqlite from "better-sqlite3";
import chalk from "chalk";
// @ts-ignore
import dateformat from "dateformat";
import fs from "fs";
import type {
  LoggerCategory,
  LoggerDefaultCategories,
  LoggerLevel,
  LoggerLevels,
  LoggerLogOptions,
  LoggerOptions
} from "../types.ts";
import { boolToNum, stopwatch } from "./index.ts";

export class Logger<CATEGORIES extends string = LoggerDefaultCategories> {
  readonly #path: string;
  readonly #entryLimit: number;
  readonly #levels: LoggerLevel[];
  readonly #defaultCategories: LoggerCategory[];
  readonly #categories: LoggerCategory[];
  readonly #debug: boolean;
  readonly #convertedLevels: LoggerLevel[];
  readonly #convertedCategories: LoggerCategory[];
  readonly #longestCategoryLength: number;
  readonly #database: sqlite.Database;

  constructor(options?: LoggerOptions) {
    this.#path = options?.path || "./logs";
    this.#entryLimit = options?.entryLimit || 100000;
    this.#levels = [
      {
        name: "debug",
        text: "DEBUG",
        bgColor: "bgMagenta",
        fgColor: "magenta"
      },
      {
        name: "info",
        text: "INFORMATION",
        bgColor: "bgBlue",
        fgColor: "blue"
      },
      {
        name: "done",
        text: "DONE",
        bgColor: "bgGreen",
        fgColor: "green"
      },
      {
        name: "warn",
        text: "WARN",
        bgColor: "bgYellow",
        fgColor: "yellow"
      },
      {
        name: "error",
        text: "ERROR",
        bgColor: "bgRed",
        fgColor: "red"
      },
      {
        name: "fatal",
        text: "FATAL",
        bgColor: "bgRedBright",
        fgColor: "redBright"
      }
    ];
    this.#defaultCategories = [
      {
        name: "config",
        text: "CONFIGURATION"
      },
      {
        name: "util",
        text: "UTIL"
      },
      {
        name: "controller",
        text: "CONTROLLER"
      },
      {
        name: "service",
        text: "SERVICE"
      },
      {
        name: "database",
        text: "DATABASE"
      },
      {
        name: "keystore",
        text: "KEYSTORE"
      },
      {
        name: "main",
        text: "MAIN"
      },
      {
        name: "base",
        text: "BASE"
      },
      {
        name: "core",
        text: "CORE"
      }
    ];
    this.#categories = [
      ...this.#defaultCategories,
      ...(options?.categories || [])
    ];
    this.#debug = options?.debug !== undefined ? options.debug : false;

    const convertLevels = this.convertLevels();
    const convertCategories = this.convertCategories();

    this.#convertedLevels = convertLevels[0];
    this.#convertedCategories = convertCategories[0];
    this.#longestCategoryLength = convertCategories[1];

    this.#database = this.setupDatabase();
  }

  private setupDatabase(): sqlite.Database {
    fs.mkdirSync(this.#path, {
      recursive: true
    });

    const database = new sqlite(`${this.#path}/log.db`);

    database
      .prepare(
        `
          CREATE TABLE IF NOT EXISTS 'log' (
            id INTEGER PRIMARY KEY,
            date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            level VARCHAR(20) NOT NULL,
            category VARCHAR(20),
            text VARCHAR(1000) NOT NULL,
            error VARCHAR(1000),
            isError BOOL NOT NULL
          )
        `
      )
      .run();
    database.prepare(`DROP TRIGGER IF EXISTS delete_old_entries`).run();
    database
      .prepare(
        `
          CREATE TRIGGER delete_old_entries
          BEFORE INSERT ON log
          FOR EACH ROW
          BEGIN
            DELETE FROM log
            WHERE id = (SELECT id FROM log ORDER BY date ASC LIMIT 1)
            AND (SELECT COUNT(*) FROM log) > ${this.#entryLimit - 1};
          END
        `
      )
      .run();

    return database;
  }

  private convertLevels(): [LoggerLevel[], number] {
    const result: LoggerLevel[] = [];
    let maximumLength = 0;
    for (const level of this.#levels) {
      const length = level.text.length;
      if (length > maximumLength) {
        maximumLength = length;
      }
    }

    for (const level of this.#levels) {
      const length = level.text.length;
      if (length < maximumLength) {
        const missingSpaces = maximumLength - length;
        result.push({
          ...level,
          text: `${level.text}${" ".repeat(missingSpaces)}`
        });
      }

      result.push(level);
    }

    return [result, maximumLength];
  }

  private convertCategories(): [LoggerCategory[], number] {
    const result: LoggerCategory[] = [];
    let maximumLength = 0;
    for (const category of this.#categories) {
      const length = category.text.length;
      if (length > maximumLength) {
        maximumLength = length;
      }
    }

    for (const category of this.#categories) {
      const length = category.text.length;
      if (length < maximumLength) {
        const missingSpaces = maximumLength - length;
        result.push({
          ...category,
          text: `${category.text}${" ".repeat(missingSpaces)}`
        });
      }

      result.push(category);
    }

    return [result, maximumLength];
  }

  private logToDatabase(
    level: string,
    category: string | null,
    text: string,
    error: string | null,
    isError: boolean
  ): void {
    this.#database
      .prepare(
        "INSERT INTO log (level, category, text, error, isError) VALUES (?, ?, ?, ?, ?)"
      )
      .run(level, category, text, error, boolToNum(isError));
  }

  log(
    level: LoggerLevels,
    text: string,
    options?: LoggerLogOptions<CATEGORIES>
  ): void {
    if (level === "debug") {
      if (!this.#debug) return;
    }

    const getLevel = this.#convertedLevels.find((x) => x.name === level);
    if (!getLevel) {
      throw new Error(`The level '${level}' doesn't exist.`);
    }
    const getCategory = ((): LoggerCategory | null => {
      if (options?.category) {
        const get = this.#convertedCategories.find(
          (x) => x.name === options.category
        );
        if (!get) {
          throw new Error(`The category '${options.category}' doesn't exist.`);
        }
        return get;
      }
      return null;
    })();
    const getDate = dateformat(new Date(), "yyyy-mm-dd HH:MM:ss", true);
    const getTimespan = ((): number | null => {
      if (options?.stopwatch) {
        return options.stopwatch.getTime();
      }
      return null;
    })();

    const logPrefix = chalk[getLevel.bgColor](
      ` | ${getLevel.text} ${
        getCategory
          ? `· ${getCategory.text}`
          : " ".repeat(this.#longestCategoryLength + 2)
      }`
    );
    const logDate = chalk.bgGrey(` ${getDate} `);
    const logText = chalk[getLevel.fgColor](text);
    const logTimespan = getTimespan
      ? ` ${chalk.grey(`(${getTimespan}ms)`)}`
      : "";

    console.log(
      `${logPrefix}${logDate}${chalk[getLevel.bgColor](
        " "
      )} ${logText}${logTimespan}`
    );

    if (options?.error) {
      console.log(options.error);
    }

    const isError = level === "error" || level === "fatal" ? true : false;

    this.logToDatabase(
      level,
      options?.category || null,
      text,
      options?.error || null,
      isError
    );
  }
}
