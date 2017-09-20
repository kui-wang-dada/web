var thead=["姓名","语文","数学","英语","总分"];
var data =[
    ["小明",80,90,70,240],
    ["小红",90,60,90,240],
    ["小亮",60,100,70,230],
    ["小王",99,87,32,330],
];

var head=document.getElementById("head");
var tr=document.getElementById("table");
var tbody=document.getElementById("tbody");

function readhead(){
    for(var i=0;i<thead.length;i++){
        var hh=document.createElement("td");
        hh.id="td"+i;
        hh.innerHTML=thead[i];
        head.appendChild(hh);
    }
}
function readen(){
    for(var i=0;i<data.length;i++){
        var rr=document.createElement("tr");
        for(var j=0;j<data[i].length;j++){
            var dd=document.createElement("td");
            dd.id="td"+i+j;
            dd.innerHTML=data[i][j];
            rr.appendChild(dd);
        }
        tbody.appendChild(rr);
    }
}
readhead();
readen();
function sortpoint(){
    for(var i=1;i<5;i++){
        (function(n){
            var tt=document.getElementById("td"+n);
            tt.onclick=function(){
                tbody.innerHTML="";
                var point=tt.id.substring(2);
                for(var i=0;i<data.length-1;i++){
                    for(var j=i+1;j<data.length;j++){
                        if(data[i][point]>data[j][point]){
                            var x=data[i];
                            data[i]=data[j];
                            data[j]=x;
                        }
                    }
                }

                readen();
            }

        })(i);
    }
}
sortpoint();
