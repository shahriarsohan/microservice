import express from "express";
import { json } from "body-parser";

//routes
import { signInRouter } from "./routes/signin";
import { signUpRouter } from "./routes/signup";
import { signOutRouter } from "./routes/signout";
import { currentUsersRouter } from "./routes/currentuser";

//middlware
import { errorHandler } from "./middleware/error-haldler";

import { NotFoundError } from "./errors/nor-found-error";

const app = express();
app.use(json());

app.use(signInRouter);
app.use(signUpRouter);
app.use(signOutRouter);
app.use(currentUsersRouter);

app.all("*", async (req, res, next) => {
  next(new NotFoundError());
});
app.use(errorHandler);

app.listen(3000, () => {
  console.log("Listening on port 3000!!!!");
});
