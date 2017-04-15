// Create quill editor
var quill = new Quill('#editor', {
    modules: {
            toolbar: '#toolbar'
          },
    formats: [],
    scrollingContainer: '#scrolling-container',
    theme: 'snow'
});

// Alert Saved when save clicked
var customButton = document.querySelector('.save');
customButton.addEventListener('click', function() {
    alert('Saved!');
});

// Set quill text from text file
var filepath = findGetParameter("source");
var example = readTextFile(filepath);
quill.setText(example);

// Set html title
var filename = filepath.replace(/^.*[\\\/]/, '');
document.getElementById("title").innerHTML = filename;

// Add text value the quill value
var form = document.querySelector('form');
form.onsubmit = function() {
    var about = document.querySelector('input[name=text]');
    about.value = quill.getText(0, quill.getLength());

    alert(about.value);

    return false;
};
