function ready() {

    var xb = new XBuilder();
    var xbHeader = xb.createHeaderCenter('Тест по программированию');
    var xbForm = xb.createForm('checkbox-form');

    xbForm
        .createBlock()
        .createHeader('Вопрос №1')
        .createCheckbox('b1-option-one', 'Вариант ответа №1')
        .createCheckbox('b1-option-two', 'Вариант ответа №2')
        .createCheckbox('b1-option-three', 'Вариант ответа №3');

    xbForm.createBlock()
        .createHeader('Вопрос №2')
        .createCheckbox('b2-option-one', 'Вариант ответа №1')
        .createCheckbox('b2-option-two', 'Вариант ответа №2')
        .createCheckbox('b2-option-three', 'Вариант ответа №3');

    xbForm.createBlock()
        .createHeader('Вопрос №3')
        .createCheckbox('b3-option-one', 'Вариант ответа №1')
        .createCheckbox('b3-option-two', 'Вариант ответа №2')
        .createCheckbox('b3-option-three', 'Вариант ответа №3');

    xbForm.createSubmitButton('Проверить мои результаты');
    xb.draw();
}

document.addEventListener('DOMContentLoaded', ready);
