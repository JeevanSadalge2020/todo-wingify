console.log("Hello World");

const addBtn = document.querySelector(".btn");
const input = document.querySelector("#input");
const todoList = document.querySelector(".todo-list");
const todoArray = [];
const deleteBtn = document.querySelector(".delete");
const editBtn = document.querySelector(".edit");
const count = document.querySelector(".count");

addBtn.addEventListener("click", addItem);
deleteBtn.addEventListener("click", deleteItem);
editBtn.addEventListener("click", editItem);

function addItem() {
  const todo = input.value;
  todoArray.push(todo);
  count.textContent = todoArray.length;
  const html = `<input type="checkbox" name="${todo}" class="${todo}" />
            <p>${todo}</p>
            <button class="edit">Edit</button
            ><button class="delete" type="submit">Delete</button>`;
  const li = document.createElement("li");
  li.innerHTML = html;
  todoList.appendChild(li);
  input.value = "";
}

function deleteItem(item) {
  const itemToDelete = document.querySelector(`.${item}`);
  itemToDelete.remove();
}

function editItem(item) {
  const itemToEdit = document.querySelector(`.${item}`);
  //EDIT LOGIC
}
