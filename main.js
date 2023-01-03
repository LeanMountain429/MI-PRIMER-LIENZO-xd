t_t= document.getElementById("Agh_xd")
var sino= t_t.getContext("2d")
var X_X= "blue"
var UwU= 2
var A_A= "vachio"
var nono,sisi,mouseY,mouseX
t_t.addEventListener("mousedown",IhateMITappINVENTOR)
function IhateMITappINVENTOR(n){
    A_A= "mousedown"
}
t_t.addEventListener("mousemove",IloveSTUDIOcode)
function IloveSTUDIOcode(n){
    mouseY= n.clientY-t_t.offsetTop
    mouseX= n.clientX-t_t.offsetLeft
    if (A_A=="mousedown"){
        sino.beginPath()
        sino.strokeStyle=X_X
        sino.lineWidth=UwU
        sino.moveTo(nono,sisi)
        sino.lineTo(mouseX,mouseY)
        sino.stroke()
    }
    nono=mouseX
    sisi=mouseY
}
t_t.addEventListener("mouseup",nononono)
function nononono(n){
    A_A= "mouseup"
}
var ancho=screen.width
var nuevo_ancho=screen.width-50
var alto=screen.height-200
if(ancho<992){
    t_t.width=nuevo_ancho
    t_t.height=alto
    document.body.style.overflow="hidden"
}