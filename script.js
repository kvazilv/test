const adderPressed = document.getElementById("adder")
const multiPressed = document.getElementById("multi")
const divPressed = document.getElementById("divide")
let result = 0
let n1 =  parseInt(document.getElementById("n1").value)
let n2 = parseInt(document.getElementById("n2").value)

divPressed.addEventListener("click", Divide);

adderPressed.onclick = addTogether;
multiPressed.onclick = Multiply;
adderPressed.onmouseup = (ev) => {console.log('You Released '+ev.target.innerText)};



function addTogether() {
let n1 =  parseInt(document.getElementById("n1").value)
let n2 = parseInt(document.getElementById("n2").value)
    console.log("adding dd");
    console.log(n1 + " " + n2);
    result =  n1 + n2;
    document.getElementById("result").innerHTML = result

}

function Multiply() {
    let n1 =  parseInt(document.getElementById("n1").value)
    let n2 = parseInt(document.getElementById("n2").value)
        console.log("adding dd");
        console.log(n1 + " " + n2);
        result =  n1 * n2;
        document.getElementById("result").innerHTML = result
    
    }

    function Divide() {
        let n1 =  parseInt(document.getElementById("n1").value)
        let n2 = parseInt(document.getElementById("n2").value)
            console.log("adding dd");
            console.log(n1 + " " + n2);
            result =  n1 / n2;
            document.getElementById("result").innerHTML = result
        
        }
    