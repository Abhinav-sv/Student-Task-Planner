const taskForm = document.getElementById("task-form");
const taskList = document.getElementById("task-list");

// Display one task
function displayTask(task) {
    const taskCard = document.createElement("div");
    taskCard.classList.add("task-card");

    taskCard.innerHTML = `
        <h3>${task.title}</h3>
        <p>${task.description}</p>
        <p><strong>Due:</strong> ${task.date}</p>
        <button class="complete-btn">Complete</button>
        <button class="delete-btn">Delete</button>
    `;

    taskList.appendChild(taskCard);

    const deleteButton = taskCard.querySelector(".delete-btn");
    deleteButton.addEventListener("click", function () {
        taskCard.remove();
    });

    const completeButton = taskCard.querySelector(".complete-btn");
    completeButton.addEventListener("click", function () {
        taskCard.classList.toggle("completed");
    });
}

// Load all tasks from backend
async function loadTasks() {
    try {
        const response = await fetch("http://localhost:5000/tasks");
        const tasks = await response.json();

        taskList.innerHTML = "";

        tasks.forEach(task => {
            displayTask(task);
        });

    } catch (error) {
        console.error("Error loading tasks:", error);
    }
}

// Load tasks when page opens
loadTasks();

taskForm.addEventListener("submit", async function (event) {
    event.preventDefault();

    const title = document.getElementById("title").value;
    const description = document.getElementById("description").value;
    const date = document.getElementById("date").value;

    if (title === "" || description === "" || date === "") {
        alert("Please fill all fields.");
        return;
    }

    try {
        const response = await fetch("http://localhost:5000/tasks", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                title,
                description,
                date
            })
        });

        const newTask = await response.json();

        displayTask(newTask);

        taskForm.reset();

    } catch (error) {
        console.error("Error adding task:", error);
        alert("Unable to connect to the server.");
    }
});

const getStarted = document.getElementById("get-started");

getStarted.addEventListener("click", function () {
    document.getElementById("planner").scrollIntoView({
        behavior: "smooth"
    });
});

const contactForm = document.getElementById("contact-form");

contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    alert("Your message has been sent successfully!");

    contactForm.reset();
});