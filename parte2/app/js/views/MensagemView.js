var Views;
(function (Views) {
    var View = Views.View;
    class MensagemView extends View {
        template(model) {
            return `<p class="alert alert-info">${model}</p>`;
        }
    }
    Views.MensagemView = MensagemView;
})(Views || (Views = {}));
