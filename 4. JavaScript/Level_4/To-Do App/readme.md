## To-Do App 

This JavaScript code implements a simple to-do list application. It allows users to add tasks, view existing tasks, mark tasks as complete, and exit the application.

### Functionality

The code uses a `while` loop to keep the application running until the user chooses to exit. Inside the loop, the following functionalities are available:

1. **Add a task** (choice 1): Prompts the user for a new task and adds it to the `tasks` array with the status "(Added)".
2. **View tasks** (choice 2): Checks if there are any tasks. If empty, displays a message. Otherwise, iterates through the `tasks` array and displays each task with its corresponding number using a `for` loop.
3. **Mark a task complete** (choice 3): Similar to viewing tasks, checks for emptiness and displays existing tasks with numbering. Prompts the user for the number of the task to mark complete. Validates the user input and if correct, replaces the task status in the `tasks` array from "(Added)" to "(completed)".
4. **Exit the app** (choice 4): Exits the `while` loop, terminating the application.

### Code Structure

The code is well-structured with clear comments explaining each section:

- **Initialization:** Declares an empty array `tasks` to store the to-do items.
- **Main Loop:** Uses a `while` loop to keep the app running.
  - **Menu:** Displays the menu options with a formatted header using template literals.
  - **User Input:** Prompts the user for their choice and stores it in the `choice` variable.
  - **Conditional Statements:** Uses an `if-else if` structure to handle different user choices:
    - **Choice 1:** Adds a new task.
    - **Choice 2:** Views existing tasks.
    - **Choice 3:** Marks a task complete.
    - **Choice 4:** Exits the app.
    - **Default:** Handles invalid choices.

### Variables

- `tasks`: An array to store the to-do items as strings with their status appended (e.g., "task (Added)" or "task (completed)").
- `choice`: A string variable to store the user's menu choice.
- `taskNum`: An integer variable to store the task number entered by the user (for marking complete).
