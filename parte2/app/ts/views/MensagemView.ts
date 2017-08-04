import { View } from './View';

export  class MensagemView extends View<string> {    

    template(model: string, tipoAlert: string = ''): string {

    	if(!tipoAlert || tipoAlert == '') {
    		tipoAlert = 'alert alert-info';
    	}

    	return `<p class=" ${tipoAlert} ">${model}</p>`;
    }

    //Sobrecarga de método
    update(model: string, classUpdate: string = '') {
    	let template = this.template(model, classUpdate);
    	this._elemento.html(template);
    }

}
