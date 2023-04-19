import saveDataThroughLocalStorage from "./saveDataThroughLocalStorage";

function addTask() {
    const button = document.getElementById("addBtn");
    const inputBox = document.getElementById("input-box");
    const listContainer = document.getElementById("list-container");
    button.addEventListener("click", () => {
        if (inputBox.value === "") {
            alert("You must input something")
        } else {
            let listElement = document.createElement("li");
            let deleteSpan = document.createElement("span");
            listElement.innerHTML = `<div class="check-circle"></div>${inputBox.value}`;
            deleteSpan.innerHTML = "\u00d7";
            listElement.appendChild(deleteSpan);
            listContainer.appendChild(listElement);
        }
        inputBox.value = "";
        saveDataThroughLocalStorage();
    });
}

export default addTask;