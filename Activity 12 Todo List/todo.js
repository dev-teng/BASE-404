document.querySelector("#addList").addEventListener('click', () => {
  document.querySelector("#inputList").value;
  if(document.querySelector("#inputList").value !== "") {
    document.querySelector("#listArea").innerHTML += 
    `
        <div class="col-9">
            <div class="card-body d-flex align-items-center bg-white p-3 rounded mb-2 position-relative">
              <button class="rounded p-1 me-2 checkButton">check</button>
              <button class="btn btn-danger deleteButton position-absolute end-0 me-3">X</button>
              <span>${document.querySelector("#inputList").value}</span>   
            </div>
        </div>  
  
    `
  document.querySelector("#inputList").value = "";
  }else{
    alert("Field cannot be empty 😡");
  }

const checkButtons = document.querySelectorAll(".checkButton");
checkButtons.forEach((checkButton) => {
  checkButton.addEventListener('click', (event) => {
    const textElement = event.target.parentElement.lastElementChild;
    if(textElement.style.textDecoration === "line-through"){
      textElement.style.textDecoration = "none";
    }
    else{
      textElement.style.textDecoration = "line-through";
    }

    const button = event.target;

    if(button.textContent === "check") {
      button.textContent = "checked";
      button.classList.add("checked");
    }else {
      button.textContent = "check";
      button.classList.remove("checked");
    }

  })

});

const deleteButtons = document.querySelectorAll(".deleteButton");
deleteButtons.forEach((deleteButton) => {
deleteButton.addEventListener('click',(event) => {
        event.target.parentElement.remove();
       
    })
  })
 
});