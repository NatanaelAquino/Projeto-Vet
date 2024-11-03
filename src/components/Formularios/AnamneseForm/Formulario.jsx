import React, { useState } from "react";
import "./Formulario.css";
import { generatePDF } from "../../PDF/pdfGenerator";
const AnamneseForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    data: "",
    cpf: "",
    animal: "",
    raca: "",
    endereco: "",
    telefone: "",
    queixa: {
      vacinacao: "",
      controleParasitas: "",
      alimentacao: "",
      antecedentes: "",
    },
    exameFisico: {
      mucosas: "",
      tpc: "",
      hidratacao: "",
      temperatura: "",
    },
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (step === 1) {
      setFormData({ ...formData, [name]: value });
    } else if (step === 2) {
      setFormData({
        ...formData,
        queixa: { ...formData.queixa, [name]: value },
      });
    } else if (step === 3) {
      setFormData({
        ...formData,
        exameFisico: { ...formData.exameFisico, [name]: value },
      });
    }
  };

  const handleNext = () => {
    setStep(step + 1);
  };

  const handlePrev = () => {
    setStep(step - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    generatePDF(formData);
  };

  return (
    <form onSubmit={handleSubmit} id="AnamneseForm">
      {step === 1 && (
        <>
          <div>
            <label>Data:</label>
            <input
              type="date"
              name="data"
              value={formData.data}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>CPF:</label>
            <input
              type="text"
              name="cpf"
              value={formData.cpf}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Animal:</label>
            <input
              type="text"
              name="animal"
              value={formData.animal}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Raça:</label>
            <input
              type="text"
              name="raca"
              value={formData.raca}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Endereço:</label>
            <input
              type="text"
              name="endereco"
              value={formData.endereco}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Telefone:</label>
            <input
              type="text"
              name="telefone"
              value={formData.telefone}
              onChange={handleChange}
              required
            />
          </div>
          <button type="button" onClick={handleNext}>
            Próximo
          </button>
        </>
      )}

      {step === 2 && (
        <>
          <div>
            <label>Vacinação:</label>
            <label>
              <input
                type="checkbox"
                name="vacinacao"
                checked={formData.queixa.vacinacao}
                onChange={handleChange}
              />
              Sim
            </label>
            <label>
              <input
                type="checkbox"
                name="vacinacao"
                checked={formData.queixa.vacinacao}
                onChange={handleChange}
              />
              Não
            </label>
            <input
              type="text"
              name="vacinacao"
              value={formData.queixa.vacinacao}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Controle de Endo e Ectoparasitas:</label>
            <input
              type="text"
              name="controleParasitas"
              value={formData.queixa.controleParasitas}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Alimentação e Manejo:</label>
            <input
              type="text"
              name="alimentacao"
              value={formData.queixa.alimentacao}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Antecedentes:</label>
            <textarea
              name="antecedentes"
              value={formData.queixa.antecedentes}
              onChange={handleChange}
            />
          </div>
          <button type="button" onClick={handlePrev}>
            Anterior
          </button>
          <button type="button" onClick={handleNext}>
            Próximo
          </button>
        </>
      )}

      {step === 3 && (
        <>
          <div>
            <label>Mucosas:</label>
            <input
              type="text"
              name="mucosas"
              value={formData.exameFisico.mucosas}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>TPC:</label>
            <input
              type="text"
              name="tpc"
              value={formData.exameFisico.tpc}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Hidratação:</label>
            <input
              type="text"
              name="hidratacao"
              value={formData.exameFisico.hidratacao}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Temperatura:</label>
            <input
              type="text"
              name="temperatura"
              value={formData.exameFisico.temperatura}
              onChange={handleChange}
            />
          </div>
          <button type="button" onClick={handlePrev}>
            Anterior
          </button>
          <button type="submit">Enviar</button>
        </>
      )}
    </form>
  );
};

export default AnamneseForm;
