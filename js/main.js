$(document).ready(function(){
    $('.Preview').click(function(event) { 
       var filepath = (event.target.id);
       var filename = filepath.replace(/^.*[\\\/]/, '');
       var data = readTextFile(filepath);
       // console.log(example.type); // undefined
       var options = {
        readOnly: true
       };
	   modalPreview(filename, data, options);
    });
    
    $('.Edit').click(function(event) { 
       var filepath = (event.target.id);
       var filename = filepath.replace(/^.*[\\\/]/, '');
       var data = readTextFile(filepath);
       var options = {
            modules: {
                    toolbar: '#toolbar'
                  },
            formats: [],
            scrollingContainer: '#scrolling-container',
            theme: 'snow'
       }
	   modalEdit(filename, data, options, saveFile);
    });
});