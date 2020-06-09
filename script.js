var a =document.getElementById("area");
function press(i)
{
    a.defaultValue+=i;
}
function Clear()
{
    a.defaultValue="";
}
function Eval()
{
    a.defaultValue=eval(a.defaultValue.replace("pow","Math.pow"));
}
function back()
{
    a.defaultValue=a.defaultValue.substring(0,a.defaultValue.length-1);
}