'use strict';
$(function () {
    const template = $('#result').html();
    const data = {
        title: 'Тест по программированию',
        question: ['Вопрос №1', 'Вопрос №2', 'Вопрос №3'],
        answer: [['Вариант ответа №1', 'Вариант ответа №2', 'Вариант ответа №3'],
            ['Вариант ответа №1', 'Вариант ответа №2', 'Вариант ответа №3'],
            ['Вариант ответа №1', 'Вариант ответа №2', 'Вариант ответа №3']
        ],
        rightAnswerIndex: [2, 2, 1]
    };
    localStorage.setItem('date', JSON.stringify(data));
    let data_obj = localStorage.getItem('date');
    data_obj = JSON.parse(data_obj);

    new GenerateHTML(template, data_obj);
});

class GenerateHTML {

    constructor(template, data_obj) {
        this.data_obj = data_obj;
        this.content = tmpl(template, this.data_obj);
        this.modal = document.getElementById('myModal');
        this.closeSpan = document.getElementsByClassName("close")[0];
        this.modalText = document.querySelector('.text-modal');
        $('body').append(this.content);
        this.handleEvent();
    }

    showModal(text) {
        this.modal.style.display = "block";
        this.modalText.innerHTML = text;
    }

    hideModal() {
        this.modal.style.display = "none";
    }

    handleEvent() {
        // Test submit
        $('button.submit').off('click').on('click', (e) => {
            e.preventDefault();
            $('.answer').removeClass('red').removeClass('green');
            let hasWrongAnswer = false;
            $.each(this.data_obj.question, (i) => {
                let checkedValue = parseInt($('input[name=question-' + i + ']:checked').val());
                if (this.data_obj.rightAnswerIndex[i] === checkedValue) {
                    $('#d' + i + checkedValue).addClass('green');
                }
                else {
                    $('#d' + i + checkedValue).addClass('red');
                    hasWrongAnswer = true;
                }
            });
            if (hasWrongAnswer) {
                this.showModal('You have wrong answer. Try again!');
            }
            else {
                this.showModal('Congratulations! You have successfully passed the test');
            }
        });


        // Hide Modal Window
        $('#myModal').off('click').on('click', (event) => {
            if (event.target == this.modal || event.target == this.closeSpan) {
                this.hideModal();
            }
        });
    }
}


