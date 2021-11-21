import express, { Response, Request } from "express";
import { body, validationResult } from "express-validator";

import { DatabaseValidationError } from "../errors/database-validation-erros";
import { RequestValidationError } from "../errors/request-validation-error";

const router = express.Router();

router.post(
  "/api/users/signup",
  [
    body("email").isEmail().withMessage("Emal must be valid"),
    body("password")
      .trim()
      .isLength({ min: 4, max: 20 })
      .withMessage("Password must be between 4 and 20 characters"),
  ],
  (req: Request, res: Response) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      throw new RequestValidationError(errors.array());
    }
    const { email, password } = req.body;
    console.log("creating a user");
    throw new DatabaseValidationError();
    res.send({});
  }
);

export { router as signUpRouter };
