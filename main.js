$(document).ready(function(){
    $('button').on('click', function() {

        const newItem = $('#listItem').val()
        const addNewItem = $('<li style="display: none"></li>');
        const completedItem = $("li").val();

        $(`
            <li>
                ${newItem}
            </li>
        `).appendTo(addNewItem);


        $(addNewItem).append("ul");
        $(addNewItem).fadeIn();
        $("#listItem").val("");
        
        $("li").click(function() {
            $("li").css("text-decoration", "line-throught");
        })
        })
    }) 