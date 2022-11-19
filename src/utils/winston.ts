import winston from "winston";
import "winston-daily-rotate-file";

export const logDebug = (error: Error | unknown) => {
  const logger = winston.createLogger({
    level: "debug",
    format: winston.format.combine(
      winston.format.json(),
      winston.format.timestamp()
    ),
    transports: [
      new winston.transports.DailyRotateFile({
        filename: "mail_service_debug_%DATE%.log",
        datePattern: "YYYY-MM-DD",
        dirname: "./log/debug",
        format: winston.format.combine(
          winston.format.json(),
          winston.format.timestamp()
        ),
      }),
    ],
  });
  if (error instanceof Error) {
    logger.debug(error.message);
    return;
  }
  logger.debug(error);
};

export const logInfo = (message: any) => {
  const logger = winston.createLogger({
    level: "info",
    format: winston.format.combine(
      winston.format.json(),
      winston.format.timestamp()
    ),
    transports: [
      new winston.transports.DailyRotateFile({
        filename: "mail_service_info_%DATE%.log",
        datePattern: "YYYY-MM-DD",
        dirname: "./log/info",
        level: "info",
        format: winston.format.combine(
          winston.format.json(),
          winston.format.timestamp()
        ),
      }),
    ],
  });
  logger.info(message);
};

export const logError = (message: any) => {
  const logger = winston.createLogger({
    level: "error",
    format: winston.format.combine(
      winston.format.json(),
      winston.format.timestamp()
    ),
    transports: [
      new winston.transports.DailyRotateFile({
        filename: "mail_service_error_%DATE%.log",
        datePattern: "YYYY-MM-DD",
        dirname: "./log/error",
        level: "error",
        format: winston.format.combine(
          winston.format.json(),
          winston.format.timestamp()
        ),
      }),
    ],
  });
  logger.error(message);
};
