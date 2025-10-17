// src/models/usuaris.ts

// Tipus d'usuari (interfície-entitat)

export interface Usuari {
  id: number;
  nom: string;
  edat: number;
}

// Inicialització de l'array d'usuaris
export let usuaris: Array<Usuari> = [];

// Afegim un usuari
usuaris[0] = { id: 0, nom: "Pep", edat: 25 };

// Funció per afegir un usuari
export const afegirUsuari = (usuari: Usuari) => {
  usuaris.push(usuari);
};

// Funció pero obtenir tots els usuaris
export const obtenirUsuaris = () =>{
    return usuaris;
} 

// Funció per obtenir un usuari per id
export const obtenirUsuariPerId = (id: number): Usuari | undefined => {
  return usuaris.find(u => u.id === id);
};

// Funció per eliminar un usuari per id
export const eliminarUsuari = (id: number): boolean => {
  const index = usuaris.findIndex(u => u.id === id);
  if (index !== -1) {
    usuaris.splice(index, 1);
    return true;
  }
  return false;
};
