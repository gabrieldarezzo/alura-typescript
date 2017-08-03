class Negociacoes {
    constructor() {
        //private _negociacoes : Array<Negociacao> = [];
        this._negociacoes = [];
    }
    adiciona(negociacao) {
        this._negociacoes.push(negociacao);
    }
    paraArray() {
        //concat é para evitar referencia direta do array e manipulando dados privates
        return [].concat(this._negociacoes);
    }
}
