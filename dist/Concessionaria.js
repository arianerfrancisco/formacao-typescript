"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Concessionaria {
    constructor(endereco, listaDeCarros) {
        this.endereco = endereco;
        this.listaDeCarros = listaDeCarros;
    }
    fornecerHorariosDeFuncionamento() {
        return 'De segunda a Sexta: 08 às 18';
    }
    fornecerEndereco() {
        return this.endereco;
    }
    mostrarListaDeCarros() {
        return this.listaDeCarros;
    }
}
exports.default = Concessionaria;
