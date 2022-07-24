// get access to the various input elements
let author = document.querySelector("#name")
let isbn = document.querySelector("#isbn")
let title = document.querySelector("#title")
let btn = document.querySelector(".addbtn")
let books = document.querySelector(".books")

// add a clickable event to the button element
btn.addEventListener('click', btnhandle)



// using event delegation to delete the buttton inside and remove the parent element
books.addEventListener('click', removeBtn)


// add a function to implement the event
function btnhandle(){
if(author.value.trim() !== '' && isbn.value.trim() !== '' && title.value.trim() !==''){
    books.innerHTML+=`<tr>
    <td>${author.value}</td>
    <td>${isbn.value}</td>
    <td>${title.value}</td>
    <td class="delete">X</td>>
</tr>`
author.value = ''
isbn.value = ''
title.value = ''

}else{
    alert("enter book info")
}
}

// implements the delete function
function removeBtn(event){
    let target = event.target
    if(target.classList.contains('delete')){
        target.parentElement.remove()
    }
}