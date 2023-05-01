import { updateUI,addToDo } from "../functions/toDoFunctions";
import { showListFromLocalStorage,updateLocalStorage, } from "../functions/localStorageFunctions";

function createHomePage() {
    addToDo();
    updateLocalStorage();
    showListFromLocalStorage();
}

export default createHomePage;