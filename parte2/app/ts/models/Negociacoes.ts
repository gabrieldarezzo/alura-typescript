import { Negociacao } from './Negociacao';

export class Negociacoes {
    
    private negociacoes : Negociacao[] = [];

    adiciona(negociacao : Negociacao){
        this.negociacoes.push(negociacao);
    }

    paraArray() : Negociacao[] {
        //concat é para evitar referencia direta do array e manipulando dados privates
        return ([] as Negociacao[]).concat(this.negociacoes);
    }

}