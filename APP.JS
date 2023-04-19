let index=0;
function changecolor(){
    let color=["red","blue","orange","pink","black","purple" ] ;
document.getElementsByTagName('body')[0].style.background=color[index++];

if(index > color.length-1)
index=0;



}