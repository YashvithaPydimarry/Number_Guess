var i=0;
var a=Math.round(Math.random()*100)+1;
check=()=>
{
    i++;
    var b=parseInt(document.getElementById("num").value);
    if(a==b)
    {
        document.getElementById("statement").textContent=("Congratulations!!! You have got the number in "+i+" tries");
        i--;
    }
    else if(a>b)
    {
        document.getElementById("statement").textContent=("Try a greater number");
    }
    else
    {
        document.getElementById("statement").textContent=("Try a lesser number");
    }
}
