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

    createContactList();
  } else {
    errorText.innerText = "Both fields are required.";
  }
});

clearContactsBtn.addEventListener("click", function () {
  myContactsArray = [];
  contacts.innerHTML = "";
  clearContactsBtn.remove();
});

function createContactList() {
  contacts.innerHTML = "";

  for (let i = 0; i < myContactsArray.length; i++) {
    let deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete";

    let editBtn = document.createElement("button");
    editBtn.innerText = "Edit";

    deleteBtn.onclick = function () {
      myContactsArray.splice(i, 1);
      createContactList();
    };
    editBtn.onclick = function () {
      namn = document.getElementById(`newName${[i]}`);
      nummer = document.getElementById(`newNumber${[i]}`);

      if (editBtn.innerText === "Edit") {
        namn.disabled = false;
        nummer.disabled = false;
        editBtn.innerText = "Spara";
      } else if (editBtn.innerText === "Spara") {
        myContactsArray[i].namn = namn.value;
        myContactsArray[i].nummer = nummer.value;

        createContactList();
      }
    };

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
  }
}
