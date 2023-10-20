let nameInput = document.getElementById("namn");
let numInput = document.getElementById("nummer");
let createContactBtn = document.getElementById("skapaKontakt");
let errorText = document.getElementById("errorText");

//ny
let clearContactsBtn = document.createElement("button");

clearContactsBtn.innerText = "Rensa alla kontakter";
clearContactsBtn.id = "rensaKontakterBtn";
let myContactsArray = [];

createContactBtn.addEventListener("click", function () {
  namn = nameInput.value;
  nummer = numInput.value;
  if (namn.length > 0 && nummer.length > 0) {
    myContactsArray.push({ namn, nummer });
    errorText.innerText = "";

    generateContactList();
  } else {
    errorText.innerText = "Fyll i båda fälten.";
  }
});

clearContactsBtn.addEventListener("click", function () {
  myContactsArray = [];
  contacts.innerHTML = "";
  clearContactsBtn.remove();
});

function generateContactList() {
  contacts.innerHTML = "";

  for (let i = 0; i < myContactsArray.length; i++) {
    let deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete";

    let editBtn = document.createElement("button");
    editBtn.innerText = "Edit";

    deleteBtn.onclick = function () {
      myContactsArray.splice(i, 1);
      generateContactList();
    };
    editBtn.onclick = function () {
      namn = document.getElementById(`newName${[i]}`);
      nummer = document.getElementById(`newNumber${[i]}`);

      if (editBtn.innerText === "Edit") {
        namn.disabled = false;
        nummer.disabled = false;
        editBtn.innerText = "Spara";
      } else if (editBtn.innerText === "Spara") {
        if (namn.value.length > 0 && nummer.value.length > 0) {
          myContactsArray[i].namn = namn.value;
          myContactsArray[i].nummer = nummer.value;
          generateContactList();

          errorElement.innerText = "";
        } else {
          errorElement.innerText = "Kan ej spara tomma fält";
        }
      }
    };
    let errorElement = document.createElement("p");
    errorElement.classList.add("editError");
    errorElement.id = `newErrorfield${[i]}`;

    let createList = document.createElement("li");
    createList.classList.add("newContact");
    let newNameInput = document.createElement("input");
    newNameInput.value = myContactsArray[i].namn;
    newNameInput.disabled = true;
    newNameInput.id = `newName${[i]}`;

    let newNumberInput = document.createElement("input");
    newNumberInput.value = myContactsArray[i].nummer;
    newNumberInput.disabled = true;
    newNumberInput.id = `newNumber${[i]}`;

    let nameLabel = document.createElement("label");
    nameLabel.innerText = "Namn: ";
    let nummberLabel = document.createElement("label");
    nummberLabel.innerText = "Tel: ";
    contacts.appendChild(createList);
    //ny
    contactsFlex.appendChild(clearContactsBtn);
    nameLabel.appendChild(newNameInput);
    nummberLabel.appendChild(newNumberInput);
    createList.appendChild(nameLabel);
    createList.appendChild(nummberLabel);
    createList.appendChild(deleteBtn);
    createList.appendChild(editBtn);
    createList.appendChild(errorElement);
  }
}
