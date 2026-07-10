const taskForm=document.getElementById("task-form");
const taskList=document.getElementById("task-list");

taskForm.addEventListener("submit",function(event){
    event.preventDefault();
    
    const title=document.getElementById("title").value;
    const description=document.getElementById("description").value;
    const date=document.getElementById("date").value;

    if(title==="" || description===""|| date===""){
        alert("Please fill all fields.");
        return;
    }

    console.log(title);
    console.log(description);
    console.log(date);

    const taskCard=document.createElement("div");
    taskCard.classList.add("task-card");
    taskCard.innerHTML=`
    <h3>${title}</h3>
    <p>${description}</p>
    <p><strong>Due:</strong>${date}</p>
    <button class="complete-btn">Complete</button>
    <button class="delete-btn">Delete</button>`;
    
    taskList.appendChild(taskCard);
    taskForm.reset();

    const deleteButton=taskCard.querySelector(".delete-btn");
    deleteButton.addEventListener("click",function(){
        taskCard.remove();

    })

    const completeButton=taskCard.querySelector(".complete-btn");
    completeButton.addEventListener("click",function(){
        taskCard.classList.toggle("completed");
    })

    
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