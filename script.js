let input = document.querySelector(".inputInfo");
let addBtn = document.querySelector(".addBtn");
let findBtn = document.querySelector(".findBtn")
let list = document.querySelector(".listInfo");

let listItems = [];


fetch(`https://rn-todo-app-c27d4.firebaseio.com/todos.json`)
    .then((data) => data.json())
    .then((data) => {
        for (let key in data) {
            let li = document.createElement("li");
            li.classList.add("listItem");
            li.innerHTML = data[`${key}`].title;
            list.appendChild(li);
            listItems.push(data[`${key}`].title);
        }
    })
    .catch((err) => console.log('Error', err));

class NewLi{
    constructor(value, clas) {
        this.value = value;
        this.clas = clas;
    }

    create(){
        let li = document.createElement("li");
        li.classList.add(this.clas);
        li.innerHTML = this.value;
        list.appendChild(li);
        listItems.push(this.value);
        console.log(listItems);
        }
    }

addBtn.addEventListener("click",function(){
    if(input.value != ""){
        const n = new NewLi(input.value, "listItem");
        n.create();
    }
})

findBtn.addEventListener("click", function(){
    let listItem = document.querySelectorAll(".listItem");
    for( let innerText of listItem){
        innerText.style.display = "none";
        if(innerText.innerHTML.startsWith(input.value)){
            innerText.style.display = "list-item";
        }
        if(input.value == ""){
            innerText.style.display = "list-item";
        }
    }
})

