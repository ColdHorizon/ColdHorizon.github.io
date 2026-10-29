let rotation =0;
window.addEventListener("load",(event)=>{
const TitleText = document.getElementById("TitleText");
setInterval(ChangeRotation,1000);
function ChangeRotation(){
    if(rotation == 0){
            TitleText.style.transform = "rotate(5deg)";
            rotation =1;
    }
    else{
            TitleText.style.transform = "rotate(-5deg)";
            rotation =0;
    }
}
});

