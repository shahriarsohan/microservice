import express from "express";

const router = express.Router();

router.post("/api/users/signout", (req, res) => {
  res.send("hi there signout");
});

export { router as signOutRouter };
