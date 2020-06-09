var a =document.getElementById("area");
function press(i)
{
    console.log(i)
    a.value+=i;
}
function Clear()
{
    a.value="";
}
function Eval()
{
    let p =a.value;
    while(p.includes("^"))
    {
        p=p.replace('^',"**");
    }
    console.log(p);
    a.value=eval(p);
}
function back()
{
    a.value=a.value.substring(0,a.value.length-1);
}