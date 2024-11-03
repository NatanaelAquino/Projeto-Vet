import { jsPDF } from "jspdf";
import logoImage from '../../img/Fundo.png';
export const generatePDF = () => {
  const doc = new jsPDF();

  // Adiciona a imagem do design ao fundo do PDF
  doc.addImage(logoImage, "PNG", 0, 0, 210, 300); // Ajuste a posição e o tamanho da imagem

  // Adiciona os dados dinâmicos (exemplo fixo)
  doc.setFontSize(12);

  // Dados pessoais
  doc.text("Natanael Aquino", 25, 70);
  doc.text("Solteiro", 25, 80);
  doc.text("25", 100, 80);
  doc.text("01/01/1999", 25, 90);
  doc.text("natanael.aquino@example.com", 100, 90);
  doc.text("(11) 99999-9999", 25, 100);
  doc.text("Rua das Flores, 123", 25, 110);
  doc.text("Centro", 25, 120);
  doc.text("12345-678", 100, 120);

  doc.text("X", 35, 135); 

  doc.text("X", 130, 135); 

  doc.text("Unimed", 25, 150);
  doc.text("Nenhuma", 100, 150);

  doc.text("Maria Silva - (11) 98888-8888", 25, 165);

  doc.text("Nenhum problema diagnosticado", 25, 180);

  doc.text("Cirurgia de apêndice em 2015", 25, 200);

  // Salva o PDF
  doc.save("ficha_anamnese_exemplo.pdf");
};
