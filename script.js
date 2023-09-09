const inputBox = document.getElementById('input-box');
const addButton = document.getElementById('add-btn');
const ListContainer = document.getElementById('lists');

function addTask() {
    if (inputBox.value == '') {
        alert('Please Enter a valid Task');
    }
    else {
        let task = document.createElement('li');
        task.innerText = inputBox.value;
        ListContainer.appendChild(task);
        let span = document.createElement('span');
        span.innerHTML = '&#10005;';
        task.appendChild(span)
    }
    inputBox.value = '';
    saveData()
}

ListContainer.addEventListener('click',(event) => {
    if(event.target.tagName === 'LI'){
        event.target.classList.toggle('checked');
        saveData()
    }
    else if(event.target.tagName === 'SPAN'){
        event.target.parentElement.remove();
        saveData()
    }
},false);

function saveData(){
    localStorage.setItem('data',ListContainer.innerHTML);
}

function showData(){
    ListContainer.innerHTML = localStorage.getItem('data');
}

showData();