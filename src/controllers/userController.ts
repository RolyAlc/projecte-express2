import { Request, Response } from "express";
import {afegirUsuari, obtenirUsuaris, obtenirUsuariPerId, eliminarUsuari, Usuari, usuaris} from "./../model/usuaris.js";



export const createUser = (req: Request, res: Response) => {
  const { nom, edat } = req.body;

  if (!nom || !edat) {
    return res.status(400).json({ error: "Nom i edat són obligatoris." });
  }

  const nouUsuari: Usuari = {
    id: usuaris.length > 0 ? Math.max(...usuaris.map(u => u.id)) + 1 : 0,
    nom,
    edat,
  };

  afegirUsuari(nouUsuari);

  res.status(201).json({ missatge: "Usuari creat correctament", usuari: nouUsuari });
};


export const getUsers=(req: Request, res:Response) =>{ res.json(obtenirUsuaris()); };

interface UserParams {
  id: string;
}

export const getUserById = (req: Request<UserParams>, res: Response) => {
  const id = parseInt(req.params.id);
  const usuari = obtenirUsuariPerId(id);

  if (!usuari) {
    return res.status(404).json({ error: "Usuari no trobat" });
  }

  res.json(usuari);
};

export const deleteUser = (req: Request<UserParams>, res: Response) => {
  const id = parseInt(req.params.id);
  const success = eliminarUsuari(id);

  if (!success) {
    return res.status(404).json({ error: "Usuari no trobat" });
  }

  res.status(200).json({ missatge: "Usuari eliminat correctament" });
};