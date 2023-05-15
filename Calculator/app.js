function getNum(num){
    document.getElementById('result').value += num;
}

function clearNum(){
    document.getElementById('result').value = '';
}

function removeNumb(){
    var res = document.getElementById('result').value; 
    document.getElementById('result').value = document.getElementById('result').value.slice(0,res.length-1)
}

function getResults(){
    document.getElementById('result').value = eval(document.getElementById('result').value)
}