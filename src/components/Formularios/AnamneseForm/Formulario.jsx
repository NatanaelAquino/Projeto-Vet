import React, { useState } from "react";
import "./Formulario.css";

const AnamneseForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    data: "",
    animal: "",
    raca: "",
    endereco: "",
    telefone: "",
    email: "",
    queixa: {
      vacinacao: "",
      controleParasitas: "",
      alimentacao: "",
      antecedentes: "",
      sistemaTegumentar: "",
      sistemaCardioRespiratorio: "",
      sistemaDigestivoUrinario: "",
      sistemaReprodutor: "",
      sistemaNervoso: "",
    },
    exameFisico: {
      mucosas: "",
      tpc: "",
      hidratacao: "",
      temperatura: "",
      auscultacaoCardiaca: "",
      auscultacaoPulmonar: "",
      palpacaoLinfonodos: "",
      fc: "",
      fr: "",
      palpacaoAbdominal: "",
      palpacaoMamas: "",
      inspecaoPele: "",
      examesComplementares: "",
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
    console.log("Dados do formulário:", formData);
  };

  return (
    <form onSubmit={handleSubmit} id="AnamneseForm">
      {step === 1 && (
        <>
          <div>
            <label>Data:</label>
            <input type="date" name="data" value={formData.data} onChange={handleChange} required />
          </div>
          <div>
            <label>Animal:</label>
            <input type="text" name="animal" value={formData.animal} onChange={handleChange} required />
          </div>
          <div>
            <label>Raça:</label>
            <input type="text" name="raca" value={formData.raca} onChange={handleChange} required />
          </div>
          <div>
            <label>Endereço:</label>
            <input type="text" name="endereco" value={formData.endereco} onChange={handleChange} required />
          </div>
          <div>
            <label>Telefone:</label>
            <input type="text" name="telefone" value={formData.telefone} onChange={handleChange} required />
          </div>
          <div>
            <label>E-mail:</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} required />
          </div>
          <button type="button" onClick={handleNext}>Próximo</button>
        </>
      )}

      {step === 2 && (
        <>
          <div>
            <label>Vacinação:</label>
            <input type="text" name="vacinacao" value={formData.queixa.vacinacao} onChange={handleChange} />
          </div>
          <div>
            <label>Controle de Endo e Ectoparasitas:</label>
            <input type="text" name="controleParasitas" value={formData.queixa.controleParasitas} onChange={handleChange} />
          </div>
          <div>
            <label>Alimentação e Manejo:</label>
            <input type="text" name="alimentacao" value={formData.queixa.alimentacao} onChange={handleChange} />
          </div>
          <div>
            <label>Antecedentes:</label>
            <textarea name="antecedentes" value={formData.queixa.antecedentes} onChange={handleChange} />
          </div>
          <button type="button" onClick={handlePrev}>Anterior</button>
          <button type="button" onClick={handleNext}>Próximo</button>
        </>
      )}

      {step === 3 && (
        <>
          <div>
            <label>Mucosas:</label>
            <input type="text" name="mucosas" value={formData.exameFisico.mucosas} onChange={handleChange} />
          </div>
          <div>
            <label>TPC:</label>
            <input type="text" name="tpc" value={formData.exameFisico.tpc} onChange={handleChange} />
          </div>
          <div>
            <label>Hidratação:</label>
            <input type="text" name="hidratacao" value={formData.exameFisico.hidratacao} onChange={handleChange} />
          </div>
          <div>
            <label>Temperatura:</label>
            <input type="text" name="temperatura" value={formData.exameFisico.temperatura} onChange={handleChange} />
          </div>
          {/* Adicione os demais campos do exame físico */}
          <button type="button" onClick={handlePrev}>Anterior</button>
          <button type="submit">Enviar</button>
        </>
      )}
    </form>
  );
};

export default AnamneseForm;
