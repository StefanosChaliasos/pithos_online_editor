$(document).ready(function(){
    $('.Preview').click(function(event) { 
       var filepath = (event.target.id);
       var example = readTextFile(filepath);
       // console.log(example.type); // undefined
       example = example.replace(/(?:\r\n|\r|\n)/g, '<br/>');
	   $('#text').html(example);
       $('#myModal').modal('show');
       // alert(example)
    });
});