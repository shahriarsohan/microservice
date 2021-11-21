import { CustomError } from "./custom-error";

export class DatabaseValidationError extends CustomError {
  statusCode = 500;
  reason = "Error connecting to database";
  constructor() {
    super();

    //only beacsause we are extending a built in object
    Object.setPrototypeOf(this, DatabaseValidationError.prototype);
  }
  serializeError() {
    return [
      {
        message: this.reason,
      },
    ];
  }
}
