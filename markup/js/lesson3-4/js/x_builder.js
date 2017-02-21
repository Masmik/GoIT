/**
 * Created by tetiana.maslivets on 2/13/17.
 */

var XBuilder = function (parentElement, currentElement) {

    return {

        parentElement: parentElement,

        currentElement: currentElement,

        elements: [],

        inside: function () {
            return new XBuilder(currentElement);
        },

        createHeaderCenter: function (text) {
            var headerElem = document.createElement('h1');
            headerElem.innerHTML = text;
            headerElem.className = 'header';
            return this._add(headerElem);
        },

        createForm: function (className) {
            var formElem = document.createElement('form');
            formElem.className = className + ' pure-form pure-form-stacked';
            return this._add(formElem);
        },

        createBlock: function (className) {
            var blockElem = document.createElement('div');
            blockElem.className = className;
            return this._add(blockElem);
        },

        createCheckbox: function (name, labelText) {
            var labelElem = document.createElement('label');
            labelElem.htmlFor = name;
            labelElem.className = 'pure-checkbox';
            labelElem.innerHTML = " " + labelText;

            var inputElem = document.createElement('input');
            inputElem.className = 'checkbox-input';
            inputElem.type = "checkbox";
            inputElem.name = "checkbox__" + name;
            inputElem.id = name;

            labelElem.insertBefore(inputElem, labelElem.firstChild);

            return this._add(labelElem);
        },

        createHeader: function (text) {
            var headerElem = document.createElement('h2');
            headerElem.innerHTML = text;
            headerElem.className = 'list-label';
            return this._add(headerElem);
        },

        createSubmitButton: function (text) {
            var buttonElem = document.createElement('input');
            buttonElem.type = 'submit';
            buttonElem.value = text;
            buttonElem.className = "pure-button pure-button-primary";
            return this._add(buttonElem);
        },

        _add: function (elem) {
            if (typeof this.parentElement == 'undefined') {
                this.elements.push(elem);
                return new XBuilder(elem);
            } else {
                this.parentElement.appendChild(elem);
                return new XBuilder(this.parentElement, elem);
            }
        },

        draw: function () {
            this.elements.forEach(function (elem, i, arr) {
                document.body.appendChild(elem);
            });
        }
    };
};
