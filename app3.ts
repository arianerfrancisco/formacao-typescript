import Carro  from './model/Carro'
import Moto  from './model/Moto'
import Concessionaria from './model/Concessionaria'

let carro = new Carro('Fusca',2)
let moto = new Moto()
console.log(carro)
console.log(moto)

let concessionaria = new Concessionaria('Rua dos Carros',[])
console.log(concessionaria.fornecerHorariosDeFuncionamento())