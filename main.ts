
function NumMap<Number>(n): Object{/*создать new Map<number, null>() проитерироваться циклом от 0 до 100 и задать как ключ мапы, индекс, а как значение null.*/
let map1 =  new Map<Number, null>();
for(let i = 1; i <= n ; i++){
        map1.set(i,  null)
}
   return map1
}
console.log(NumMap(100))
