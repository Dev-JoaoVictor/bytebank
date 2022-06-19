import { Cliente } from "./Cliente.js";
import { Gerente } from "./Funcionarios/gerente.js";
import { Diretor } from "./Funcionarios/diretor.js";
import { SistemaAutenticacao } from "./SistemaAutenticacao.js";

const diretor = new Diretor("Rodrigo", 10000, 12345678900);
diretor.cadastrarSenha("123456");
const gerente = new Gerente("Pedro", 5000, 12345679801);
gerente.cadastrarSenha("12345");
const cliente = new Cliente("Lais", 78945612379, "123");

const gerenteEstaLogado = SistemaAutenticacao.login(gerente, "12345");
const diretorEstaLogado = SistemaAutenticacao.login(diretor, "123456");
const clienteEstalogado = SistemaAutenticacao.login(cliente, "123");

console.log(gerenteEstaLogado, diretorEstaLogado, clienteEstalogado);