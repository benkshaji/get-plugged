import express, { Request, Response } from "express";
import cors from "cors";
const app = express();
const port = process.env.PORT || 8080;

app.use(cors());

app.get("/message", (_req: Request, res: Response) => {
  return res.json({ message: "Express Typescript API on Vercel" });
});

app.get("/ping", (_req: Request, res: Response) => {
  return res.send("pong 🏓");
});

app.listen(port, () => {
  return console.log(`Server is listening on ${port}`);
});
