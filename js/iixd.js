var handleFileSelect = function(evt) {
    var files = evt.target.files;
    var file = files[0];

    if (files && file) {
        var reader = new FileReader();

        reader.onload = function(readerEvt) {
            var binaryString = readerEvt.target.result;
            var base64String = btoa(binaryString);
            var imageTag = $('<img />', { 
                src: 'data:image;base64,' + base64String,
                alt: 'preview'
            });
            $('#previewarea').empty().append(imageTag);
        };
        reader.readAsBinaryString(file);
    }
};

$( document ).ready(function() {
    $('#fotoinput').change(handleFileSelect);
});
