var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { pow } from './MathFunction.js';
import MathFunction from './MathFunction.js';
export const Log = (data) => {
    console.log(`data : ${data}`);
};
export class Figure {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.translater = (vecteur) => {
            return { x: (this.x += vecteur.x), y: (this.y += vecteur.y) };
        };
    }
}
export class Triangle extends Figure {
    constructor(x, y, hauteur, base) {
        super(x, y);
        this.x = x;
        this.y = y;
        this.hauteur = hauteur;
        this.base = base;
        this.aire = 0;
        this.hypothenuse = Math.sqrt(pow(hauteur, 2) + pow(base, 2));
        if (this.base) {
            this.aire = MathFunction['division'](MathFunction.produit(this.hauteur, this.base), 2);
        }
    }
}
Triangle.nombreCote = 3;
export class TriangleCarre extends Triangle {
    constructor(x, y, cote) {
        super(x, y, cote, cote);
        this.x = x;
        this.y = y;
        this.cote = cote;
        this.hypothenuse = cote;
        this.aire = MathFunction.division(pow(cote, 2), 2);
    }
}
// type T = Triangle | TriangleCarre
export const afficheTriangle = (x) => {
    let res = '';
    if (x instanceof TriangleCarre) {
        res = `carre : ${x.cote} et ${x.hypothenuse}`;
    }
    else if (x instanceof Triangle) {
        res = `simple : ${x.hypothenuse}`;
    }
    else {
        res = 'should be ';
    }
    return res;
};
export const Inutile = (callback) => {
    // callback
    setTimeout(callback, 10000);
};
export const Utile = (x) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('utile ', x);
});
export class Tuple {
    constructor(first, second, third) {
        this.first = first;
        this.second = second;
        this.third = third;
        this.firstNSecond = (x, y) => {
            if (typeof x === 'number' && typeof this.first === 'number') {
                console.log(' x : ' + (this.first + x));
            }
            else if (typeof x === 'boolean' && typeof this.first === 'boolean') {
                console.log(' x : ' + (this.first && x));
            }
            else {
                console.log(' x : ' + this.first + x);
            }
            console.log(' y : ' + this.second + y);
        };
    }
}
