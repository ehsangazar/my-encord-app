import express from "express";
import sampleJson from "./db.json" assert { type: "json" };

const router = express.Router();

router.post("/", (req, res) => {
  setTimeout(() => {
    res.json(sampleJson);
  }, 2000);
});

export default router;
