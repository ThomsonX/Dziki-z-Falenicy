let currentNum = 1;
let score = 0;
let hearts = 3;
let pressed = true;

sessionStorage.setItem('score', 0);

document.getElementById('cyferka').textContent = currentNum;
let gameInterval = setInterval(() => {
    if(should_be_pressed() && !pressed) {
        hearts -= 1;
        if(hearts == 0) {
            sessionStorage.setItem("score", String(score));
            document.location.href = "game-over.html";
        }
        update_hearts();

    }
    currentNum++;
    document.getElementById('cyferka').textContent = currentNum;
    pressed = false;
}, 800);
// clearInterval(gameInterval);


const heartsS = document.querySelectorAll(".hp");
function update_hearts() {
    let counter = 0;
    for(const el of heartsS) {
        if (counter < hearts) {

            el.style.display = "block" ;
        } else {
            el.style.display = "none";
        }
        counter++;
    }
}
update_hearts();

function should_be_pressed() {
    return currentNum % 7 == 0 || String(currentNum).includes('7');
}

const przycisk = document.getElementById('przycisk');
przycisk.onclick = () => {
    if(should_be_pressed()) {
        score += 10;
    } else {
        score -= 5;
        hearts -= 1;

        if(hearts == 0) {
            sessionStorage.setItem("score", String(score));

            document.location.href = "game-over.html";
        }
    }
    update_hearts();
    pressed = true;
    document.getElementById('wynik').textContent = `PTS: ${score}`;
};