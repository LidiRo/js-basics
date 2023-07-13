// TASK-1
let parent = document.getElementById('parent');
let child = document.getElementById('black-square');
let buttonDelete2 = document.getElementById('button-remove-2');
let buttonDelete3 = document.getElementById('button-remove-3');

buttonDelete2.addEventListener('click', deleteFunction); 
buttonDelete3.addEventListener('click', deleteFunction2); 

function deleteFunction() {
    parent.removeChild(child);
}

function deleteFunction2() {
    child.style.visibility = 'hidden';
}

// TASK-2
function hideAndReturnSquares1() { 
    let element = document.getElementById('black-square-2');
    let visibleElement = window.getComputedStyle(element).visibility === 'visible';
    if (visibleElement) {
        element.style.visibility = 'hidden';
    } else {
        element.style.visibility = 'visible';
    }
}

// TASK-3
function hideAndReturnSquares() { 
    let elements = document.getElementsByClassName('black-square-3');
    for (let i = 0; i < elements.length; i++) { 
        let visibleElement = window.getComputedStyle(elements[i]).visibility === 'visible';
        if (visibleElement) {
            elements[i].style.visibility = 'hidden';
        } else {
            elements[i].style.visibility = 'visible';
    }
    }
}

// TASK-4
function hideBlueSquare() { 
    let inputTask4 = document.getElementById('input-task-4').value;
    if (inputTask4 === ".blue-square-1") {
        document.getElementById('blue-square-1').style.visibility = 'hidden';
    } else if (inputTask4 === ".blue-square-2") {
        document.getElementById('blue-square-2').style.visibility = 'hidden';
    } else if (inputTask4 === ".blue-square-3") {
        document.getElementById('blue-square-3').style.visibility = 'hidden';
    } else if (inputTask4 === ".blue-square-4") {
        document.getElementById('blue-square-4').style.visibility = 'hidden';
    } else if (inputTask4 === ".blue-square-5") {
        document.getElementById('blue-square-5').style.visibility = 'hidden';
    }
}

// TASK-5
let counter = 0;
let element5 = document.getElementById('yellow-square');
element5.addEventListener("click", clickFunction);

function clickFunction() {
    if (counter === 0) {
        alert('Привіт!');
        counter++;
    } else { 
        element5.addEventListener("click", clickFunction2);
    }
}

function clickFunction2() { 
    element5.style.visibility = 'hidden';
}

// TASK-6
let element6 = document.getElementById('red-square');
let button6 = document.getElementById('button-6');
let mouseover = button6.addEventListener("mouseover", mouseoverFunction);
let mouseout = button6.addEventListener("mouseout", mouseoutFunction);

function mouseoverFunction() { 
    element6.style.visibility = 'visible';
}

function mouseoutFunction() { 
    element6.style.visibility = 'hidden';
}

// TASK-7
let element7 = document.getElementById('green-rectangle');
let input = document.getElementById('nameInput');
let focus = input.addEventListener("focus", focusFunction);
let keydown = input.addEventListener("keydown", keydownFunction)

function focusFunction() {
    element7.style.visibility = 'visible';
}

function keydownFunction() {
    element7.style.visibility = 'hidden';
}

// TASK-8
function openImageFunction() {
    let image = document.getElementById('nameInput2').value;
    window.open(image, "_blank");
}

// TASK 9
function openImagesFunction() {
    let images = document.getElementById('nameTextarea').value;
    let allImage = images.split("\n");
    for (let i = 0; i < images.length; i++) { 
        let newImage = document.createElement("img");
        newImage.src = allImage[i];
        document.body.appendChild(newImage);
    }
}

// TASK 10

function getCoordinatesFunction(e) { 
    let x = e.clientX;
    let y = e.clientY;
    let coor = "X: " + x + ", Y: " + y; 
    document.getElementById('coordinates').innerHTML = coor;
}

function clearCoor() {
    document.getElementById('coordinates').innerHTML = "";
}

// TASK 11
let lang = navigator.language;
document.getElementById("language").innerHTML = "Browser language: " + lang;

// TASK 12
if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
} else { 
    document.getElementById("geolocation").innerHTML =
    "Geolocation is not supported by this browser.";
}

function showPosition(position) {
    document.getElementById("geolocation").innerHTML =
    "Ш: " + position.coords.latitude + "<br>" +
    "Д: " + position.coords.longitude;
}

// TASK 13
input1.value = localStorage.getItem('input1');
input1.oninput = () => {
    localStorage.setItem('input1', input1.value);
}

//доробити
let inputValue2 = document.getElementById('input2').value;
document.cookie = inputValue2.value;


input3.value = sessionStorage.getItem('input3');
input3.oninput = () => {
    sessionStorage.setItem('input3', input3.value);
}

// TASK 14
let button14 = document.getElementById('button-14');

window.onscroll = function () {
    if (document.documentElement.scrollTop > (document.documentElement.scrollHeight - 800)) {
        button14.style.display = 'block';
    } else { 
        button14.style.display = 'none';
    }
};

function toTopFunction() {
    document.documentElement.scrollTop = 0;
}

// TASK 15
document.getElementById('block-1').addEventListener('click', clickBlock1);
document.getElementById('block-2').addEventListener('click', clickBlock2);

function clickBlock1() { 
    alert('Ви натиснули на великий блок!');
}

function clickBlock2(e) { 
    document.getElementById('block-1').removeEventListener('click', clickBlock1);
    alert('Ви натиснули на маленький блок!');
}

// TASK 16
let grayBackground = document.getElementById('gray-background');
grayBackground.addEventListener('click', removeGrayBackground);

function addGrayBackground() { 
    grayBackground.style.display = 'block';
    document.documentElement.style.overflow = "hidden";
}

function removeGrayBackground() {
    grayBackground.style.display = 'none';
    document.documentElement.style.overflow = "";
}

// TASK 18
let dropArea = document.getElementById('drop-area');
;['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
    dropArea.addEventListener(eventName, preventDefaults, false);
});

function preventDefaults(e) {
    e.preventDefault();
    e.stopPropagation();
}

;['dragenter', 'dragover'].forEach(eventName => {
    dropArea.addEventListener(eventName, highlight, false);
});

;['dragleave', 'drop'].forEach(eventName => {
    dropArea.addEventListener(eventName, unhighlight, false);
});

function highlight(e) {
    dropArea.classList.add('highlight');
}

function unhighlight(e) {
    dropArea.classList.remove('highlight');
}

dropArea.addEventListener('drop', handleDrop, false);

function handleDrop(e) {
    let dt = e.dataTransfer;
    let files = dt.files;
    handleFiles(files);
}

function handleFiles(files) {
    files = [...files]
    files.forEach(uploadFile)
    files.forEach(previewFile)
}

function uploadFile(file) {
    let url = 'http://127.0.0.1:5500/index.html';
    let formData = new FormData();
    formData.append('file', file);

    fetch(url, {
        method: 'POST',
        body: formData
    })

    .then(() => { alert('Готово') })
    .catch(() => {alert('Помилка')})
}

function previewFile(file) {
    let reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onloadend = function() {
        let img = document.createElement('img')
        img.src = reader.result
        document.getElementById('gallery').appendChild(img)
    }
}