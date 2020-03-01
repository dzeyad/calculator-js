function calculator(a)
{
    // console.log(a);
    var old = document.getElementById("answer").value;
    var val = document.getElementById("answer").value = old + a;

    console.log(val);
    
}