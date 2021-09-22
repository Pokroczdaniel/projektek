let kifejezes=""
let vegeredmenylenyomva=false
let muveletlenyomva=false
let pluszlenyomva=false
let kivonaslenyomva=false
let szorzaslenyomva=false
let osztaslenyomva=false
let vegeredmeny=document.getElementById("vegeredmeny")
let elozoszam=""
let kovetszam=""
let pontlenyomva=false
let szamlenyomva=false


function ac(){
  vegeredmenylenyomva=false
  muveletlenyomva=false
  pluszlenyomva=false
  kivonaslenyomva=false
  szorzaslenyomva=false
  osztaslenyomva=false
  pontlenyomva=false
  elozoszam=""
  kovetszam=""
  vegeredmeny.textContent=""
  szamlenyomva=false
}
function press1(){
  if (vegeredmenylenyomva){
    ac()
  }
  if (muveletlenyomva){
    kovetszam+=1
    vegeredmeny.textContent=kovetszam
  }
  else{
    elozoszam+="1"
    vegeredmeny.textContent=elozoszam
  }
  szamlenyomva=true
}
function press2(){
  if (vegeredmenylenyomva){
    ac()
  }
  if (muveletlenyomva){
    kovetszam+=2
    vegeredmeny.textContent=kovetszam
  }
  else{
    elozoszam+="2"
    vegeredmeny.textContent=elozoszam
  }
  szamlenyomva=true
}
function press3(){
  if (vegeredmenylenyomva){
    ac()
  }
  if (muveletlenyomva){
    kovetszam+=3
    vegeredmeny.textContent=kovetszam
  }
  else{
    elozoszam+="3"
    vegeredmeny.textContent=elozoszam
  }
  szamlenyomva=true
}
function press4(){
  if (vegeredmenylenyomva){
    ac()
  }
  if (muveletlenyomva){
    kovetszam+=4
    vegeredmeny.textContent=kovetszam
  }
  else{
    elozoszam+="4"
    vegeredmeny.textContent=elozoszam
  }
  szamlenyomva=true
}
function press5(){
  if (vegeredmenylenyomva){
    ac()
  }
  if (muveletlenyomva){
    kovetszam+=5
    vegeredmeny.textContent=kovetszam
  }
  else{
    elozoszam+="5"
    vegeredmeny.textContent=elozoszam
  }
  szamlenyomva=true
}
function press6(){
  if (vegeredmenylenyomva){
    ac()
  }
  if (muveletlenyomva){
    kovetszam+=6
    vegeredmeny.textContent=kovetszam
  }
  else{
    elozoszam+="6"
    vegeredmeny.textContent=elozoszam
  }
  szamlenyomva=true
}
function press7(){
  if (vegeredmenylenyomva){
    ac()
  }
  if (muveletlenyomva){
    kovetszam+=7
    vegeredmeny.textContent=kovetszam
  }
  else{
    elozoszam+="7"
    vegeredmeny.textContent=elozoszam
  }
  szamlenyomva=true
}
function press8(){
  if (vegeredmenylenyomva){
    ac()
  }
  if (muveletlenyomva){
    kovetszam+=8
    vegeredmeny.textContent=kovetszam
  }
  else{
    elozoszam+="8"
    vegeredmeny.textContent=elozoszam
  }
  szamlenyomva=true
}
function press9(){
  if (vegeredmenylenyomva){
    ac()
  }
  if (muveletlenyomva){
    kovetszam+=9
    vegeredmeny.textContent=kovetszam
  }
  else{
    elozoszam+="9"
    vegeredmeny.textContent=elozoszam
  }
  szamlenyomva=true
}
function press0(){
  if (vegeredmenylenyomva){
    ac()
  }
  if (muveletlenyomva){
    kovetszam+=0
    vegeredmeny.textContent=kovetszam
  }
  else{
    elozoszam+="0"
    vegeredmeny.textContent=elozoszam
  }
  szamlenyomva=true
}
function pont(){
  if (pontlenyomva==false){
    if (muveletlenyomva){
      kovetszam+="."
      vegeredmeny.textContent=kovetszam
    }
    else{
      elozoszam+="."
      vegeredmeny.textContent=elozoszam
    }
  }
  pontlenyomva=true
}
function osszeadas(){
  if (pluszlenyomva && kovetszam==""){
    pluszlenyomva=false
    for (let i=0; i<vegeredmeny.textContent.length; i++){
      if (i==vegeredmeny.textContent.length-1){
        break
      }
      else{
        kifejezes+=vegeredmeny.textContent[i]
      }
    }
    vegeredmeny.textContent=kifejezes
    kifejezes=""
  }
  if (szorzaslenyomva && kovetszam==""){
    szorzaslenyomva=false
    for (let i=0; i<vegeredmeny.textContent.length; i++){
      if (i==vegeredmeny.textContent.length-1){
        break
      }
      else{
        kifejezes+=vegeredmeny.textContent[i]
      }
    }
    vegeredmeny.textContent=kifejezes
    kifejezes=""
  }
  if (kivonaslenyomva && kovetszam==""){
    kivonaslenyomva=false
    for (let i=0; i<vegeredmeny.textContent.length; i++){
      if (i==vegeredmeny.textContent.length-1){
        break
      }
      else{
        kifejezes+=vegeredmeny.textContent[i]
      }
    }
    vegeredmeny.textContent=kifejezes
    kifejezes=""
  }
  if (osztaslenyomva && kovetszam==""){
    osztaslenyomva=false
    for (let i=0; i<vegeredmeny.textContent.length; i++){
      if (i==vegeredmeny.textContent.length-1){
        break
      }
      else{
        kifejezes+=vegeredmeny.textContent[i]
      }
    }
    vegeredmeny.textContent=kifejezes
    kifejezes=""
  }
  if (pluszlenyomva){
    elozoszam=parseFloat(elozoszam)+parseFloat(kovetszam)
    pluszlenyomva=false
    kovetszam=""
  }
  else if (kivonaslenyomva){
    elozoszam=parseFloat(elozoszam)-parseFloat(kovetszam)
    kivonaslenyomva=false
    kovetszam=""
  }
  else if (szorzaslenyomva){
    elozoszam=parseFloat(elozoszam)*parseFloat(kovetszam)
    szorzaslenyomva=false
    kovetszam=""
  }
  else if (osztaslenyomva){
    elozoszam=parseFloat(elozoszam)/parseFloat(kovetszam)
    osztaslenyomva=false
    kovetszam=""
  }
  if (pluszlenyomva==false && kivonaslenyomva==false && szorzaslenyomva==false && osztaslenyomva==false){
    pluszlenyomva=true
    vegeredmeny.textContent+="+"
    muveletlenyomva=true
  }
  pontlenyomva=false
  vegeredmenylenyomva=false
  szamlenyomva=false
}
function kivonas(){
  if (pluszlenyomva && kovetszam==""){
    pluszlenyomva=false
    for (let i=0; i<vegeredmeny.textContent.length; i++){
      if (i==vegeredmeny.textContent.length-1){
        break
      }
      else{
        kifejezes+=vegeredmeny.textContent[i]
      }
    }
    vegeredmeny.textContent=kifejezes
    kifejezes=""
  }
  if (szorzaslenyomva && kovetszam==""){
    szorzaslenyomva=false
    for (let i=0; i<vegeredmeny.textContent.length; i++){
      if (i==vegeredmeny.textContent.length-1){
        break
      }
      else{
        kifejezes+=vegeredmeny.textContent[i]
      }
    }
    vegeredmeny.textContent=kifejezes
    kifejezes=""
  }
  if (kivonaslenyomva && kovetszam==""){
    kivonaslenyomva=false
    for (let i=0; i<vegeredmeny.textContent.length; i++){
      if (i==vegeredmeny.textContent.length-1){
        break
      }
      else{
        kifejezes+=vegeredmeny.textContent[i]
      }
    }
    vegeredmeny.textContent=kifejezes
    kifejezes=""
  }
  if (osztaslenyomva && kovetszam==""){
    osztaslenyomva=false
    for (let i=0; i<vegeredmeny.textContent.length; i++){
      if (i==vegeredmeny.textContent.length-1){
        break
      }
      else{
        kifejezes+=vegeredmeny.textContent[i]
      }
    }
    vegeredmeny.textContent=kifejezes
    kifejezes=""
  }
  if (pluszlenyomva){
    elozoszam=parseFloat(elozoszam)+parseFloat(kovetszam)
    pluszlenyomva=false
    kovetszam=""
  }
  else if (kivonaslenyomva){
    elozoszam=parseFloat(elozoszam)-parseFloat(kovetszam)
    kivonaslenyomva=false
    kovetszam=""
  }
  else if (szorzaslenyomva){
    elozoszam=parseFloat(elozoszam)*parseFloat(kovetszam)
    szorzaslenyomva=false
    kovetszam=""
  }
  else if (osztaslenyomva){
    elozoszam=parseFloat(elozoszam)/parseFloat(kovetszam)
    osztaslenyomva=false
    kovetszam=""
  }
  if (pluszlenyomva==false && kivonaslenyomva==false && szorzaslenyomva==false && osztaslenyomva==false){
    kivonaslenyomva=true
    vegeredmeny.textContent+="-"
    muveletlenyomva=true
  }
  pontlenyomva=false
  vegeredmenylenyomva=false
  szamlenyomva=false
}
function szorzas(){
  if (pluszlenyomva && kovetszam==""){
    pluszlenyomva=false
    for (let i=0; i<vegeredmeny.textContent.length; i++){
      if (i==vegeredmeny.textContent.length-1){
        break
      }
      else{
        kifejezes+=vegeredmeny.textContent[i]
      }
    }
    vegeredmeny.textContent=kifejezes
    kifejezes=""
  }
  if (szorzaslenyomva && kovetszam==""){
    szorzaslenyomva=false
    for (let i=0; i<vegeredmeny.textContent.length; i++){
      if (i==vegeredmeny.textContent.length-1){
        break
      }
      else{
        kifejezes+=vegeredmeny.textContent[i]
      }
    }
    vegeredmeny.textContent=kifejezes
    kifejezes=""
  }
  if (kivonaslenyomva && kovetszam==""){
    kivonaslenyomva=false
    for (let i=0; i<vegeredmeny.textContent.length; i++){
      if (i==vegeredmeny.textContent.length-1){
        break
      }
      else{
        kifejezes+=vegeredmeny.textContent[i]
      }
    }
    vegeredmeny.textContent=kifejezes
    kifejezes=""
  }
  if (osztaslenyomva && kovetszam==""){
    osztaslenyomva=false
    for (let i=0; i<vegeredmeny.textContent.length; i++){
      if (i==vegeredmeny.textContent.length-1){
        break
      }
      else{
        kifejezes+=vegeredmeny.textContent[i]
      }
    }
    vegeredmeny.textContent=kifejezes
    kifejezes=""
  }
  if (pluszlenyomva){
    elozoszam=parseFloat(elozoszam)+parseFloat(kovetszam)
    pluszlenyomva=false
    kovetszam=""
  }
  else if (kivonaslenyomva){
    elozoszam=parseFloat(elozoszam)-parseFloat(kovetszam)
    kivonaslenyomva=false
    kovetszam=""
  }
  else if (szorzaslenyomva){
    elozoszam=parseFloat(elozoszam)*parseFloat(kovetszam)
    szorzaslenyomva=false
    kovetszam=""
  }
  else if (osztaslenyomva){
    elozoszam=parseFloat(elozoszam)/parseFloat(kovetszam)
    osztaslenyomva=false
    kovetszam=""
  }
  if (pluszlenyomva==false && kivonaslenyomva==false && szorzaslenyomva==false && osztaslenyomva==false){
    szorzaslenyomva=true
    vegeredmeny.textContent+="*"
    muveletlenyomva=true
  }
  pontlenyomva=false
  vegeredmenylenyomva=false
  szamlenyomva=false
}
function osztas(){
  if (pluszlenyomva && kovetszam==""){
    pluszlenyomva=false
    for (let i=0; i<vegeredmeny.textContent.length; i++){
      if (i==vegeredmeny.textContent.length-1){
        break
      }
      else{
        kifejezes+=vegeredmeny.textContent[i]
      }
    }
    vegeredmeny.textContent=kifejezes
    kifejezes=""
  }
  if (szorzaslenyomva && kovetszam==""){
    szorzaslenyomva=false
    for (let i=0; i<vegeredmeny.textContent.length; i++){
      if (i==vegeredmeny.textContent.length-1){
        break
      }
      else{
        kifejezes+=vegeredmeny.textContent[i]
      }
    }
    vegeredmeny.textContent=kifejezes
    kifejezes=""
  }
  if (kivonaslenyomva && kovetszam==""){
    kivonaslenyomva=false
    for (let i=0; i<vegeredmeny.textContent.length; i++){
      if (i==vegeredmeny.textContent.length-1){
        break
      }
      else{
        kifejezes+=vegeredmeny.textContent[i]
      }
    }
    vegeredmeny.textContent=kifejezes
    kifejezes=""
  }
  if (osztaslenyomva && kovetszam==""){
    osztaslenyomva=false
    for (let i=0; i<vegeredmeny.textContent.length; i++){
      if (i==vegeredmeny.textContent.length-1){
        break
      }
      else{
        kifejezes+=vegeredmeny.textContent[i]
      }
    }
    vegeredmeny.textContent=kifejezes
    kifejezes=""
  }
  if (pluszlenyomva){
    elozoszam=parseFloat(elozoszam)+parseFloat(kovetszam)
    pluszlenyomva=false
    kovetszam=""
  }
  else if (kivonaslenyomva){
    elozoszam=parseFloat(elozoszam)-parseFloat(kovetszam)
    kivonaslenyomva=false
    kovetszam=""
  }
  else if (szorzaslenyomva){
    elozoszam=parseFloat(elozoszam)*parseFloat(kovetszam)
    szorzaslenyomva=false
    kovetszam=""
  }
  else if (osztaslenyomva){
    elozoszam=parseFloat(elozoszam)/parseFloat(kovetszam)
    osztaslenyomva=false
    kovetszam=""
  }
  if (pluszlenyomva==false && kivonaslenyomva==false && szorzaslenyomva==false && osztaslenyomva==false){
    osztaslenyomva=true
    vegeredmeny.textContent+="/"
    muveletlenyomva=true
  }
  pontlenyomva=false
  vegeredmenylenyomva=false
  szamlenyomva=false
}
function egyenlo(){
  if (pluszlenyomva==true){
    elozoszam=parseFloat(elozoszam)+parseFloat(kovetszam)
    pluszlenyomva=false
  }
  else if (kivonaslenyomva){
    elozoszam=parseFloat(elozoszam)-parseFloat(kovetszam)
    kivonaslenyomva=false
  }
  else if (szorzaslenyomva){
    elozoszam=parseFloat(elozoszam)*parseFloat(kovetszam)
    szorzaslenyomva=false
  }
  else if (osztaslenyomva){
    elozoszam=parseFloat(elozoszam)/parseFloat(kovetszam)
    osztaslenyomva=false
  }
  vegeredmeny.textContent=elozoszam
  vegeredmenylenyomva=true
  kovetszam=""
  szamlenyomva=false
}
if (vegeredmenylenyomva && szamlenyomva){
  ac()
  vegeredmenylenyomva=false
}