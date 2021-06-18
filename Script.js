let newList = document.createElement("li");
let spottedAnimals = document.getElementById("spotted-animals-list");



document.getElementsByTagName("button")[0].id = ("The-Lion");

document.getElementsByTagName("button")[1].id = ("The-Leopard");

document.getElementsByTagName("button")[2].id = ("The-Elephant");

document.getElementsByTagName("button")[3].id = ("The-Rhino");

document.getElementsByTagName("button")[4].id = ("The-Buffalo");

document.getElementsByTagName("ul")[0].id = ("TheBigFiveList");

document.getElementById('The-Lion').addEventListener('click', function () { alert("A Lion has been spotted") });

document.getElementById('The-Leopard').addEventListener('click', function () { alert("A Leopard has been spotted") });

document.getElementById('The-Elephant').addEventListener('click', function () { alert("An Elephant has been spotted") });

document.getElementById('The-Rhino').addEventListener('click', function () { alert("A Rhino has been spotted") });

document.getElementById('The-Buffalo').addEventListener('click', function () { alert("A Buffalo has been spotted") });

document.getElementById('remove-first-item-button').addEventListener('click', removeFirstItem);

document.getElementById('remove-all-button').addEventListener('click', removeAllItems);

let bigFiveList = document.getElementById("TheBigFiveList");

function removeFirstItem() {
    bigFiveList.removeChild(bigFiveList.childNodes[0]);
}

function removeAllItems() {
    bigFiveList.innerHTML = '';
    // bigFiveList.remove(bigFiveList); Deze bewaar ik als oefening/test
}