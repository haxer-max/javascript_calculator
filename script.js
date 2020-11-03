// mekaustubh28 starts I have disabled the keyboard as using keyboard user can also type alphabets
//  , which is not required
document.getElementById("area").readOnly = true;
// mekaustubh28 ends



var a = document.getElementById("area");

function press(i) {
    console.log(i)
    a.value += i;
}

function Clear() {
    a.value = "";
}

//THIS FUNCTION WILL HELP IN REMOVING THE ISSUE WITH FLOATING POINT NUMBERS
function strip(number) {
    var no = parseFloat(number).toPrecision(12)
    return (no * 1).toString();
}

function Eval() {
    let p = a.value;
    while (p.includes("^")) {
        p = p.replace('^', "**");
    }
    console.log(p);
    let temp = eval(p);
    a.value = strip(temp);
}

function back() {
    a.value = a.value.substring(0, a.value.length - 1);
}