import { Request, Response } from "express";
import * as fs from "fs";
import * as path from "path";

const filePath = path.join(__dirname, "dados.json");
const dados = JSON.parse(fs.readFileSync(filePath, "utf8"));

// Resto do código...
export const ping = (req: Request, res: Response) => {
  res.json({ pong: true });
}

export const city = (req: Request, res: Response) => {
  res.json(dados);
}
