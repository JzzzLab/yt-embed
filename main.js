function keyUpInput() {
    if (event.keyCode === 13){
        document.getElementById("submit").click();
    }
}

function getVideo() {
    var yt = "https://www.youtube.com/embed/";
    var rel = "?rel=0"
    const inputValue = document.getElementById("myInput").value;
    var video = document.getElementById("video");

    if(inputValue.length < 15) {
        video.setAttribute("src", (yt + inputValue + rel));
    }else {
        var inputURL = new URL(inputValue);
        var vid = inputURL.searchParams.get("v");
        video.setAttribute("src", (yt + vid + rel));
    }
}