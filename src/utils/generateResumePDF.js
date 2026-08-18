import { jsPDF } from 'jspdf';
import { personalInfo, resumeData, skillsData } from '../data/portfolioData';

export const generateResumePDF = () => {
  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4',
  });

  // Colors
  const primaryColor = [15, 23, 42]; // #0F172A (Navy)
  const accentColor = [37, 99, 235];  // #2563EB (Blue)
  const textColor = [51, 65, 85];     // #334155 (Slate text)
  const lightBg = [248, 250, 252];    // #F8FAFC

  let y = 15;

  // Top Banner
  doc.setFillColor(...primaryColor);
  doc.rect(0, 0, 210, 36, 'F');

  // Name & Title
  doc.setTextColor(255, 255, 255);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(22);
  doc.text(personalInfo.fullName.toUpperCase(), 15, 18);

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(11);
  doc.setTextColor(147, 197, 253); // Light blue
  doc.text(personalInfo.title, 15, 26);

  doc.setFontSize(9);
  doc.setTextColor(226, 232, 240);
  doc.text(`${personalInfo.email}  |  ${personalInfo.location}`, 15, 32);

  y = 45;

  // Section Helper
  const addSectionHeader = (title) => {
    doc.setFillColor(...lightBg);
    doc.rect(15, y, 180, 8, 'F');
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(12);
    doc.setTextColor(...accentColor);
    doc.text(title.toUpperCase(), 18, y + 6);
    y += 12;
  };

  // Summary
  addSectionHeader('Professional Summary');
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(10);
  doc.setTextColor(...textColor);
  const splitSummary = doc.splitTextToSize(resumeData.summary, 180);
  doc.text(splitSummary, 15, y);
  y += splitSummary.length * 5 + 6;

  // Skills
  addSectionHeader('Technical Skills');
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9.5);
  doc.setTextColor(...textColor);
  const skillsList = skillsData.map(s => s.name).join('  •  ');
  const splitSkills = doc.splitTextToSize(skillsList, 180);
  doc.text(splitSkills, 15, y);
  y += splitSkills.length * 5 + 6;

  // Experience
  addSectionHeader('Experience & Internship');
  resumeData.experience.forEach(exp => {
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(10.5);
    doc.setTextColor(...primaryColor);
    doc.text(exp.title, 15, y);
    
    doc.setFont('helvetica', 'italic');
    doc.setFontSize(9);
    doc.setTextColor(100, 116, 139);
    doc.text(`${exp.company} (${exp.period})`, 130, y);
    y += 5;

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(9.5);
    doc.setTextColor(...textColor);
    exp.points.forEach(pt => {
      const splitPt = doc.splitTextToSize(`•  ${pt}`, 175);
      doc.text(splitPt, 18, y);
      y += splitPt.length * 4.5;
    });
    y += 4;
  });

  // Education
  addSectionHeader('Education');
  resumeData.education.forEach(edu => {
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(10);
    doc.setTextColor(...primaryColor);
    doc.text(edu.degree, 15, y);

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(9);
    doc.setTextColor(100, 116, 139);
    doc.text(edu.period, 160, y);
    y += 5;

    doc.setTextColor(...textColor);
    const instLine = edu.affiliation ? `${edu.institution} (${edu.affiliation})  -  ${edu.score}` : `${edu.institution}  -  ${edu.score}`;
    const splitInst = doc.splitTextToSize(instLine, 180);
    doc.text(splitInst, 15, y);
    y += splitInst.length * 5;

    const splitEdDetails = doc.splitTextToSize(edu.details, 175);
    doc.text(splitEdDetails, 15, y);
    y += splitEdDetails.length * 4.5 + 4;
  });

  // Certifications
  addSectionHeader('Certifications & Badges');
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9);
  doc.setTextColor(...textColor);
  doc.text('• UI/UX Workshop - Vebbox Software Solutions Private Limited', 18, y); y += 5;
  doc.text('• Data Analytics Workshop - Vebbox Software Solutions Private Limited', 18, y); y += 5;
  doc.text('• Full Stack Developer Internship - Vebbox Software Solutions Private Limited', 18, y); y += 8;

  // Footer
  doc.setLineWidth(0.3);
  doc.setDrawColor(226, 232, 240);
  doc.line(15, 280, 195, 280);

  doc.setFontSize(8);
  doc.setTextColor(148, 163, 184);
  doc.text('Portfolio: Abishek Developer Platform 2026', 15, 285);

  doc.save('Abishek_FullStack_Resume.pdf');
};
