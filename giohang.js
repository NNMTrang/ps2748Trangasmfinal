document.getElementById("showcart").style.display="none";
var arrsp = new Array;

function themvaogiohang(x){
    var ttsp = x.parentElement.children;
  var hinh = ttsp[0].children[0].src;
  var giasp = ttsp[1].children[0].innerText;
var tensp = ttsp[2].innerText;
var slsp = ttsp[3].value;
var sp = [hinh,tensp,giasp,slsp];
var coroi = 0;

for (let i = 0; i < arrsp.length; i++) {
   if(arrsp[i][1]==tensp){
       var sl = arrsp[i][3];
       sl+= soluong;
       arrsp[i][3] = sl;
       coroi =1;
       break;
   }
    
}
if(coroi == 0)

arrsp.push(sp);
countsp();
addcart();

}
function countsp(){
    var count = arrsp.length;
    document.getElementById("countsp").innerText = count;

}
function showcart(){
var x = document.getElementById("showcart");
if (x.style.display=="none"){
    x.style.display ="block";

}else{
x.style.display ="none";
}
addcart();
}

function addcart(){
    var ttgh = "";
    var tongtt = 0;
    for (var i=0; i< arrsp.length; i++){
        var tt= Number( arrsp[i][2]* arrsp[i][3]);
        tongtt += tt;
        ttgh += `
        <tr>
                <td>${i+1}</td>
                <td><img src="${arrsp[i][0]}"></td>
                <td>${arrsp[i][1]}</td>
                <td>${arrsp[i][2]}</td>
                <td>${arrsp[i][3]}</td>
                <td>${tt} ($)</td>
         </tr>
        `
    }

    ttgh +=`
    <tr>
  
    <td cospan = "5">Tổng đơn hàng</td>
    <td>${tongtt} ($)</td>
</tr>
    `
    document.getElementById("mycart").innerHTML = ttgh;

}