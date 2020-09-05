document.addEventListener("DOMContentLoaded", () => {
  // your code <here></here>

  // when clock the button
  const submit = document.querySelector("[type=submit]");
  const tasks = document.querySelector("#tasks");
  const newTask = document.querySelector("#new-task-description");
  // when todo list
  submit.addEventListener("click", (e) => {
    e.preventDefault();
    // prevent from adding empty tasks
    if (newTask.value == null || newTask.value === "") {
      return;
    }
    let listItem = document.createElement("li");
    // <button data-description="d">X</button>
    const deleteButton = document.createElement("button");
    deleteButton.innerText = "X";
    deleteButton.setAttribute("data-description", "d");
    listItem.innerText = newTask.value;
    listItem.appendChild(deleteButton);
    tasks.appendChild(listItem);
    newTask.value = "";

    deleteButton.addEventListener("click", (e) => {
      deleteButton.parentElement.remove();
    });
  });
});
