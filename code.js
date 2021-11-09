
const show_value = document.querySelector(".show_value");



const select_operation = document.querySelector("input[name=name]");
const checkbox = document.querySelectorAll("input[type=checkbox]");


// change event input fild
select_operation.addEventListener("change", changeHandelar);
console.log(select_operation);
function changeHandelar(event){
    console.log(event.target.classList.add("siku"));
    console.log(event.target.classList);
    console.log(event.type);
    show_value.textContent=event.target.value;
}


//cahnge event checkbox fild
Array.from(checkbox).map((checkbox) => {
    checkbox.addEventListener("change", checkboxHandelar);
})

function checkboxHandelar(event){
    if(event.target.checked){
        console.log(event.target.value)
        show_value.textContent=event.target.value;
    }
}


//chagne event select option
const py_value = document.querySelector(".change_checkbox Select");
py_value.addEventListener('change', (event)=>{
    let t_value = event.target.value;
    console.log(event.document)
    alert(t_value);
})