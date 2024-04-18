let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0

function increment() {
    count += 1
    countEl.innerText = count
}

function playClickSound() {
    // Create an Audio object and play the sound
    const clickSound = new Audio('click.mp3');
    clickSound.play();
}
function save() {

    let countStr = count + " - "
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0
}

const incrementBtn = document.getElementById('incrementBtn');
incrementBtn.addEventListener('click', playClickSound);

const saveBtn = document.getElementById('saveBtn');
incrementBtn.addEventListener('click', playClickSound);
