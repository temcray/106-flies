class Task {
    constructor( title, description, color, date, status, budget)
    {
    this.title = title;
    this.description = description;
    this.color = color;
    this.date = date;
    this.status = status;
    this.budget = budget;
    }
}

let xhr = new XMLHttpRequest();
xhr.open("GET", "https://jsonplaceholder.tpicode.com/post");
xhr.setRequestHeader("Content-Type", "application/json");
xhr.onload = function() {
    if (xhr.status === 200) {
        let data = JSON.parse(xhr.responseText);
        console.log(data);
    } else {
       console.error("Request failed. Status:", xhr.status); 
    }
};

xhr.onerror = function () {
    console.error("Request failed.");

};


xhr.send();