// Definindo fontes:
pdfMake.fonts = {
  Times: {
    normal: 'times-new-roman-14.ttf',
    bold: 'times-new-roman-bold.otf',
    italics: 'times-new-roman-italic.ttf',
    bolditalics: 'times-new-roman-bold-italic.ttf'
  },
  Calibri: {
    normal: 'calibri.ttf',
    bold: 'calibri-bold.ttf',
    italics: 'calibri-italic.ttf',
    bolditalics: 'calibri-bold-italic.ttf'
  }
};
var docDefinition = { 
	content: [
		// Todos os textos:
		{
			image: "logoAldaBrito.png", width: 155,
			absolutePosition: {x:90, y:60},
		},
		{
			text: "RECIBO DE ALUGUEL", 
			absolutePosition: {x:255, y:85},
			bold: true,
			fontSize: 14,
		},
		{
			text: "Nº: 12      (X)RESIDENCIAL              ( )COMERCIAL", 
			absolutePosition: {x:90, y:110},
		},
		{
			text: "LOCADOR(A): GILDÁSIO RAMOS DE OLIVEIRA JUNIOR", 
			absolutePosition: {x:85, y:150},
		},
		{
			text: "LOCATÁRIO: MAURILIO DE OLIVEIRA NUNES", 
			absolutePosition: {x:85, y:173},
		},
		{
			text: "ENDEREÇO: JACOB GUANAES N: 600-H, CENTRO, SEABRA-BA, CEP-46900\n000", 
			absolutePosition: {x:85, y:197},
		},
		{
			text: "VALOR POR EXTENSO: QUATROCENTOS REAIS", 
			absolutePosition: {x:85, y:240},
		},
		{
			text: "ADM: IMOBILIARIA ALDA BRITO", 
			absolutePosition: {x:85, y:270},
		},
		{
			text: "VENC: 10/01/2022", 
			absolutePosition: {x:85, y:305},
		},
		{
			text: "ALUGUEL R$:400.00", 
			absolutePosition: {x:413, y:78},
		},
		{
			text: "JUROS R$ ", 
			absolutePosition: {x:413, y:105},
		},
		{
			text: "OUTROS R$ ", 
			absolutePosition: {x:413, y:130},
		},
		{
			text: "TOTAL", 
			absolutePosition: {x:413, y:155},
		},
		{
			text: "R$: 400,00", 
			absolutePosition: {x:441, y:155},
			decoration: "underline",
		},
		// Parte dos rentângulos canvas:
		{canvas: [ { type: 'rect', x: 0, y: 0, w: 320, h: 85} ],
		absolutePosition: {x:80, y:60}},
		{canvas: [ { type: 'rect', x: 0, y: 0, w: 320, h: 90} ],
		absolutePosition: {x:80, y:145}},
		{canvas: [ { type: 'rect', x: 0, y: 0, w: 155, h: 175} ],
		absolutePosition: {x:400, y:60}},
		{canvas: [ { type: 'rect', x: 0, y: 0, w: 475, h: 30} ],
		absolutePosition: {x:80, y:235}},
		{canvas: [ { type: 'rect', x: 0, y: 0, w: 475, h: 35} ],
		absolutePosition: {x:80, y:265}},
		{canvas: [ { type: 'rect', x: 0, y: 0, w: 475, h: 45} ],
		absolutePosition: {x:80, y:300}},
	],

	// Estilo padrão
	defaultStyle: {
		fontSize: 10,
		font: "Calibri", 
	},
};
// abre o pdf:

pdfMake.createPdf(docDefinition).open()