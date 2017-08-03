abstract class View<T> {

    protected _elemento : Element;

    constructor(seletor: string) {
        this._elemento = document.querySelector(seletor);        
    }

    abstract update(model: T): void;

    abstract template(model: T): string;

}