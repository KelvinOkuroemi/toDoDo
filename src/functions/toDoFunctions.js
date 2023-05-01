import ToDo from "./Objects";
import { saveDataThroughLocalStorage, showListFromLocalStorage } from "./localStorageFunctions";

const toDoList = [];

function addToDo() {
    const form = document.querySelector("form");
    form.addEventListener("submit", (e) => {
        event.preventDefault();
        const inputBox = document.getElementById("input-box");
        const newToDo = new ToDo(inputBox.value);
        toDoList.push(newToDo)
        updateUI();
        inputBox.value = ""
    })
}

function updateUI() {
    const listContainer = document.getElementById("list-container");
    const inputBox = document.getElementById("input-box");
    console.log(toDoList);
    if (inputBox.value === "") {
        alert("You must input something")
    } else {
        for (const todo of toDoList) {
            const li = document.createElement('li');
            li.textContent = todo.description;
            let deleteSpan = document.createElement("span");
            li.innerHTML = `<div class="check-circle"></div>${inputBox.value}`;
            deleteSpan.innerHTML = "\u00d7";
            listContainer.appendChild(li);
            li.appendChild(deleteSpan);
        }

    }
    inputBox.value = "";
    saveDataThroughLocalStorage();

}

export { addToDo, updateUI }