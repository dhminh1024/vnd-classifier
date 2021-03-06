(function () {
    var video = document.getElementById('video');
    var canvas = document.getElementById('canvas');
    var context = canvas.getContext('2d');
    var photo = document.getElementById('photo');
    var vendorUrl = window.URL || window.webkitURL;


    navigator.getMedia = navigator.getUserMedia ||
        navigator.webkitGetUserMedia ||
        navigator.mozGetUserMedia ||
        navigator.msGetUserMedia;

    navigator.getMedia({
        video: true,
        audio: false
    }, function (stream) {
        video.srcObject = stream;
        video.play();
    }, function (error) {
        // An error occur
        // error.code
    })

    document.getElementById('capture').addEventListener('click', function () {
        context.drawImage(video, 0, 0, 400, 250);
        photo.setAttribute('src', canvas.toDataURL('image/jpeg'));
        canvas.toBlob(function (blob) {
            pond.addFile(blob);
            replaced = true;
        }, 'image/jpeg');
    });
})();