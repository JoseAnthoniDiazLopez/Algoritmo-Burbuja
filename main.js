var tiempo=100
var anchoPantalla=window.innerWidth
var altoPantalla=window.innerHeight
var anchoCanva=Math.floor(anchoPantalla-50)>400?400:Math.floor(anchoPantalla-50)
var lista=[]
var scala=10
var velocidad=0
var desordenada=false
var pixel=anchoCanva/scala
function setup() {
generarLista()
  lienzo=createCanvas(anchoCanva,anchoCanva);
  lienzo.position((anchoPantalla/2)-(anchoCanva/2),(altoPantalla/2)-anchoCanva/2);
}

var i = 1;
function draw() {
if (tiempo>=velocidad) {
  background(0,0,0)
  fill("white")
  text(scala,20,20)
for (let o in lista) {
  fill("white")
  rect(o*pixel,anchoCanva,pixel,lista[o]*(pixel*-1)) 
  }

  fill("blue")
  rect(i*pixel,anchoCanva,pixel,lista[i]*(pixel*-1)) 

if (lista[i-1]>lista[i]) {
   fill("red")
    rect((i-1)*pixel,anchoCanva,pixel,lista[i-1]*(pixel*-1)) 
    fill("green")
    rect(i*pixel,anchoCanva,pixel,lista[i]*(pixel*-1)) 
   let posA=lista[i-1]
    lista[i-1]=lista[i]
    lista[i]=posA
    tiempo-=velocidad
    desordenada=true
  }
 tiempo-=velocidad
 if(i>=scala){
  if (desordenada==false) {
    scala+=30
    pixel=anchoCanva/scala
   generarLista()
  }
  desordenada=false
  i=1
}else{
  i++
}
      }else{
  tiempo++
}
}

function generarLista() {
  for (let i = 0; i <scala; i++) {
    lista[i]=Math.floor(random(1,scala)) 
  }
}




