const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

function addTask() {
  const taskText = taskInput.value;
  if (taskText === "") return;

  const li = document.createElement("li");
  li.textContent = taskText;

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.addEventListener("change", () => {
    li.classList.toggle("completed");
  });

  const deleteButton = document.createElement("button");
  deleteButton.textContent = "X";
  deleteButton.addEventListener("click", () => {
    taskList.removeChild(li);
  });

  li.appendChild(checkbox);
  li.appendChild(document.createTextNode(" "));
  li.appendChild(deleteButton);
  taskList.appendChild(li);

  taskInput.value = "";
}

function clearCompleted() {
  const completedTasks = taskList.querySelectorAll(".completed");
  completedTasks.forEach((task) => taskList.removeChild(task));
}
