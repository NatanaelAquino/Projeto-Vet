import React from "react";

const QueixasPrincipais = ({ formData, handleChange, handlePrev, handleNext }) => {
  return (
    <>
      <div>
        <label>Vacinação (Está vacinado?):</label>
        <select name="vacinacao" value={formData.queixa.vacinacao} onChange={(e) => handleChange({ queixa: { ...formData.queixa, [e.target.name]: e.target.value } })}>
          <option value="">Selecione</option>
          <option value="sim">Sim</option>
          <option value="nao">Não</option>
        </select>
      </div>
      <div>
        <label>Controle de Endo e Ectoparasitas:</label>
        <input type="text" name="controleParasitas" value={formData.queixa.controleParasitas} onChange={(e) => handleChange({ queixa: { ...formData.queixa, [e.target.name]: e.target.value } })} />
      </div>
      <div>
        <label>Alimentação e Manejo:</label>
        <input type="text" name="alimentacao" value={formData.queixa.alimentacao} onChange={(e) => handleChange({ queixa: { ...formData.queixa, [e.target.name]: e.target.value } })} />
      </div>
      <div>
        <label>Antecedentes:</label>
        <textarea name="antecedentes" value={formData.queixa.antecedentes} onChange={(e) => handleChange({ queixa: { ...formData.queixa, [e.target.name]: e.target.value } })} />
      </div>
      <div>
        <label>O animal teve alguma doença recentemente?</label>
        <select name="doencaRecente" value={formData.queixa.doencaRecente} onChange={(e) => handleChange({ queixa: { ...formData.queixa, [e.target.name]: e.target.value } })}>
          <option value="">Selecione</option>
          <option value="sim">Sim</option>
          <option value="nao">Não</option>
        </select>
      </div>
      <div>
        <label>O animal apresenta sintomas visíveis?</label>
        <select name="sintomasVisiveis" value={formData.queixa.sintomasVisiveis} onChange={(e) => handleChange({ queixa: { ...formData.queixa, [e.target.name]: e.target.value } })}>
          <option value="">Selecione</option>
          <option value="sim">Sim</option>
          <option value="nao">Não</option>
        </select>
      </div>
      <button type="button" onClick={handlePrev}>Anterior</button>
      <button type="button" onClick={handleNext}>Próximo</button>
    </>
  );
};

export default QueixasPrincipais;
