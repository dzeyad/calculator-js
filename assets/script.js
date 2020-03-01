function calculation() {


    var a = Number(document.getElementById("input1").value);
    var b = Number(document.getElementById("input2").value);
    var c = document.getElementById("input3").value;

    // console.log("");

    if (a == 0 || b == 0) {

        document.getElementById("demo").innerHTML = "The Input Field can't be empty";
    } else {
        if (isNaN(a) == true || isNaN(b) == true) {
            document.getElementById("demo").innerHTML = "Please Input Number";
        } else {
            switch (c) {
                case "+":
                    var total = parseFloat(a) + parseFloat(b)
                    document.getElementById("demo").innerHTML = total;
                    break;
                case "-":
                    var total = a - b
                    document.getElementById("demo").innerHTML = total;
                    break;

                case "*":
                    var total = a * b
                    document.getElementById("demo").innerHTML = total;
                    break;

                case "/":
                    var total = a / b
                    document.getElementById("demo").innerHTML = total;
                    break;

                case "":
                    document.getElementById("demo").innerHTML = "Enter a Operation";
                    break;

                default:
                    document.getElementById("demo").innerHTML = "WRONG OPERATIOR";
                    break;
            }
        }



    }
}