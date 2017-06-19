ts('.ts.slider').slider();
$("#breeding >div>div>input").change(function () {
    var grayscale = document.getElementById("grayscale").value;
    var sepia = document.getElementById("sepia").value;
    var saturate = document.getElementById("saturate").value;
    var contrast = document.getElementById("contrast").value * 2;
    var huerotate = document.getElementById("huerotate").value * 3.6;
    var invert = document.getElementById("invert").value * 0.01;
    var brightness = document.getElementById("brightness").value;
    var blur = document.getElementById("blur").value * 0.1;
    var filter = " invert(" + invert + ")" + " contrast(" + contrast + "%)" + " sepia(" + sepia + "%)" + " hue-rotate(" + huerotate + "deg)" + " grayscale(" + grayscale + "%)" + " blur(" + blur + "px)" + " brightness(" + brightness + "%)" + " saturate(" + saturate + "%)";
    $("#perview>div").css("filter", filter);
    $("#data").html("filter:" + filter + ";");
});