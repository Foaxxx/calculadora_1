
document.querySelector('#boton').addEventListener("click", () =>{
    const primer = parseInt(document.getElementById("primer_valor").value);
    const segundo = parseInt(document.getElementById("segundo_valor").value);
    const op = document.getElementById("op").value;
    let r;
    if(op == "+"){
        r = primer + segundo;
    }
    else if(op == "-"){
        r = primer - segundo;
    }
    else if(op == "x"){
        r = primer * segundo;
    }  
    else if (op == "÷"){
        r = primer / segundo;
    }
    document.getElementById("respuesta").innerHTML= r;
})