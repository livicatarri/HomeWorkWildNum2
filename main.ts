function NumMap<Number>(n): Object{/*создать new Map<number, null>() проитерироваться циклом от 0 до 100 и задать как ключ мапы, индекс, а как значение null.*/
let numNull =  new Map<Number, null>();
for(let i = 1; i <n+1 ; i++){
        numNull.set(i,  null)
}
   return numNull
}
//console.log(NumMap(100))




let numIf= NumMap(100);/*2 пункт*/
let temp=[]
temp=numIf.keys()
for ( item of temp){
//console.log(item)
if (item%3==0)
console.log(item, "Devided by tree")
            }
        //console.log(temp)
        
