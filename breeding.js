//===================
//  洨洨安配種實驗室
//  by 棒棒勝
//  Powered by 洨洨安實驗室
//===================
// 設定預設值
$('input[id="blur"]').val("0");
$('input[id="brightness"]').val("100");
$('input[id="saturate"]').val("100");
$('input[id="grayscale"]').val("0");
$('input[id="invert"]').val("0");
$('input[id="blurNum"]').val("0");
$('input[id="brightnessNum"]').val("100");
$('input[id="saturateNum"]').val("100");
$('input[id="grayscaleNum"]').val("0");
$('input[id="invertNum"]').val("0");
$('input[id="sepiaNum"]').val("50");
$('input[id="contrastNum"]').val("100");
$('input[id="huerotateNum"]').val("180");
// 讓滑桿左側擁有指示條顏色
ts('.ts.slider').slider();
// 如果滑桿被調整
// -> 則變更 perview>div 內的 CSS
// -> 並輸出 CSS HTML JADE 程式碼
// -> 變更 手動輸入數值 裡的數值
$(" #breeding>div>div>input").on("input", function () {
    $('input[id="grayscaleNum"]').val($('input[id="grayscale"]').val());
    $('input[id="sepiaNum"]').val($('input[id="sepia"]').val());
    $('input[id="saturateNum"]').val($('input[id="saturate"]').val());
    $('input[id="contrastNum"]').val($('input[id="contrast"]').val() * 2);
    $('input[id="huerotateNum"]').val($('input[id="huerotate"]').val() * 3.6);
    $('input[id="invertNum"]').val($('input[id="invert"]').val());
    $('input[id="brightnessNum"]').val($('input[id="brightness"]').val());
    $('input[id="blurNum"]').val($('input[id="blur"]').val() * 0.1);

    var grayscale = document.getElementById("grayscale").value;
    var sepia = document.getElementById("sepia").value;
    var saturate = document.getElementById("saturate").value;
    var contrast = document.getElementById("contrast").value * 2;
    var huerotate = document.getElementById("huerotate").value * 3.6;
    var invert = document.getElementById("invert").value * 0.01;
    var brightness = document.getElementById("brightness").value;
    var blur = document.getElementById("blur").value * 0.1;
    var filter = " invert(" + invert + ")" + " contrast(" + contrast + "%)" + " sepia(" + sepia + "%)" + " hue-rotate(" + huerotate + "deg)" + " grayscale(" + grayscale + "%)" + " blur(" + blur + "px)" + " brightness(" + brightness + "%)" + " saturate(" + saturate + "%)";
    // 變更 perview>div 內的 CSS
    $("#perview>div").css("filter", filter);
    // 並輸出 CSS HTML JADE 程式碼
    $("#CodeForCSS").html("filter:" + filter + ";");
    $("#CodeForHtml").html("&lt;div class=\"ts xiaoan\" style=\"filter:" + filter + ";\"&gt;&lt;/div&gt;");
    $("#CodeForJade").html(".ts.xiaoan(style='filter:" + filter + ";')");
});
// 如果 手動輸入數值裡的數值 被調整
// -> 則變更 perview>div 內的 CSS
// -> 並輸出 CSS HTML JADE 程式碼
// -> 變更 滑桿 裡的數值
$("#Num>div>input").on("input", function () {
    $('input[id="grayscale"]').val($('input[id="grayscaleNum"]').val());
    $('input[id="sepia"]').val($('input[id="sepiaNum"]').val());
    $('input[id="saturate"]').val($('input[id="saturateNum"]').val());
    $('input[id="contrast"]').val($('input[id="contrastNum"]').val() * 0.5);
    $('input[id="huerotate"]').val($('input[id="huerotateNum"]').val() / 3.6);
    $('input[id="invert"]').val($('input[id="invertNum"]').val());
    $('input[id="brightness"]').val($('input[id="brightnessNum"]').val());
    $('input[id="blur"]').val($('input[id="blurNum"]').val() * 10);
    // 修正漸層顏色
    ts('.ts.slider').slider();
    // 輸出 CSS
    var grayscale = document.getElementById("grayscale").value;
    var sepia = document.getElementById("sepia").value;
    var saturate = document.getElementById("saturate").value;
    var contrast = document.getElementById("contrast").value * 2;
    var huerotate = document.getElementById("huerotate").value * 3.6;
    var invert = document.getElementById("invert").value * 0.01;
    var brightness = document.getElementById("brightness").value;
    var blur = document.getElementById("blur").value * 0.1;
    var filter = " invert(" + invert + ")" + " contrast(" + contrast + "%)" + " sepia(" + sepia + "%)" + " hue-rotate(" + huerotate + "deg)" + " grayscale(" + grayscale + "%)" + " blur(" + blur + "px)" + " brightness(" + brightness + "%)" + " saturate(" + saturate + "%)";
    // 變更 perview>div 內的 CSS
    $("#perview>div").css("filter", filter);
    // 並輸出 CSS HTML JADE 程式碼
    $("#CodeForCSS").html("filter:" + filter + ";");
    $("#CodeForHtml").html("&lt;div class=\"ts xiaoan\" style=\"filter:" + filter + ";\"&gt;&lt;/div&gt;");
    $("#CodeForJade").html(".ts.xiaoan(style='filter:" + filter + ";')");
});