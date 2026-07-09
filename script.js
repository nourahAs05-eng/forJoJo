const cd = document.getElementById("cdButton");
const music = document.getElementById("music");

cd.addEventListener("click", function () {

    if (music.paused) {

        music.play();
        cd.querySelector("img").classList.add("playing");

    } else {

        music.pause();
        cd.querySelector("img").classList.remove("playing");

    }

});