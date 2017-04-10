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