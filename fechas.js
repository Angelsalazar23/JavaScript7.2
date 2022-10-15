



let fechaHoy= new Date();
console.log(fechaHoy)


const feNaci= new Date('may 23, 1997')
console.log(feNaci)



let igual=false;

if(fechaHoy>feNaci){
    igual=true
}else{
    igual =false
}
console.log(igual)


const dia= feNaci.getDate();
console.log(dia)
const mes= feNaci.getMonth()+1
console.log(mes)
const anyo= feNaci.getFullYear()
console.log(anyo)
