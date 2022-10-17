import { Dao } from './dao/Dao'
import Concessionaria from './model/Concessionaria'
import Pessoa from './model/Pessoa'


let concessionaria = new Concessionaria('', [])

let pessoa: Pessoa = new Pessoa('', '')

let dao3: Dao<Concessionaria> = new Dao<Concessionaria>()
let dao4: Dao<Pessoa> = new Dao<Pessoa>()

dao3.inserir(concessionaria)
dao4.remover(5)
dao4.atualizar(pessoa)