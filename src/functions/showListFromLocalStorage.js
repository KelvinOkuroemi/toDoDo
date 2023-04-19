function showListFromLocalStorage(){
    const listContainer = document.getElementById("list-container");
    listContainer.innerHTML = localStorage.getItem("data");
}

export default showListFromLocalStorage;