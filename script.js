let initialData = [
    { id: 1, name: "john", age: "18", profession: "developer" },
    { id: 2, name: "jack", age: "20", profession: "developer" },
    { id: 3, name: "karen", age: "19", profession: "admin" },
  ];
  
  function renderUsers(users) {
    const usersDiv = document.getElementById("users");
    usersDiv.innerHTML = "";
  
    for (const user of users) {
      const card = document.createElement("div");
      card.classList.add("card");
      card.innerHTML = `
        <h3>${user.name}</h3>
        <p>Age: ${user.age}</p>
        <p>Profession: ${user.profession}</p>
      `;
      usersDiv.appendChild(card);
    }
  }
  
  renderUsers(initialData);
  
  const filterBtn = document.getElementById("filter-btn");
  filterBtn.addEventListener("click", () => {
    const profession = document.getElementById("profession").value;
  
    if (profession === "") {
      alert("Please select a profession");
      return;
    }
  
    const filteredUsers = initialData.filter((user) => user.profession === profession);
    renderUsers(filteredUsers);
  });
  
  const addBtn = document.getElementById("add-btn");
  addBtn.addEventListener("click", () => {
    const name = document.getElementById("name").value;
    const age = document.getElementById("age").value;
    const profession = document.getElementById("profession-input").value;
  
    if (name === "" || age === "" || profession === "") {
      alert("Please fill all fields");
      return;
    }
  
    const id = initialData.length + 1;
    const newUser = { id, name, age, profession };
    initialData.push(newUser);
    renderUsers(initialData);
  });
  