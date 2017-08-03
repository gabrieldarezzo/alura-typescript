class Negociacoes {

    //private _negociacoes : Array<Negociacao> = [];
    private _negociacoes : Negociacao[] = [];



    adiciona(negociacao : Negociacao){
        this._negociacoes.push(negociacao);
    }


    paraArray() : Negociacao[] {
        //concat é para evitar referencia direta do array e manipulando dados privates
        return [].concat(this._negociacoes);
    }

}