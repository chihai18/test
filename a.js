var a = 5;
var b = 3;

function bt1(a,b) {
    console.log("a="+a);
    console.log("b="+b);
    c = a +b;
    console.log("a+b="+c);
    c=a-b;
    console.log("a-b="+c);
    c=a*b;
    console.log("a*b="+c);
    c=a/b;
    console.log("a/b="+c);
    c=a%b;
    console.log("a%b="+c);
}
bt1(a,b);
console.log("");

function bt2(n) {
    res = "";
    for (i=1;i<=n;i++){
        if (i%154==0){
            res += i+" ";
        }
    }
    console.log(res);
   
}
var n=87531;
bt2(n);
console.log("");

function bt3(d){
for (i=1;i<=d;i++){
    var res = "";
    for (j=1;j<=i;j++){
       res += j+" ";
    }
    console.log(res);
}
}

var d=8;
bt3(d);

console.log("");

function bt4(d){
    for (i=1;i<=d;i++){
        var res = "";
        for (j=1;j<=d-i;j++){
           res +="  ";
        }
        for (j=1;j<=i;j++){
            c = j;
            res +=c+" ";
         }
        console.log(res);
    }
}
    
var d=8;
bt4(d);

console.log("");
function bt5(d){
    for (i=1;i<=d;i++){
        var res = "";
        for (j=1;j<=d-i;j++){
           res +="  ";
        }
        for (j=1;j<=i;j++){
            c = j;
            res +=c+" ";
        }
        for (j=1;j<=c-1;j++){      
            res +=c+j+" ";
        }
        console.log(res);
    }
}
    
var d=5;
bt5(d);