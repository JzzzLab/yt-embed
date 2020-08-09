function keyUpInput() {
    if (event.keyCode === 13){
        document.getElementById("submit").click();
    }
}

function getVideo() {
    var yt = "https://www.youtube.com/embed/";
    var relList = "?rel=0&autoplay=1&list=";
    var relLoop = "?rel=0&autoplay=1&loop=1&playlist=";
    
    const inputValue = document.getElementById("myInput").value;
    var video = document.getElementById("video");
    var isLoop = document.getElementById("myCheck").checked;
    
    if(inputValue.length < 15) {
        video.setAttribute("src", (yt + inputValue + relLoop + inputValue));
    }else {
        var inputURL = new URL(inputValue);
        var vid = inputURL.searchParams.get("v");
        var lid = inputURL.searchParams.get("list");
        if(isLoop) {
            video.setAttribute("src", (yt + vid + relLoop + vid));
        }else {
            video.setAttribute("src", (yt + vid + relList + lid));
        }
    }
}