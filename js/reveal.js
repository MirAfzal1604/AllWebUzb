window.addEventListener("scroll", revealXLeft);

function revealXLeft() {
    const revealsReverse = document.querySelectorAll(".revealXLeft");

    for (i = 0; i < revealsReverse.length; i++) {
        const windowinner = window.innerHeight;
        const revealReverseTop = revealsReverse[i].getBoundingClientRect().top;
        const revealReversepoint = 120;

        if (revealReverseTop < windowinner - revealReversepoint) {
            revealsReverse[i].classList.add("active");
        } else {
            revealsReverse[i].classList.remove("active");
        }
    }
}


window.addEventListener("scroll", revealXRight);

function revealXRight() {
    const revealsReverseX = document.querySelectorAll(".revealXRight");

    for (i = 0; i < revealsReverseX.length; i++) {
        const windowinner = window.innerHeight;
        const revealReverseTopY = revealsReverseX[i].getBoundingClientRect().top;
        const revealReversepointY = 120;

        if (revealReverseTopY < windowinner - revealReversepointY) {
            revealsReverseX[i].classList.add("active");
        } else {
            revealsReverseX[i].classList.remove("active");
        }
    }
}