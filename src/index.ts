import * as MathFunctions  from './MathFunction.js';
import MathFunction from './MathFunction.js';
import { Triangle , Tuple , TriangleCarre ,Inutile,Utile, afficheTriangle } from './Generics.js';
console.log(' 3 ^ 3 = ', MathFunctions.pow(3,4))

console.log(`MathFunction['somme'](1,2) : `, MathFunction['somme'](1,2))


const pytaghoreTriangle = new Triangle(2,2,4,3)
const equiTriangle = new TriangleCarre(5,5,4)

console.log('equiTriangle',  afficheTriangle<TriangleCarre>(equiTriangle))
console.log('equiTriangle', afficheTriangle<Triangle>(equiTriangle) )
console.log('pytaghoreTriangle', afficheTriangle(pytaghoreTriangle) )
const b = async ()=>{
    const a = ()=> Utile(1)
    let c : void
    c = Inutile(a)
    Utile(2)
}
// b()

let a = new Array<[number , string]|4|'ul'|'e'>
a=[4,'ul','e']
console.log(a.values)
let c : {4 : 4 , 1 : string} = {4 : 4 , 1 : 'll'}
console.log('c', c)

let dd = new Tuple<number , string , number >(1 , 'adele' , 1)
dd.firstNSecond(5,'tt')

let d2 = new Tuple<boolean, string , number >(false , 'adele' , 5.58)

d2.firstNSecond(true , 'lll')


const LogProps  = (x : Function) : void => {
    x.prototype.print = () =>{
        // console.log(x.prototype.print) 
        console.log('le print la essaie quand meme ein')
        console.log(this)  
        // return ''+this
    }
}

@LogProps
class Obj {
    constructor(public a : number , public b : number){}
}
const obj1 = new Obj(1 , 2) as any

obj1.print()


class OObj {
    constructor(public a : number , public b : number){}
    readonly displayFive : () => void = ()=>{
        console.log(5)
    }
}

const obj2 = new OObj(5 , 6)
// obj2.displayFive = ()=>{
    
// }
obj2.displayFive()
type aa = {x : number , y : number}
class Geometry {
    static #origin = {x:0 , y:0}
    constructor(private _orn:aa , private _x : number){}
    
    // set orn : (obj : aa) => void = (obj : aa):void =>{

    // } 
    get orn() : aa {
        return {x : 1, y:1}
    }

    set orn(obj : aa) {
        this._orn=obj
    }


    set x(X : number) {
            this._x = X
    }
    get x (){
        return this._x
    }
    static{
        console.log(Geometry.#origin)
    }
}

const yyu = new Geometry({x:1,y:2} , 5)

yyu.x = 8

console.log('yyu.x', yyu.x)
