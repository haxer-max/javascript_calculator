var a =document.getElementById("area");
function press(i)
{
    console.log(i)
    a.defaultValue+=i;
}
function Clear()
{
    a.defaultValue="";
}
function Eval()
{
    let p =a.defaultValue;
    while(p.includes("^"))
    {
        p=p.replace('^',"**");
    }
    console.log(p);
    a.defaultValue=eval(p);
}
function back()
{
    a.defaultValue=a.defaultValue.substring(0,a.defaultValue.length-1);
}