import Veiculo from './Veiculo'

class Moto extends Veiculo {
 
public acelerar(): void {
    this.velocidade = this.velocidade + 10
}
 
}

export default Moto 
// outra forma de export