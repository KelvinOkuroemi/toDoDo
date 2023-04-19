function saveDataThroughLocalStorage(){
    const listContainer = document.getElementById("list-container");
    localStorage.setItem("data",listContainer.innerHTML);
}

export default saveDataThroughLocalStorage;