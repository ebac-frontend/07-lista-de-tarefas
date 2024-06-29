$(document).ready(function() {
    $('#adicionar-tarefa').click(function(event) {
        event.preventDefault(); 

        var taskName = $('#escrever-tarefa').val().trim(); 

        if (taskName !== '') {
            var listItem = $('<li>').text(taskName);
            $('#task-list').append(listItem);

            $('#escrever-tarefa').val(''); 
        }
    });

    $(document).on('click', 'li', function() {
        $(this).toggleClass('completed');
    });
});