import saveDataThroughLocalStorage from "./saveDataThroughLocalStorage";

function updateLocalStorage(){
    const listContainer = document.getElementById("list-container");
    listContainer.addEventListener("click",(e)=>{
        if(e.target.tagName === "LI"){
            e.target.classList.toggle("checked");
            saveDataThroughLocalStorage();
        }else if(e.target.tagName === "SPAN"){
            e.target.parentElement.remove();
            saveDataThroughLocalStorage();
        }
    })
}

export default updateLocalStorage;