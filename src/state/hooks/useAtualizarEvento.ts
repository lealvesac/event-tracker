import { useRecoilState } from "recoil";
import { IEvento } from "../../interfaces/IEvento";
import { listaDeEventosState } from "../atom";

export default function UseAtualizarEvento() {
  const [listaDeEventos, setListaDeEventos] =
    useRecoilState<IEvento[]>(listaDeEventosState);
  return (evento: IEvento) => {
    setListaDeEventos((listaAntiga) => {
      const indice = listaAntiga.findIndex((evt) => evt.id === evento.id);
      return [
        ...listaAntiga.slice(0, indice),
        evento,
        ...listaAntiga.slice(indice + 1),
      ];
    });
  };
}
