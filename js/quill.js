// Set data from text file
var filepath = findGetParameter("source");
var data = readTextFile(filepath);

// Find file name
var filename = filepath.replace(/^.*[\\\/]/, '');

// Set editor setiings
var editorSettings = {
        modules: {
                toolbar: '#toolbar'
              },
        formats: [],
        scrollingContainer: '#scrolling-container',
        theme: 'snow'
};

openEditor(filename, data, editorSettings, saveFile);


