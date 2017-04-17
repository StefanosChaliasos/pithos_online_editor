function readTextFile(file)
{
    /* 
     * Load example data
     */
    var stringData = $.ajax({
                    url: file,
                    async: false
                 }).responseText;
    return stringData;
}

function findGetParameter(parameterName) {
    var result = null,
        tmp = [];
    var items = location.search.substr(1).split("&");
    for (var index = 0; index < items.length; index++) {
        tmp = items[index].split("=");
        if (tmp[0] === parameterName) result = decodeURIComponent(tmp[1]);
    }
    return result;
}

function saveFile() {
    // Alert Saved when save clicked
    var customButton = document.querySelector('.save');
    customButton.addEventListener('click', function() {
        alert('Saved!');
    });
    
    var form = document.querySelector('form');
    form.onsubmit = function() {
        // Add to text value the quill value
        var text = document.querySelector('input[name=text]');
        text.value = quill.getText(0, quill.getLength());;

        // Add to name value the filename value
        var name = document.querySelector('input[name=name]');
        name.value = filename;
        
        alert(name.value);
        alert(text.value);
        
        return false;
    };
}

function openEditor(filename, data, editorSettings, saveCallback) {
    // set html title
    document.getElementById("title").innerHTML = filename;
    
    // Create quill editor
    var quill = new Quill('#editor', {
        modules: {
                toolbar: '#toolbar'
              },
        formats: [],
        scrollingContainer: '#scrolling-container',
        theme: 'snow'
    });
    
    // make quill editor global
    window.quill = quill;
    
    // set editor's data
    quill.setText(data);
    
    saveFile();
    
}


