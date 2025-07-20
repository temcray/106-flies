function saveTask() {//get the vales
    const title = $("#txtTitle").val();
    const desc = $("#txtDescription").val();
    const color = $("#selColor").val();
    const date = $("#selDate").val();
    const status = $("#selStatus").val();
    const budget = $("#numBudget").val();

    console.log(title, desc, color, date, status, budget);
}

// bouild an object
let data = new Task("title, desc, color, date, status, budget");
console.log(data);

//display the info
displayTask(data);
//save to server
function displayTask(task) {
    let render = `<div class = "task" style = "border-color:${task.color}">
    <div class="info">
    <h4> ${task.title}</h4>
    <p> ${task.desc}<p>
    </div>
    <label class="status">${task.status} </label>
    <div class="date-budget">
    <label> ${task.date}</label>
    <label> ${task.budget}  </label>
    </div>
    </div>`
        ;
        $(".list").append(render);
}
//use the content of the object to render the list section

{
    console.log("hello im the saveButton")
}

function init() {
    console.log('hello im the init');
    $("#btnSave").click(saveTask);
}

window.onload = init;// it waits until the css and the html resolved