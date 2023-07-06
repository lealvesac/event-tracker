import React from "react";
import { IEvento } from "../../../interfaces/IEvento";
import UseAtualizarEvento from "../../../state/hooks/useAtualizarEvento";

const EventoCheckbox: React.FC<{ evento: IEvento }> = ({ evento }) => {
  const atualizarEvento = UseAtualizarEvento();

  const alterStatus = () => {
    const eventoAlterado = {
      ...evento,
    };
    eventoAlterado.completo = !eventoAlterado.completo;
    atualizarEvento(eventoAlterado);
  };
  const estilos = [
    "far",
    "fa-2x",
    evento.completo ? "fa-check-square" : "fa-square",
  ];

  return <i className={estilos.join(" ")} onClick={alterStatus}></i>;
};

export default EventoCheckbox;
