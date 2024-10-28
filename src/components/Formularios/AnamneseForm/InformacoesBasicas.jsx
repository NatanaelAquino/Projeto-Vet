import React from "react";

const InformacoesBasicas = ({ formData, handleChange, handleNext }) => {
  return (
    <>
      <div>
        <label>Data:</label>
        <input
          type="date"
          name="data"
          value={formData.data}
          onChange={(e) => handleChange({ [e.target.name]: e.target.value })}
          required
        />
      </div>
      <div>
        <label>Animal:</label>
        <input
          type="text"
          name="animal"
          value={formData.animal}
          onChange={(e) => handleChange({ [e.target.name]: e.target.value })}
          required
        />
      </div>
      <div>
        <label>Raça:</label>
        <input
          type="text"
          name="raca"
          value={formData.raca}
          onChange={(e) => handleChange({ [e.target.name]: e.target.value })}
          required
        />
      </div>
      <button type="button" onClick={handleNext}>
        Próximo
      </button>
    </>
  );
};

export default InformacoesBasicas;
