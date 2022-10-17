import Carro  from './Carro'
import Moto  from './Moto'
import Concessionaria from './Concessionaria'

let carro = new Carro('Fusca',2)
let moto = new Moto()
console.log(carro)
console.log(moto)

let concessionaria = new Concessionaria('Rua dos Carros',[])
console.log(concessionaria.fornecerHorariosDeFuncionamento())