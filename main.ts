
function NumMap<Number>(n): Object{/*создать new Map<number, null>() проитерироваться циклом от 0 до 100 и задать как ключ мапы, индекс, а как значение null.*/
let numNull =  new Map<Number, null>();
for(let i = 1; i <= n ; i++){
        numNull.set(i,  null)
}
   return numNull
}
console.log(NumMap(100))
