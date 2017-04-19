// MVC

function Model(data) {
    var self = this;
    self.data = data;

    self.addItem = function (item) {
        if (item.length === 0) {
            return;
        }
        self.data.push(item);

        return self.data;
    };

    self.removeItem = function (item) {
        var index = self.data.indexOf(item);

        if (index === -1) {
            return;
        }
        self.data.splice(index, 1);

        return self.data;
    };

    self.editItem = function (indexEdit, newValue) {
        // debugger;
            console.log(indexEdit);
        if (indexEdit) {
            var editElem = indexEdit - 1;
            self.data[editElem] = newValue.text();
            return this;
        }
    }
}

function View(model) {
    var self = this;

    function init() {
        var wrapper = tmpl($('#wrapper-template').html());

        $('body').append(wrapper);
        self.elements = {
            input: $('.item-value'),
            addBtn: $('.item-add'),
            listContainer: $('.item-list')
        };
        self.renderList(model.data);
    };

    self.renderList = function (data) {
        var list = tmpl($('#list-template').html(), {data: data});
        self.elements.listContainer.html(list);
    };

    init();

}

function Controller(model, view) {
    var self = this;

    $('.item-value').keypress(function (e) {
        var key = e.which;
        if (key == 13) {
            return addItem();
        }
    });

    view.elements.addBtn.on('click', addItem);
    view.elements.listContainer.on('click', '.item-delete', removeItem);
    view.elements.listContainer.on('click', '.item-edit', editItem);

    function addItem() {
        var newItem = view.elements.input.val();
        model.addItem(newItem);
        view.renderList(model.data);
        view.elements.input.val('');
    }

    function removeItem() {
        var item = $(this).attr('data-value');

        model.removeItem(item);
        view.renderList(model.data);
    }

    function editItem() {

        var self = this;

        $('.item-edit').click(function () {
            var valueEditTask = $(this).parents('li').children('.container');
            console.log($(this).parents('li').children('.container').text());

            var item = $(this).attr('data-value');

            var indexEdit = parseInt(item);
            // var editItem = $(this).closest('li').prop("contenteditable", true);
            $(this).hide();
            $('.modal').show();
            var inpurForEdit = $('.input-task-edit').focus();
            inpurForEdit.val(valueEditTask.text());
            $('.save-changes').unbind('click');
            $('.save-changes').click(function () {
                if (!inpurForEdit.val()) {
                    console.log('enter something');
                    return false;
                }
                var newValue = valueEditTask.text(inpurForEdit.val());
                $('.item-edit').show();
                $('.modal').hide();
                model.editItem(indexEdit, newValue);
                console.log(model.data);
            });
        })

    }
}


$(function () {
    var model = new Model(['learn javascript', 'learn html', 'learn css']);
    var view = new View(model);
    var controller = new Controller(model, view);
});
