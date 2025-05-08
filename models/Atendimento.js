class Atendimento {
    nome;
    cpf;
    data;
    hora;
    horaSaida; // saída

    constructor(nome, cpf) {
        this.nome = nome;
        this.cpf = cpf;
        this.data = obterDataAtual();
        this.hora = obterHoraAtual();
    }

    finalizar() {
        this.horaSaida = obterHoraAtual();
    }

    tempoDeEspera() {
        return calcularDiferencaHoras(this.hora, this.horaSaida);
    }

    toString() {
        return this.nome + " | " + this.cpf + " | Data " + this.data + " | Hora " + this.hora;
    }
}