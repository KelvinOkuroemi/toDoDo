function saveDataThroughLocalStorage() {
    const listContainer = document.getElementById("list-container");
    localStorage.setItem("data", listContainer.innerHTML);
}

function showListFromLocalStorage() {
    const listContainer = document.getElementById("list-container");
    listContainer.innerHTML = localStorage.getItem("data");
}

function updateLocalStorage() {
    const listContainer = document.getElementById("list-container");
    listContainer.addEventListener("click", (e) => {
      if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveDataThroughLocalStorage();
      } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveDataThroughLocalStorage();
      }
    })
  }
  

export { saveDataThroughLocalStorage,showListFromLocalStorage,updateLocalStorage };