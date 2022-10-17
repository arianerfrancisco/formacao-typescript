import {ConcessionariaDao} from './dao/ConcessionariaDao'
import Concessionaria from './model/Concessionaria'
import { PessoaDao } from './dao/PessoaDao'
import Pessoa from './model/Pessoa'

let dao: ConcessionariaDao = new ConcessionariaDao()
let concessionaria = new Concessionaria('', [])

dao.inserir(concessionaria)

let dao2: PessoaDao = new PessoaDao()
let pessoa: Pessoa = new Pessoa('Nome', 'Carro preferido')

dao2.atualizar(pessoa)