$(document).ready(function(){
    $('form').submit(function(event){
        event.preventDefault();
        let task = $("input[name='tarefa']").val();
        $("ul").append("<li>"+task+"</li>");
        $("input[name='tarefa']").val("");
    });
    $("ul").on("click", "li", function(){
        $(this).css("text-decoration", "line-through");
    });
});
