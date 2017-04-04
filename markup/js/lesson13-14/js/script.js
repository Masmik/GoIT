'use strict';
$(function () {
    var template = $('#result').html();
    var data = {
        title: 'Тест по программированию',
        question: ['Вопрос №1', 'Вопрос №2', 'Вопрос №3'],
        answer: [['Вариант ответа №1', 'Вариант ответа №2', 'Вариант ответа №3'],
            ['Вариант ответа №1', 'Вариант ответа №2', 'Вариант ответа №3'],
            ['Вариант ответа №1', 'Вариант ответа №2', 'Вариант ответа №3']
        ],
        rightAnswerIndex: [2, 2, 1]
    };
    localStorage.setItem('date', JSON.stringify(data));
    var data_obj = localStorage.getItem('date');
    data_obj = JSON.parse(data_obj);
    var content = tmpl(template, data_obj);
    $('body').append(content);
    $('button.submit').click(function (e) {
        e.preventDefault();
        $('.answer').removeClass('red').removeClass('green');
        var hasWrongAnswer = false;
        $.each(data_obj.question, function (i) {
            console.log(i);
            var checkedValue = parseInt($('input[name=question-' + i + ']:checked').val());
            if (data_obj.rightAnswerIndex[i] === checkedValue) {
                $('#d' + i + checkedValue).addClass('green');
            }
            else {
                $('#d' + i + checkedValue).addClass('red');
                hasWrongAnswer = true;
            }
        });
        if (hasWrongAnswer) {
            showModal('You have wrong answer. Try again!');
        }
        else {
            showModal('Congratulations! You have successfully passed the test');
        }
    });
    var modal = document.getElementById('myModal');
    var span = document.getElementsByClassName("close")[0];
    var modalText = document.querySelector('.text-modal');
    function showModal(text) {
        modal.style.display = "block";
        modalText.innerHTML = text;
    }
    function hideModal() {
        modal.style.display = "none";
    }
    span.onclick = function () {
        hideModal();
    };
    window.onclick = function (event) {
        if (event.target == modal) {
            hideModal();
        }
    }
});
