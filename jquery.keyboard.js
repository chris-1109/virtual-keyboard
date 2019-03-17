function show(){
  var x = document.getElementById("show");
    x.style.display = "block";
}

function hide(){
  var x = document.getElementById("show");
    x.style.display = "none";
}

function change(id){
    var val=parseInt(document.getElementById(id).name)+21;
    if(val>41){val=val-42;}
    document.getElementById(id).value=rev2[val];
    document.getElementById(id).name=val;
}

function change2(id){
    document.getElementById(id).value=rev[document.getElementById(id).value];
}

function addup(data){
    //de();
    document.getElementById("keyboard").innerHTML += data;
}

function de(){
    if(document.getElementById("caps").name=="m1"){
        var i;
        for(i=0;i<21;i++){
            document.getElementById(i).value=rev2[i];
            document.getElementById(i).name=i;
        }
    }
    else{
    var i;
        for(i=21;i<=41;i++){
            document.getElementById(i).value=rev2[i];
            document.getElementById(i).name=i;
        }
    }
}

function ca(){
    if(document.getElementById("caps").name=="m1"){document.getElementById("caps").name="m2";}
    else{document.getElementById("caps").name="m1";}
    //de();
}

function back(){
    var data=document.getElementById("keyboard").innerHTML;
    data=data.substring(0,data.length-1);
    document.getElementById("keyboard").innerHTML=data;
}

function tab(){
    document.getElementById("keyboard").innerHTML += "      ";
}

function enter(){
    document.getElementById("keyboard").innerHTML +="\n";
}

function space(){
    document.getElementById("keyboard").innerHTML +=" ";
}

function del(){
    document.getElementById("keyboard").innerHTML ="";
}

var rev={a:"A",b:"B",c:"C",d:"D",e:"E",f:"F",g:"G",h:"H",i:"I",j:"J",k:"K",l:"L",m:"M",n:"N",o:"O",p:"P",q:"Q",r:"R",s:"S",t:"T",u:"U",v:"V",w:"W",x:"X",y:"Y",z:"Z",A:"a",B:"b",C:"c",D:"d",E:"e",F:"f",G:"g",H:"h",I:"i",J:"j",K:"k",L:"l",M:"m",N:"n",O:"o",P:"p",Q:"q",R:"r",S:"s",T:"t",U:"u",V:"v",W:"w",X:"x",Y:"y",Z:"z"};

var rev2={0:"`",1:"1",2:"2",3:"3",4:"4",5:"5",6:"6",7:"7",8:"8",9:"9",10:"0",11:"-",12:"=",13:"[",14:"]",15:"\\",16:";",17:"'",18:",",19:".",20:"/",21:"~",22:"!",23:"@",24:"#",25:"$",26:"%",27:"^",28:"&",29:"*",30:"(",31:")",32:"_",33:"+",34:"{",35:"}",36:"|",37:":",38:"\"",39:"<",40:">",41:"?"}