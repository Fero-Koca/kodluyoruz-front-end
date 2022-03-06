listDOM = document.querySelector("#list");
btnDOM = document.querySelector("#liveToastBtn");
taskDOM = document.querySelector("#task");
liDOM = document.getElementsByTagName("li");



for (i = 0; i < liDOM.length; i++){
    let closeButton = document.createElement("span");
    closeButton.textContent = "\u00D7";
    closeButton.classList.add("close");
    closeButton.onclick = removeButton;
    liDOM[i].append(closeButton);
    liDOM[i].onclick = check;
}

btnDOM.addEventListener('click', elemanEkle);

function check(){
    this.classList.toggle("checked");

}
function removeButton(){
    this.parentElement.remove();
    
}

function elemanEkle(){
    if(taskDOM.value == "") {
        $('.error').toast('show');
    } else { $('.success').toast('show')};

    let liDOM = document.createElement('li')
    listDOM.appendChild(liDOM);
    liDOM.innerHTML = task.value;
    taskDOM.value = ""     
    
    let closeButton = document.createElement("span");
    closeButton.textContent = "\u00D7";
    closeButton.classList.add("close");
    closeButton.onclick = removeButton;
    liDOM.append(closeButton);
    liDOM.onclick = check;
    listDOM.append(liDOM);
}