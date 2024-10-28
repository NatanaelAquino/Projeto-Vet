import React from "react";

const ExameFisico = ({ formData, handleChange, handlePrev }) => {
  return (
    <>
      <div>
        <label>Mucosas:</label>
        <input type="text" name="mucosas" value={formData.exameFisico.mucosas} onChange={(e) => handleChange({ exameFisico: { ...formData.exameFisico, [e.target.name]: e.target.value } })} />
      </div>
      <div>
        <label>TPC:</label>
        <input type="text" name="tpc" value={formData.exameFisico.tpc} onChange={(e) => handleChange({ exameFisico: { ...formData.exameFisico, [e.target.name]: e.target.value } })} />
      </div>
      <div>
        <label>Hidratação:</label>
        <input type="text" name="hidratacao" value={formData.exameFisico.hidratacao} onChange={(e) => handleChange({ exameFisico: { ...formData.exameFisico, [e.target.name]: e.target.value } })} />
      </div>
      <div>
        <label>Temperatura:</label>
        <input type="text" name="temperatura" value={formData.exameFisico.temperatura} onChange={(e) => handleChange({ exameFisico: { ...formData.exameFisico, [e.target.name]: e.target.value } })} />
      </div>
      <div>
        <label>O animal apresenta cianose?</label>
        <select name="cianose" value={formData.exameFisico.cianose} onChange={(e) => handleChange({ exameFisico: { ...formData.exameFisico, [e.target.name]: e.target.value } })}>
          <option value="">Selecione</option>
          <option value="sim">Sim</option>
          <option value="nao">Não</option>
        </select>
      </div>
      <div>
        <label>O animal está desidratado?</label>
        <select name="desidratacao" value={formData.exameFisico.desidratacao} onChange={(e) => handleChange({ exameFisico: { ...formData.exameFisico, [e.target.name]: e.target.value } })}>
          <option value="">Selecione</option>
          <option value="sim">Sim</option>
          <option value="nao">Não</option>
        </select>
      </div>
      <button type="button" onClick={handlePrev}>Anterior</button>
      <button type="submit">Enviar</button>
    </>
  );
};

export default ExameFisico;
