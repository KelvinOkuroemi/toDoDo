import addTask from "../functions/addTask";
import updateLocalStorage from "../functions/updateLocalStorage";
import showListFromLocalStorage from "../functions/showListFromLocalStorage";


function createHomePage() {
    addTask();
    updateLocalStorage();
    showListFromLocalStorage();
}

export default createHomePage;