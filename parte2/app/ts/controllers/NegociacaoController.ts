import { NegociacoesView, MensagemView } from '../views/index';
import { Negociacao, Negociacoes } from '../models/index';
import { logarTempoDeExecucao } from '../helpers/decorators/index';

export class NegociacaoController {
    private _inputData: JQuery;
    private _inputQuantidade: JQuery;
    private _inputValor: JQuery;
    private _negociacoes: Negociacoes = new Negociacoes();
    private _negociacoesView = new NegociacoesView('#negociacoesView');
    private _mensagemView = new MensagemView('#mensagemView');
    
    constructor () {
        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');
        this._negociacoesView.update(this._negociacoes);        
    }

    //@logarTempoDeExecucao()
    adiciona(event: Event) {
        event.preventDefault();
        let data = new Date(this._inputData.val().replace(/-/g, '/'));
        
        //console.log('Dia Util:', this._ehDiaUtil(data));
        if(!this._ehDiaUtil(data)){
            this._mensagemView.update('Não pode cadastrar Sabado ou Domingo', 'alert alert-danger');
            return;
        }

        const negociacao = new Negociacao(
            data,
            parseInt(this._inputQuantidade.val()),
            parseFloat(this._inputValor.val())
        );
        this._negociacoes.adiciona(negociacao);
        
        this._negociacoesView.update(this._negociacoes);
        this._mensagemView.update('Negociação Adicionada com sucesso');
    }

    private _ehDiaUtil(data : Date) : boolean {
        return data.getDay() != DiaDaSemana.Domingo && data.getDay() != DiaDaSemana.Sabado;
    }
}


enum DiaDaSemana {
    Domingo,
    Segunda, 
    Terca,
    Quarta,
    Quinta,
    Sexta,
    Sabado
}