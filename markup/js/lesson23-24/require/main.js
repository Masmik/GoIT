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
        var data = JSON.parse(window.localStorage.getItem('todo')) || [];
        var model = new model(data);
        var view = new view(model);
        var controller = new controller(model, view);
    });
