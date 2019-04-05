function copy(){
  var copyText = document.getElementById("keyboard");
  copyText.select();
  document.execCommand("copy");}

function change(id){
    var val=parseInt(document.getElementById(id).name)+21;
    if(val>41){val=val-42;}
    document.getElementById(id).value=rev2[val];
    document.getElementById(id).name=val;
}

function change2(id){
    var val=parseInt(document.getElementById(id).name)+100;
    if(val>300){val=val-200;}
    document.getElementById(id).value=rev[val];
    document.getElementById(id).name=val;
}

function addup(data){
    document.getElementById("keyboard").value += data;
    de();
}

function de(){
    if(document.getElementById("caps").name=="m1"){
        var i;
        for(i=0;i<=20;i++){
            document.getElementById(i).value=rev2[i];
            document.getElementById(i).name=i;}
        for(i=201;i<=226;i++){
            document.getElementById(i-100).value=rev[i];
            document.getElementById(i-100).name=i;}
    }
    else{
    var i;
        for(i=21;i<=41;i++){
            document.getElementById(i-21).value=rev2[i];
            document.getElementById(i-21).name=i;}
        for(i=101;i<=126;i++){
            document.getElementById(i).value=rev[i];
            document.getElementById(i).name=i;}
    }
}

function shift(){
    if(document.getElementById("caps").name!="m1"){
        var i;
        for(i=0;i<=20;i++){
            document.getElementById(i).value=rev2[i];
            document.getElementById(i).name=i;}
        for(i=201;i<=226;i++){
            document.getElementById(i-100).value=rev[i];
            document.getElementById(i-100).name=i;}
    }
    else{
    var i;
        for(i=21;i<=41;i++){
            document.getElementById(i-21).value=rev2[i];
            document.getElementById(i-21).name=i;}
        for(i=101;i<=126;i++){
            document.getElementById(i).value=rev[i];
            document.getElementById(i).name=i;}
    }
}

function ca(){
    if(document.getElementById("caps").name=="m1"){document.getElementById("caps").name="m2";}
    else{document.getElementById("caps").name="m1";}
    de();
}

function back(){
    var data=document.getElementById("keyboard").value;
    data=data.substring(0,data.length-1);
    document.getElementById("keyboard").value=data;
}

function tab(){
    document.getElementById("keyboard").value += "      ";
}

function enter(){
    document.getElementById("keyboard").value +="\n";
}

function space(){
    document.getElementById("keyboard").value +=" ";
}

function del(){
    document.getElementById("keyboard").value ="";
}

var rev={101:"A",102:"B",103:"C",104:"D",105:"E",106:"F",107:"G",108:"H",109:"I",110:"J",111:"K",112:"L",113:"M",114:"N",115:"O",116:"P",117:"Q",118:"R",119:"S",120:"T",121:"U",122:"V",123:"W",124:"X",125:"Y",126:"Z",201:"a",202:"b",203:"c",204:"d",205:"e",206:"f",207:"g",208:"h",209:"i",210:"j",211:"k",212:"l",213:"m",214:"n",215:"o",216:"p",217:"q",218:"r",219:"s",220:"t",221:"u",222:"v",223:"w",224:"x",225:"y",226:"z"};

var rev2={0:"`",1:"1",2:"2",3:"3",4:"4",5:"5",6:"6",7:"7",8:"8",9:"9",10:"0",11:"-",12:"=",13:"[",14:"]",15:"\\",16:";",17:"'",18:",",19:".",20:"/",21:"~",22:"!",23:"@",24:"#",25:"$",26:"%",27:"^",28:"&",29:"*",30:"(",31:")",32:"_",33:"+",34:"{",35:"}",36:"|",37:":",38:"\"",39:"<",40:">",41:"?"}