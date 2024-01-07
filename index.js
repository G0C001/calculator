let result = document.getElementById("inputext")


function calculate(number){
    result.value+=number;
}

function Result(){
    
    try{
        if (result.value===""){
            result.value=""
        }else{
        result.value=eval(result.value)
        }
    }
    catch(err){
        alert("enter the valid key")
        clr();
    }
    
}
function clr() {
    result.value=""
}
function del() {
    result.value=result.value.slice(0,-1)
}