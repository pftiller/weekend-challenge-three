
console.log('client.js sourced');

$(document).ready(onReady);


function onReady () {
    grabTask();
    $('.newTask').on('click', newTask);   
    $('#listOfTasks').on('change', '.complete', changeStatus);
    $('#listOfTasks').on('click', '.delete', remove);
}

function newTask () {

        const newTask = {
            taskDetails: $('#taskToAdd').val()
        }
        $.ajax({
            method: "POST",
            url:'/mytasklist',
            data: newTask,
            success: function (response) {
                console.log('post success ', response );
                grabTask();
            }
        });
    }

    function changeStatus() {
        let status = $(this).parent().prev().data('status');
        $(this).parent().text(' ');
        $(this).parent().parent().css("text-decoration", "line-through");
        $.ajax({
            method: "POST",
            url: '/mytasklist/' + status,
            success: function (response) {
                console.log('success: ', response);
                $('#listOfTasks').empty();
                grabTask(response);
            }   
        });
    }


function grabTask () {
    $.ajax({
        method: "GET",
        url: '/mytasklist',
        success: function (response) {
            console.log('success: ', response);
            $('#listOfTasks').empty();
            printTasks(response);
        }   
    });
}

function remove() {
    let id = $(this).parent().parent().data('id');
    $(this).parent().parent().remove();
    $.ajax({
        method: "DELETE",
        url:'/mytasklist/' + id,
        success: function (response) {
            console.log('delete success ', response);
        }
    });
}


function printTasks(taskList) {
    for(let i = 0; i < taskList.length; i++) {
        $('#listOfTasks').append('<tr data-id="' + taskList[i].id + '"><td>' + taskList[i].taskdetails + '</td>' + '<td  data-status="' + taskList[i].status + '">' + taskList[i].status + '<td><input class="complete" type="checkbox" value=""></td><td><button class="delete">Delete</button></tr>');
    }
}


