function ready() {
    // var h2 = DOMBuilder.createH2("Тест по програмированию");
    //
    // var divSection = DOMBuilder.createDiv();
    // var h3 = DOMBuilder.createH3("1. Вопрос №1");
    // var form = DOMBuilder.createForm();
    // var divWrapper = DOMBuilder.createDivWrapper();
    // var label = DOMBuilder.createCheckboxLabel("Вариант ответа №1");
    // var input = DOMBuilder.createInput();
    // var divWrapperSecond = DOMBuilder.createDivWrapperSecond();
    // var labelSecond = DOMBuilder.createCheckboxLabelSecond("Вариант ответа №2");
    // var inputSecond = DOMBuilder.createInputSecond();
    // var divWrapperThird = DOMBuilder.createDivWrapperThird();
    // var labelThird = DOMBuilder.createCheckboxLabelThird("Вариант ответа №3");
    // var inputThird = DOMBuilder.createInputThird();
    //
    //
    //
    // var divSection2 = divSection.cloneNode(true);
    // document.body.appendChild(divSection2);
    // divSection2.querySelector(".list-label").innerHTML = "2. Вопрос №2";
    // // divSection2.querySelector(" .")
    //
    // var divSection3 = divSection.cloneNode(true);
    // document.body.appendChild(divSection3);
    // divSection3.querySelector(".list-label").innerHTML = "3. Вопрос №3";
    // var buttonWrapper = DOMBuilder.createButtonWrapper();
    // var button = DOMBuilder.createSubmitButton("Проверить мои результаты")





    // should be

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
