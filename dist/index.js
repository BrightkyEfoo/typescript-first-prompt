var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _a, _Geometry_origin;
import * as MathFunctions from './MathFunction.js';
import MathFunction from './MathFunction.js';
import { Triangle, Tuple, TriangleCarre, Inutile, Utile, afficheTriangle } from './Generics.js';
console.log(' 3 ^ 3 = ', MathFunctions.pow(3, 4));
console.log(`MathFunction['somme'](1,2) : `, MathFunction['somme'](1, 2));
const pytaghoreTriangle = new Triangle(2, 2, 4, 3);
const equiTriangle = new TriangleCarre(5, 5, 4);
console.log('equiTriangle', afficheTriangle(equiTriangle));
console.log('equiTriangle', afficheTriangle(equiTriangle));
console.log('pytaghoreTriangle', afficheTriangle(pytaghoreTriangle));
const b = () => __awaiter(void 0, void 0, void 0, function* () {
    const a = () => Utile(1);
    let c;
    c = Inutile(a);
    Utile(2);
});
// b()
let a = new Array;
a = [4, 'ul', 'e'];
console.log(a.values);
let c = { 4: 4, 1: 'll' };
console.log('c', c);
let dd = new Tuple(1, 'adele', 1);
dd.firstNSecond(5, 'tt');
let d2 = new Tuple(false, 'adele', 5.58);
d2.firstNSecond(true, 'lll');
const LogProps = (x) => {
    x.prototype.print = () => {
        // console.log(x.prototype.print) 
        console.log('le print la essaie quand meme ein');
        console.log(this);
        // return ''+this
    };
};
let Obj = class Obj {
    constructor(a, b) {
        this.a = a;
        this.b = b;
    }
};
Obj = __decorate([
    LogProps
], Obj);
const obj1 = new Obj(1, 2);
obj1.print();
class OObj {
    constructor(a, b) {
        this.a = a;
        this.b = b;
        this.displayFive = () => {
            console.log(5);
        };
    }
}
const obj2 = new OObj(5, 6);
// obj2.displayFive = ()=>{
// }
obj2.displayFive();
class Geometry {
    constructor(_orn, _x) {
        this._orn = _orn;
        this._x = _x;
    }
    // set orn : (obj : aa) => void = (obj : aa):void =>{
    // } 
    get orn() {
        return { x: 1, y: 1 };
    }
    set orn(obj) {
        this._orn = obj;
    }
    set x(X) {
        this._x = X;
    }
    get x() {
        return this._x;
    }
}
_a = Geometry;
_Geometry_origin = { value: { x: 0, y: 0 } };
(() => {
    console.log(__classPrivateFieldGet(Geometry, _a, "f", _Geometry_origin));
})();
const yyu = new Geometry({ x: 1, y: 2 }, 5);
yyu.x = 8;
console.log('yyu.x', yyu.x);
