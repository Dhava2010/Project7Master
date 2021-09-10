var Names = [];
function Submit() 
{
    var name1 = document.getElementById("input1").value;
    var name2 = document.getElementById("input2").value;
    var name3 = document.getElementById("input3").value;
    var name4 = document.getElementById("input4").value;
    Names.push(name1);
    Names.push(name2);
    Names.push(name3);
    Names.push(name4);
    console.log(Names);
    document.getElementById("SubmitText").innerHTML=Names;
}

function Sort()
{
    Names.sort();
    console.log(Names);
    document.getElementById("SortText").innerHTML=Names;
}