<<<<<<< HEAD
// Printa informações no pdf:
var docDefinition = { 
	content: [
		// Todos os textos:
		/*
		{
			text: "RECIBO DE ALUGUEL", 
			absolutePosition: {x:255, y:85},
		},
		*/
		{
			text: "Nº: 12      (X)RESIDENCIAL              ( )COMERCIAL", 
			absolutePosition: {x:90, y:110},
		},
		{
			text: "LOCADOR(A): GILDÁSIO RAMOS DE OLIVEIRA JUNIOR", 
			absolutePosition: {x:0, y:0},
		},
		{
			text: "LOCATÁRIO: MAURILIO DE OLIVEIRA NUNES", 
			absolutePosition: {x:0, y:0},
		},
		{
			text: "ENDEREÇO: JACOB GUANAES N: 600-H, CENTRO, SEABRA-BA, CEP-46900000", 
			absolutePosition: {x:0, y:0},
		},
		{
			text: "VALOR POR EXTENSO: QUATROCENTOS REAIS", 
			absolutePosition: {x:0, y:0},
		},
		{
			text: "ADM: IMOBILIARIA ALDA BRITO", 
			absolutePosition: {x:0, y:0},
		},
		{
			text: "VENC: 10/01/2022", 
			absolutePosition: {x:0, y:0},
		},
		{
			text: "ALUGUEL R$:400.00", 
			absolutePosition: {x:0, y:0},
		},
		{
			text: "JUROS R$ ", 
			absolutePosition: {x:0, y:0},
		},
		{
			text: "OUTROS R$ ", 
			absolutePosition: {x:0, y:0},
		},
		{
			text: "TOTAL R$: 400,00", 
			absolutePosition: {x:0, y:0},
		},
		// Parte dos rentângulos canvas:
		{canvas: [ { type: 'rect', x: 0, y: 0, w: 300, h: 85} ],
		absolutePosition: {x:80, y:60}},
		{canvas: [ { type: 'rect', x: 0, y: 0, w: 300, h: 90} ],
		absolutePosition: {x:80, y:145}},
		{canvas: [ { type: 'rect', x: 0, y: 0, w: 100, h: 175} ],
		absolutePosition: {x:380, y:60}},
		{canvas: [ { type: 'rect', x: 0, y: 0, w: 400, h: 30} ],
		absolutePosition: {x:80, y:235}},
		{canvas: [ { type: 'rect', x: 0, y: 0, w: 400, h: 35} ],
		absolutePosition: {x:80, y:265}},
		{canvas: [ { type: 'rect', x: 0, y: 0, w: 400, h: 40} ],
		absolutePosition: {x:80, y:300}},
	],

	// Estilo padrão
	defaultStyle: {
		fontSize: 9,
	},
};
// abre o pdf:
=======
// Printa informações no pdf:
var docDefinition = { 
	content: [
		// Todos os textos:
		/*
		{
			text: "RECIBO DE ALUGUEL", 
			absolutePosition: {x:255, y:85},
		},
		*/
		{
			text: "Nº: 12      (X)RESIDENCIAL              ( )COMERCIAL", 
			absolutePosition: {x:90, y:110},
		},
		{
			text: "LOCADOR(A): GILDÁSIO RAMOS DE OLIVEIRA JUNIOR", 
			absolutePosition: {x:0, y:0},
		},
		{
			text: "LOCATÁRIO: MAURILIO DE OLIVEIRA NUNES", 
			absolutePosition: {x:0, y:0},
		},
		{
			text: "ENDEREÇO: JACOB GUANAES N: 600-H, CENTRO, SEABRA-BA, CEP-46900000", 
			absolutePosition: {x:0, y:0},
		},
		{
			text: "VALOR POR EXTENSO: QUATROCENTOS REAIS", 
			absolutePosition: {x:0, y:0},
		},
		{
			text: "ADM: IMOBILIARIA ALDA BRITO", 
			absolutePosition: {x:0, y:0},
		},
		{
			text: "VENC: 10/01/2022", 
			absolutePosition: {x:0, y:0},
		},
		{
			text: "ALUGUEL R$:400.00", 
			absolutePosition: {x:0, y:0},
		},
		{
			text: "JUROS R$ ", 
			absolutePosition: {x:0, y:0},
		},
		{
			text: "OUTROS R$ ", 
			absolutePosition: {x:0, y:0},
		},
		{
			text: "TOTAL R$: 400,00", 
			absolutePosition: {x:0, y:0},
		},
		// Parte dos rentângulos canvas:
		{canvas: [ { type: 'rect', x: 0, y: 0, w: 300, h: 85} ],
		absolutePosition: {x:80, y:60}},
		{canvas: [ { type: 'rect', x: 0, y: 0, w: 300, h: 90} ],
		absolutePosition: {x:80, y:145}},
		{canvas: [ { type: 'rect', x: 0, y: 0, w: 100, h: 175} ],
		absolutePosition: {x:380, y:60}},
		{canvas: [ { type: 'rect', x: 0, y: 0, w: 400, h: 30} ],
		absolutePosition: {x:80, y:235}},
		{canvas: [ { type: 'rect', x: 0, y: 0, w: 400, h: 35} ],
		absolutePosition: {x:80, y:265}},
		{canvas: [ { type: 'rect', x: 0, y: 0, w: 400, h: 40} ],
		absolutePosition: {x:80, y:300}},
	],

	// Estilo padrão
	defaultStyle: {
		fontSize: 9,
	},
};
// abre o pdf:
>>>>>>> 7afeb1a984c370be4784f969a423fb300d8e17b8
pdfMake.createPdf(docDefinition).open()