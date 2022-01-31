// Printa informações no pdf:
var docDefinition = { 
	content: 'Isso é um exemplo de pdf' 
};
// abre o pdf:
pdfMake.createPdf(docDefinition).open()