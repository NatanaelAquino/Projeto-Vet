import React from "react";
import "./Option.css";
import { FaFileAlt, FaCalculator } from "react-icons/fa"; // Importando os ícones que você precisa

const Option = () => {
  return (
    <section className="Option">
      <div>
        <span>
          <FaFileAlt />
        </span>
        <h3>Ficha de anaminexia</h3>
      </div>
      <div>
        <span>
          <FaCalculator />
        </span>
        <h3>Calculo</h3>
      </div>
    </section>
  );
};

export default Option;
