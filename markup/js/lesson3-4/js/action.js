function ready() {

    var xb = new XBuilder();
    var xbHeader = xb.createHeaderCenter('Тест по программированию');
    var xbForm = xb.createForm('checkbox-form');

    var xbBlock1 = xbForm.createBlock('block-1');
    var xbBlock2 = xbForm.createBlock('block-2');
    var xbBlock3 = xbForm.createBlock('block-3');

    xbBlock1.inside()
        .createHeader('Вопрос №1')
        .createCheckbox('b1-option-one', 'Вариант ответа №1')
        .createCheckbox('b1-option-two', 'Вариант ответа №2')
        .createCheckbox('b1-option-three', 'Вариант ответа №3');

    xbBlock2.inside()
        .createHeader('Вопрос №2')
        .createCheckbox('b2-option-one', 'Вариант ответа №1')
        .createCheckbox('b2-option-two', 'Вариант ответа №2')
        .createCheckbox('b2-option-three', 'Вариант ответа №3');

    xbBlock3.inside()
        .createHeader('Вопрос №3')
        .createCheckbox('b3-option-one', 'Вариант ответа №1')
        .createCheckbox('b3-option-two', 'Вариант ответа №2')
        .createCheckbox('b3-option-three', 'Вариант ответа №3');

    xbForm.createSubmitButton('Проверить мои результаты');
    xb.draw();
}

document.addEventListener('DOMContentLoaded', ready);
