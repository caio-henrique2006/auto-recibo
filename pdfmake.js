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
submit.onclick = function() {
	var numeroRecibos = document.getElementById("numeroRecibos").value;
	var numeroInicial = document.getElementById("numeroInicial").value;
	var mesData = document.getElementById ("mesData").value;
	var anoData = document.getElementById("anoData").value;
/*Parte lógica*/
	function recibos(numeroInicial, mesData) {
	    // Inputs:
	    var nomeLocador = document.getElementById("nomeLocador").value.toUpperCase();
	    var nomeLocatario = document.getElementById("nomeLocatario").value.toUpperCase();
	    var endereco = document.getElementById("endereco").value.toUpperCase();
	    var valorRs = document.getElementById("valorRs").value.toUpperCase();
	    var valorPorExtenso = document.getElementById("valorPorExtenso").value.toUpperCase();
	    var diaData = document.getElementById("diaData").value.toUpperCase();
	    var numeroRecibos = document.getElementById("numeroRecibos").value.toUpperCase();
	    // Input option:
	    var residencial = document.getElementById("residencial").selected;

	    // Resolvendo 0 numeroInicial:
	    console.log(numeroInicial);
	    if(parseInt(numeroInicial) < 10) {
	    	numeroInicial = "0" + numeroInicial;
	    }

	    // Resolvendo residencial e comercial:
	    if(residencial) {
	    	residencialText = "Nº: "+ numeroInicial +"      (X)RESIDENCIAL              ( )COMERCIAL";
	    }else {
	    	residencialText = "Nº: "+ numeroInicial +"      ( )RESIDENCIAL              (X)COMERCIAL";
	    }

	    // Resolvendo quebra de linha em endereço:
	    if(endereco.length > 15){
	    	endereco = endereco.slice(0, 55) + "-\n" + endereco.slice(55, endereco.length);
	    }

	    // Resolvendo 0 mêsData:
	    console.log(mesData);
	    if(parseInt(mesData) < 10) {
	    	mesData = "0" + mesData;
	    }
	// Criação do PDF:
	var PDFRecibo = { 
		content: [
			// Recibo 1:
			{
				image: "logoAldaBrito.png", width: 155,
				absolutePosition: {x:90, y:60},
			},
			// Recibo 2:
			{
				image: "logoAldaBrito.png", width: 155,
				absolutePosition: {x:90, y:60 + 330},
				//pageBreak: 'before',
			},

			// Parte 1 dos retângulos canvas:
			{canvas: [ { type: 'rect', x: 0, y: 0, w: 320, h: 85} ],
			absolutePosition: {x:80, y:60 + 330}},
			{canvas: [ { type: 'rect', x: 0, y: 0, w: 320, h: 90} ],
			absolutePosition: {x:80, y:145 + 330}},
			{canvas: [ { type: 'rect', x: 0, y: 0, w: 155, h: 175} ],
			absolutePosition: {x:400, y:60 + 330}},
			{canvas: [ { type: 'rect', x: 0, y: 0, w: 475, h: 30} ],
			absolutePosition: {x:80, y:235 + 330}},
			{canvas: [ { type: 'rect', x: 0, y: 0, w: 475, h: 35} ],
			absolutePosition: {x:80, y:265 + 330}},
			{canvas: [ { type: 'rect', x: 0, y: 0, w: 475, h: 45} ],
			absolutePosition: {x:80, y:300 + 330}},
			// Parte 2 dos retângulos canvas:
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

			// Recibo 1:
			{
				text: "RECIBO DE ALUGUEL", 
				absolutePosition: {x:255, y:85},
				bold: true,
				fontSize: 14,
			},
			{
				text: residencialText, 
				absolutePosition: {x:90, y:110},
			},
			{
				text: "LOCADOR(A): " + nomeLocador, 
				absolutePosition: {x:85, y:150},
			},
			{
				text: "LOCATÁRIO: " + nomeLocatario, 
				absolutePosition: {x:85, y:173},
			},
			{
				text: "ENDEREÇO: " + endereco, 
				absolutePosition: {x:85, y:197},
			},
			{
				text: "VALOR POR EXTENSO: " + valorPorExtenso, 
				absolutePosition: {x:85, y:240},
			},
			{
				text: "ADM: IMOBILIARIA ALDA BRITO", 
				absolutePosition: {x:85, y:270},
			},
			{
				text: "VENC: "  + diaData + "/" + mesData + "/" + anoData, 
				absolutePosition: {x:85, y:305},
			},
			{
				text: "ALUGUEL R$: " + valorRs, 
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
				text: "R$: " + valorRs, 
				absolutePosition: {x:441, y:155},
				decoration: "underline",
			},

			// Recibo 2:
			{
				text: "RECIBO DE ALUGUEL", 
				absolutePosition: {x:255, y:85 + 330},
				bold: true,
				fontSize: 14,
			},
			{
				text: residencialText, 
				absolutePosition: {x:90, y:110 + 330},
			},
			{
				text: "LOCADOR(A): " + nomeLocador, 
				absolutePosition: {x:85, y:150 + 330},
			},
			{
				text: "LOCATÁRIO: " + nomeLocatario, 
				absolutePosition: {x:85, y:173 + 330},
			},
			{
				text: "ENDEREÇO: " + endereco, 
				absolutePosition: {x:85, y:197 + 330},
			},
			{
				text: "VALOR POR EXTENSO: " + valorPorExtenso, 
				absolutePosition: {x:85, y:240 + 330},
			},
			{
				text: "ADM: IMOBILIARIA ALDA BRITO", 
				absolutePosition: {x:85, y:270 + 330},
			},
			{
				text: "VENC: "  + diaData + "/" + mesData + "/" + anoData, 
				absolutePosition: {x:85, y:305 + 330},
			},
			{
				text: "ALUGUEL " + valorRs, 
				absolutePosition: {x:413, y:78 + 330},
			},
			{
				text: "JUROS R$ ", 
				absolutePosition: {x:413, y:105 + 330},
			},
			{
				text: "OUTROS R$ ", 
				absolutePosition: {x:413, y:130 + 330},
			},
			{
				text: "TOTAL", 
				absolutePosition: {x:413, y:155 + 330},
			},
			{
				text: "R$: " + valorRs, 
				absolutePosition: {x:441, y:155 + 330},
				decoration: "underline",
				pageBreak: 'after',
			},
		],
	}

	return PDFRecibo
}

var newPDF = {
		content: [

		],
		// Estilo padrão
		defaultStyle: {
			fontSize: 10,
			font: "Calibri", 
		},
	}
	while(numeroRecibos >= 1){
		recibos();
		newPDF.content.push(recibos(numeroInicial, mesData, anoData).content);
		numeroRecibos = numeroRecibos - 1;
		// Mudança de número:
		numeroInicial = parseInt(numeroInicial) + 1;
		// Mudança de mês:
		if(mesData === 12){
			mesData = 1;
			anoData = parseInt(anoData) + 1;
		}else{
			mesData = parseInt(mesData) + 1;
		}
	}
// abre o pdf:
	const submit = document.getElementById("submit");
	pdfMake.createPdf(newPDF).open()
}