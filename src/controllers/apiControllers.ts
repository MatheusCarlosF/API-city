import { Request, Response } from "express";
import * as fs from "fs";
import * as path from "path";

interface Loja {
  id: number;
  nome_loja: string;
  cidade_loja: string;
  endereco: string;
  latitude: number;
  longitude: number;
  montante: number;
}

const filePath = path.join(__dirname, "dados.json");
const dados = JSON.parse(fs.readFileSync(filePath, "utf8"));

export const loja = (req: Request, res: Response) => {
  res.json(dados);
}

export const lojaId = (req: Request, res: Response) => {
  const lojaId = parseInt(req.params.id);

  const lojaEncontrada = dados.lojas.find((loja: Loja) => loja.id === lojaId);

  if (!lojaEncontrada) {
    return res.status(404).json({ error: "Loja não encontrada" });
  }

  res.json(lojaEncontrada);
};