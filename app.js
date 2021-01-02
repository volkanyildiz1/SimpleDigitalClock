setInterval(() => {
    let date=new Date();
    let hour=checkTen(date.getHours());
    let minute=checkTen(date.getMinutes());
    let second=checkTen(date.getSeconds());
    document.getElementById("screen").innerText=hour+":"+minute+":"+second; 
}, 1000);
function checkTen(i) {
    if(i<10){
        i="0"+i;
    }
    return i;
}