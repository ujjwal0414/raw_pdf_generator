document.addEventListener('DOMContentLoaded', function () {
  const generatePdfButton = document.getElementById('generatePdf');

  generatePdfButton.addEventListener('click', function () {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    const content = `
      <h2>Generated PDF</h2>
      <p>Name: ${name}</p>
      <p>Email: ${email}</p>
    `;

    const element = document.createElement('div');
    element.innerHTML = content;

    html2pdf()
      .from(element)
      .save('generated_pdf.pdf');
  });
});
