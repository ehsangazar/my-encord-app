import express from "express";
import sampleJson from "./db.json" assert { type: "json" };

const router = express.Router();

router.post("/", (req, res) => {
  res.json(sampleJson);
});

export default router;
