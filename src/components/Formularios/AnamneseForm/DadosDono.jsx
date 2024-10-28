import React from "react";

const DadosDono = ({ formData, handleChange, handlePrev, handleNext }) => {
  return (
    <>
      <div>
        <label>Nome do Dono:</label>
        <input
          type="text"
          name="nome"
          value={formData.nome}
          onChange={(e) => handleChange({ dono: { ...formData, [e.target.name]: e.target.value } })}
          required
        />
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={(e) => handleChange({ dono: { ...formData, [e.target.name]: e.target.value } })}
          required
        />
      </div>
      <div>
        <label>Telefone:</label>
        <input
          type="tel"
          name="telefone"
          value={formData.telefone}
          onChange={(e) => handleChange({ dono: { ...formData, [e.target.name]: e.target.value } })}
          required
        />
      </div>
      <div>
        <label>CPF:</label>
        <input
          type="text"
          name="cpf"
          value={formData.cpf}
          onChange={(e) => handleChange({ dono: { ...formData, [e.target.name]: e.target.value } })}
          required
        />
      </div>
      <button type="button" onClick={handlePrev}>Anterior</button>
      <button type="button" onClick={handleNext}>Próximo</button>
    </>
  );
};

export default DadosDono;
