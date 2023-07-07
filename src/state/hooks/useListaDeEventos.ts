import { useRecoilValue } from "recoil";
import { eventoFiltradoState } from "../seletores";

export default function UseListaDeEventos() {
  return useRecoilValue(eventoFiltradoState);
}
