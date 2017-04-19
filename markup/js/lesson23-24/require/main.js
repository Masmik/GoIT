requirejs.config({
    paths: {
        tmpl: '../js/tmpl',
        jquery: 'https://code.jquery.com/jquery-3.2.1'
    },
    shim: {
        'tmpl': {
            exports: 'tmpl'
        }
    }
});


require(
    [
        'jquery',
        'model',
        'view',
        'controller'
    ],

    function ($, model, view, controller) {

            var model = new model(['learn javascript', 'learn html', 'learn css']);
            var view = new view(model);
            var controller = new controller(model, view);
    });
