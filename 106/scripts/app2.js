function saveTask() {
    
    //get the vales
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
    console.log("hello im the saveButton");
    $.ajax({
        type: "post",
        url: "http://fsdiapi.azurewebsites.net/api/tasks/",
        data: JSON.stringify(data),
        contentType: "application/json",
        success: function(response)
        {console.log(response);},
        error: function(error)
        {console.log(error);}
    })
}



function testRequest() 
{
$.ajax({
   type: "get", 
   url: "http://fsdiapi.azurewebsites.net",
   success: function(response)
   {
    console.log(response);
   },
   error: function(error)
   {
    console.log(error);
   }
});
}
function loadTask()
{
    $.ajax({
        type: "get",
        url: "http://fsdiapi.azurewebsites.net/api/tasks",
        success: function(response)
        {let dataJson = JSON.parse(response);
           for(let i=0;i<dataJson.length;i++)
           {
           let currentValue = dataJson[i]
           if (currentValue.createdBy === "Tatiana") {
            displayTask(currentValue);
           }
           } 
            console.log(response);
            console.log(dataJson);
        },
        error: function (error){
            console.log(error);
        }
    });
}

$("#deletAll").on("click", function () {
    $.ajax({
        type: "get",
        url: "http://fsdiapi.azurewebsites.net/api/tasks",
        success: function (response) {
            const data = JSON.parse(response);
            const userTasks = data.filter(t => t.name === "Tatiana");

            userTasks.forEach(task => {
                $.ajax({
                    type: "DELETE",
                    url: `"http://fsdiapi.azurewebsites.net/api/tasks"}/${task._id}`,
                    success: loadTask,
                    error: function (error) {
                        console.log("Delete error:", error);
                    }
                });
            });
        }
    });
});


function init() 
{
    console.log('hello im the init');
    $("#btnSave").click(saveTask);
    loadTask();
}

window.onload = init;// it waits until the css and the html resolved