requirejs.config({
    paths: {
        tmpl: '../scripts/tmpl',
        jquery: '../scripts/jquery'
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
