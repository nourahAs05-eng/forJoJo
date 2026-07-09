const cd = document.getElementById("cdButton");
const music = document.getElementById("music");

cd.addEventListener("click", async function () {

    if (music.paused) {

        try {
            await music.play();

            cd.querySelector("img").classList.add("playing");

        } catch (error) {
            console.log("Audio error:", error);
        }

    } else {

        music.pause();

        cd.querySelector("img").classList.remove("playing");

    }

});