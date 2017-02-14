// "use strict";
var DOMBuilder = {

    createH2: function (text) {
        var elem = document.createElement('h2');
        elem.innerHTML = text;
        elem.className = 'header text-center';
        document.body.appendChild(elem);
        return elem;
    },

    createDiv: function () {
        var elem = document.createElement('div');
        elem.className = 'box .col-md-4';
        document.body.appendChild(elem);
        return elem;
    },

    createH3: function (text) {
        var elem = document.createElement('h3');
        elem.innerHTML = text;
        elem.className = 'list-label';
        var box = document.querySelector(" .box");
        box.appendChild(elem);
        return elem;
    },

    createForm: function () {
        var elem = document.createElement('form');
        elem.className = 'checkbox-form form-group';
        var box = document.querySelector(" .box");
        box.appendChild(elem);
        return elem;
    },

    createDivWrapper: function () {
        var elem = document.createElement('div');
        elem.className = 'checkbox-wrapper checkbox';
        var checkboxForm = document.querySelector(" .checkbox-form");
        checkboxForm.appendChild(elem);
        return elem;
    },

    createInput: function () {
        var elem = document.createElement('input');
        elem.className = 'checkbox-input';
        elem.type = "checkbox";
        elem.name = "answer1";
        elem.id = "checkbox-first";
        elem.value = "";
        var checkboxLabel = document.querySelector(" .pure-checkbox");
        checkboxLabel.insertBefore(elem, checkboxLabel.firstChild);
        return elem;
    },

    createCheckboxLabel: function (text) {
        var elem = document.createElement('label');
        elem.htmlFor = "checkbox-first";
        elem.className = 'pure-checkbox';
        elem.innerHTML = " " + text;
        var checkboxWrapper = document.querySelector(" .checkbox-wrapper");
        checkboxWrapper.appendChild(elem);
        return elem;
    },
    createDivWrapperSecond: function () {
        var elem = document.createElement('div');
        elem.className = 'checkbox-wrapper checkbox checkbox-wrapper-second';
        var checkboxForm = document.querySelector(" .checkbox-form");
        checkboxForm.appendChild(elem);
        return elem;
    },
    createInputSecond: function () {
        var elem = document.createElement('input');
        elem.className = 'checkbox-input checkbox-input-second';
        elem.type = "checkbox";
        elem.name = "answer1";
        elem.id = "checkbox-second";
        elem.value = "";
        var checkboxLabelSecond = document.querySelector(" .pure-checkbox-second");
        checkboxLabelSecond.insertBefore(elem, checkboxLabelSecond.firstChild);
        return elem;
    },
    createCheckboxLabelSecond: function (text) {
        var elem = document.createElement('label');
        elem.htmlFor = "checkbox-second";
        elem.className = 'pure-checkbox pure-checkbox-second';
        elem.innerHTML = " " + text;
        var checkboxWrapperSecond = document.querySelector(" .checkbox-wrapper-second");
        checkboxWrapperSecond.appendChild(elem);
        return elem;
    },
    createDivWrapperThird: function () {
        var elem = document.createElement('div');
        elem.className = 'checkbox-wrapper checkbox checkbox-wrapper-third';
        var checkboxForm = document.querySelector(" .checkbox-form");
        checkboxForm.appendChild(elem);
        return elem;
    },
    createInputThird: function () {
        var elem = document.createElement('input');
        elem.className = 'checkbox-input';
        elem.type = "checkbox";
        elem.name = "answer1";
        elem.id = "checkbox-third";
        elem.value = "";
        var checkboxLabel = document.querySelector(" .pure-checkbox-third");
        checkboxLabel.insertBefore(elem, checkboxLabel.firstChild);
        return elem;
    },
    createCheckboxLabelThird: function (text) {
        var elem = document.createElement('label');
        elem.htmlFor = "checkbox-third";
        elem.className = 'pure-checkbox pure-checkbox-third';
        elem.innerHTML = " " + text;
        var checkboxWrapperSecond = document.querySelector(" .checkbox-wrapper-third");
        checkboxWrapperSecond.appendChild(elem);
        return elem;
    },
    createButtonWrapper: function () {
        var elem = document.createElement('div');
        elem.className = 'button-wrapper text-center';
        document.body.appendChild(elem);
        return elem;
    },

    createSubmitButton: function (text) {
        var elem = document.createElement('input');
        elem.type = 'submit';
        elem.value = text;
        elem.className = 'button "btn btn-primary btn-lg active';
        var buttonWrapper = document.querySelector(" .button-wrapper");
        buttonWrapper.appendChild(elem);
        return elem;
    },


};
