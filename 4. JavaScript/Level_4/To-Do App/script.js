
let tasks = [];

while (true) {
  console.log(`
To-Do App
===========================
1. Add a task
2. View tasks
3. Mark a task complete
4. Exit
`);

  // Get user choice
  let choice = prompt("Enter your choice (1-4): ");

  // Use conditional statements to handle choices
  if (choice === '1') {
    // Add a task
    let task = prompt("Enter a new task: ");
    tasks.push(task + " (Added)");
  } else if (choice === '2') {
    // View tasks
    if (tasks.length === 0) {
      console.log("No tasks to display.");
    } else {
      console.log("\nYour Tasks:");
      for (let i = 0; i < tasks.length; i++) {
        console.log(`${i + 1}. ${tasks[i]}`);
      }
    }
  } else if (choice === '3') {
    // Mark a task complete
    if (tasks.length === 0) {
      console.log("No tasks to mark complete.");
    } else {
      // Display tasks with numbering
      console.log("\nYour Tasks:");
      for (let i = 0; i < tasks.length; i++) {
        console.log(`${i + 1}. ${tasks[i]}`);
      }

      // Get task number to mark complete
      let taskNum = parseInt(prompt("Enter the number of the task to mark complete: ")) - 1;

      // Check if valid task number
      if (taskNum >= 0 && taskNum < tasks.length) {
        tasks[taskNum] = tasks[taskNum].replace(" (incomplete)", " (completed)");
        console.log("Task marked complete!");
      } else {
        console.log("Invalid task number.");
      }
    }
  } else if (choice === '4') {
    // Exit the app
    console.log("Exiting...");
    break;
  } else {
    // Handle invalid choices
    console.log("Invalid choice. Please enter a number between 1 and 4.");
  }
}
