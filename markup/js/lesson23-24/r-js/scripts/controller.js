define('controller', [], function () {
    var controller = function (model, view){
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
                    valueEditTask.text(inpurForEdit.val());
                    $('.item-edit').show();
                    $('.modal').hide();
                    model.editItem(indexEdit, valueEditTask);
                    view.renderList(model.data);
                });
            })

        }
    };

    return controller;
});
