"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Veiculo_1 = __importDefault(require("./Veiculo"));
class Moto extends Veiculo_1.default {
    acelerar() {
        this.velocidade = this.velocidade + 10;
    }
}
exports.default = Moto;
// outra forma de export
