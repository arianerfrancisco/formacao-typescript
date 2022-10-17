import {ConcessionariaInterface} from './ConcessionariaInterface'
import Carro from './Carro'

export default class Concessionaria implements ConcessionariaInterface{
    private endereco: string
    private listaDeCarros: Array<Carro>

    public fornecerHorariosDeFuncionamento(): string {
        return 'De segunda a Sexta: 08 às 18'
    }

    constructor(endereco: string, listaDeCarros: Array<Carro>) {
        this.endereco = endereco
        this.listaDeCarros = listaDeCarros
    }

    public fornecerEndereco(): string {
        return this.endereco
    }

    public mostrarListaDeCarros(): Array<Carro> {
        return this.listaDeCarros
    }
}