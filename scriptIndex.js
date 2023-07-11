var rows=document.getElementById("RowInputForTable").value;
var columns=document.getElementById("ColumnInputForTable").value;
var table=document.getElementById("tableUSER");
alert(rows+","+columns);
if(rows>=3){
    for(var i=0;i<rows-3;i++){
        table.insertRow(-1);
    }
}
else{
    for(var i=0;i<3-rows;i++){
        table.deleteRow(-1);
    }
}
