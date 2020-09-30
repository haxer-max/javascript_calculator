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
    const maxLen = p.split(/[^\d.]/).map(el => el.slice(el.indexOf(".")+1).length).sort((a, b) => a - b)[0]
    while(p.includes("^"))
    {
        p=p.replace('^',"**");
    }
    console.log(p);
    a.value=(Math.round(eval(p) * 10 ** maxLen)) / (10 ** maxLen);
}
function back()
{
    a.value=a.value.substring(0,a.value.length-1);
}