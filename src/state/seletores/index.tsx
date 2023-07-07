import { selector } from "recoil";
import { filtroDeEventos, listaDeEventosState } from "../atom";

export const eventoFiltradoState = selector({
  key: "eventoFiltradoState",
  get: ({ get }) => {
    const filtro = get(filtroDeEventos);
    const todosOsEventos = get(listaDeEventosState);
    const eventos = todosOsEventos.filter((evento) => {
      if (!filtro.data) {
        return true;
      }
      const oMesmoDia =
        filtro.data.toISOString().slice(0, 10) ===
        evento.inicio.toISOString().slice(0, 10);
      return oMesmoDia;
    });

    return eventos;
  }
});
