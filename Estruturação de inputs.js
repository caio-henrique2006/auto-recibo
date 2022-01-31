var construirRecibo = function(numeroInicial, nomeLocador, nomeLocatario, endereco, valorRs, valorPorExtenso, dataInicial) {
    this.numeroInicial = numeroInicial;
    this.nomeLocador = nomeLocador;
    this. nomeLocatario = nomeLocatario;
    this.endereco = endereco;
    this.valorRs = valorRs;
    this.valorPorExtenso = valorPorExtenso;
    this.dataInicial = dataInicial;
    this.numero = "N°:"
    this.locador = "Locador(A):";
    this.locatario = "Locatário(A):"
    this.extenso = "Valor por extenso:"
}

this.numeroInicial = prompt("Deseja começar o recibo a partir de que numero? EX: 01");
this.nomeLocador = prompt("Qual o nome completo do Locador? EX: João Vinicius Senna de Brito Pinto");
this.nomeLocatario = prompt("Qual o nome completo do Locatário? EX: Caio Henrique Ferreira");
this.endereco = prompt("Qual o endereço do imóvel a ser alugado? EX: Rua: Padre Anchieta, N°:323, Bairro: Artur Alves, Seabra - BA, CEP: 46.900.000");
this.valorRs = prompt("Qual o valor que será cobrado mensalmente? EX: 500,00");
this.valorPorExtenso = prompt("Escreva o valor em extenso do valor. EX: Quinhentos Reais");
this.dataInicial = prompt("Qual é a data inicial deste recibo? EX: 15/01/2022");
