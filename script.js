let date=document.createElement('input');
date.setAttribute('type','date')
date.setAttribute('id','date')
document.body.append(date);

var button=document.createElement('button');
button.innerHTML="display data";
button.className="btn btn-primary";
button.setAttribute('type','button');
button.addEventListener('click',displaydata);
document.body.append(button);
function displaydata(){
    let input=document.getElementById("date").value;
    if(Date.parse(input)){
        var inputdate=new Date(input);
        var currentdate=new Date();
        var millisecdiff=currentdate.getTime()-inputdate.getTime();
        console.log(millisecdiff);
        var seconddiff=Math.floor(millisecdiff/1000);
        console.log(seconddiff);
        var minutediff=(Math.floor(seconddiff/60));
        console.log(minutediff);
        var hoursdiff=Math.floor(minutediff/60);
        console.log(hoursdiff);
        var daydiff=Math.floor(hoursdiff/24);
        console.log(daydiff);
        var yeardiff=currentdate.getFullYear()-inputdate.getFullYear();
        console.log(yeardiff);
        var monthdiff=(yeardiff*12)+(currentdate.getMonth()-inputdate.getMonth());
        console.log(monthdiff);
        
        var a=document.createElement('div');
        a.innerHTML=`The input date is ${inputdate}` ;
        document.body.append(a);
        
        var b=document.createElement('div');
        b.innerHTML=`The millisecond difference date is ${millisecdiff}`;
        document.body.append(b);
        
        var c=document.createElement('div');
        c.innerHTML=`The Second Difference is ${seconddiff} `;
        document.body.append(c);
        
        var d=document.createElement('div');
        d.innerHTML=`The Minute Difference is ${minutediff} `;
        document.body.append(d);
       
        var e=document.createElement('div');
        e.innerHTML=`The Hours Difference is ${hoursdiff}`;
        document.body.append(e);

        var f=document.createElement('div');
        f.innerHTML=`The Day Difference is ${daydiff}`;
        document.body.append(f);

        var g=document.createElement('div');
        g.innerHTML=`The year Difference is ${yeardiff}`;
        document.body.append(g);

        var h=document.createElement('div');
        h.innerHTML=`The month Difference is ${monthdiff}`;
        document.body.append(h);
    }
    else{
        console.log("Giva a proper valid date");
    }
}

