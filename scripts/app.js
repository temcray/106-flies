function hello()
{
    console.log("hello there!");
}


function init()
{
    console.log("hello im the init");
    hello();
}





window.onload = init;// it waits until the css and html resolved to run the logic