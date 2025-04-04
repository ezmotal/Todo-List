// Array to store tasks
const Todo = [];

// Function to render the to-do list
function renderTodolist() {
  let todoListHTML = ""; // Initialize HTML string

  // Loop through each task in the Todo array
  Todo.forEach(function (todoObject, index) {
    const { name, date } = todoObject; // Destructure the object to get name and date

    // Create HTML for each task
    const html = `
    <p>
      <span>${name}</span>
      <span>${date}</span>
      <button onclick="deleteTask(${index})">Delete</button>
    </p>
  `;
    todoListHTML += html; // Append task HTML to the list
  });

  // Update the task list container with the generated HTML
  document.querySelector("#todo-list").innerHTML = todoListHTML;
}

// Function to add a new task
function addTodo() {
  const inputElement = document.querySelector("#type"); // Get the task input field
  const name = inputElement.value; // Get the task name
  const dateInputElement = document.querySelector("#date"); // Get the date input field
  const date = dateInputElement.value; // Get the selected date

  // Add the new task to the Todo array
  Todo.push({ name: name, date: date });

  inputElement.value = ""; // Clear the task input field
  renderTodolist(); // Re-render the task list
}

// Function to delete a task
function deleteTask(index) {
  Todo.splice(index, 1); // Remove the task at the specified index
  renderTodolist(); // Re-render the task list
}
