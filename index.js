let num1
let num2 

document.getElementById("add").onclick=function(){
    num1=document.getElementById("a").value
    num1=Number(num1)

    num2=document.getElementById("b").value
    num2=Number(num2)

    sum=Number(num1+num2)
    document.getElementById("sum").textContent="Addition:" + sum
   
}

document.getElementById("sub1").onclick=function(){
    num1=document.getElementById("a").value
    num1=Number(num1)

    num2=document.getElementById("b").value
    num2=Number(num2)

    sub=Number(num1-num2)
    document.getElementById("sub").textContent="Subraction:" + sub
   
}
document.getElementById("mul1").onclick=function(){
    num1=document.getElementById("a").value
    num1=Number(num1)

    num2=document.getElementById("b").value
    num2=Number(num2)

    mul=Number(num1*num2)
    document.getElementById("mul").textContent="Multiplication:" + mul
   
}
document.getElementById("div1").onclick=function(){
    num1=document.getElementById("a").value
    num1=Number(num1)

    num2=document.getElementById("b").value
    num2=Number(num2)

    div=Number(num1/num2)
    document.getElementById("div").textContent="Division:" + div
   
}

