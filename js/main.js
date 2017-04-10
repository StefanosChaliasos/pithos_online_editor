$(document).ready(function(){
    $('.Preview').click(function(event) { 
       var filepath = (event.target.id);
       var example = readTextFile(filepath);
	   $('#text').html(example);
       $('#myModal').modal('show');
       // alert(example)
    });
});