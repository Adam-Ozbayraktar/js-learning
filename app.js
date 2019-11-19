const text = document.querySelector(".title");
const changeColor = document.querySelector(".changeColor");
const listInput = document.querySelector(".list-input");
const addListBtn = document.querySelector(".addListBtn");
const userList = document.querySelector(".name-list");

// text.classList.add('change');
changeColor.addEventListener("click", function() {
    // text.classList.add("change");
    text.classList.toggle("change");
});

addListBtn.addEventListener('click', function(){
    // Create an li out of thin air
    const newLi = document.createElement('LI');
    const liContent = document.createTextNode(listInput.value);
    //Add the input value inside the new li
    newLi.appendChild(liContent);
    //Attaching li to the user list
    userList.appendChild(newLi);
});

const userList_all = document.querySelectorAll(".name-list li");

for(user of userList_all){
    user.addEventListener('click', function(){
        // console.log(this);
        this.style.color = "red";
    });
}