import { createContext, useContext, useState } from "react";

export const FavoritosContext = createContext();
FavoritosContext.displayName = "Favoritos";

export default function FavoritosProvider({ children }) {
    const [favoritos, setFavoritos] = useState([]);

    return (
        <FavoritosContext.Provider value={{ favoritos, setFavoritos }}>
            {children}
        </FavoritosContext.Provider>
    );
}

export function useFavoritoContext() {
    const { favoritos, setFavoritos } = useContext(FavoritosContext); // Corrigido para "favoritos"

    function adicionarFavorito(novoFavorito) {
        const favoritoRepetido = favoritos.some(item => item.id === novoFavorito.id); // Corrigido para "favoritos"

        let novaLista = [...favoritos];

        if (!favoritoRepetido) {
            novaLista.push(novoFavorito);
            return setFavoritos(novaLista); // Corrigido para "setFavoritos"
        }

        return setFavoritos(novaLista.filter(fav => fav.id !== novoFavorito.id)); // Corrigido para "setFavoritos"
    }

    return { favoritos, adicionarFavorito }; // Retornando um objeto
}
