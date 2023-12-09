function btn(){
    // console.log("i am working");
    var sum = Number(itemNumber1.value) + Number(itemNumber2.value) + Number(itemNumber3.value) + Number(itemNumber4.value) + Number(itemNumber5.value)

    if(itemName1.value == "" && itemNumber1.value == "" && itemName2.value == "" && itemNumber2.value == "" && itemName3.value == "" && itemNumber3.value == "" ){
        alert("all box can not be empty");
    } 
    else if(sum > 10000){
        console.log("you can not spent more that 10000 per day")


    } else{
    var answer = p2.innerHTML = "You have successfully spent ₦" + sum + ", and you blances is ₦" + (10000 - sum ) + " for today"

    document.getElementById("itemName1").value=""
    document.getElementById("itemNumber1").value=""
    document.getElementById("itemName2").value=""
    document.getElementById("itemNumber2").value=""
    document.getElementById("itemName3").value=""
    document.getElementById("itemNumber3").value=""
    document.getElementById("itemName4").value=""
    document.getElementById("itemNumber4").value=""
    document.getElementById("itemName5").value=""
    document.getElementById("itemNumber5").value=""

 }



    
}