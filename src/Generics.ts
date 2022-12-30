import { pow } from './MathFunction.js';
import MathFunction from './MathFunction.js';
export const Log = <T>(data: T) => {
  console.log(`data : ${data}`);
};

type vecteur = { x: number; y: number };

interface IFigure {
  x: number;
  y: number;
  translater: (vecteur: vecteur) => vecteur;
}

export abstract class Figure implements IFigure {
  public static nombreCote: number;
  constructor(public x: number, public y: number) {}
  translater: (vecteur: vecteur) => vecteur = (vecteur: vecteur): vecteur => {
    return { x: (this.x += vecteur.x), y: (this.y += vecteur.y) };
  };
}

export class Triangle extends Figure {
  public hypothenuse?: number;
  public aire: number = 0;
  constructor(
    public x: number,
    public y: number,
    public hauteur: number,
    public base: number
  ) {
    super(x, y);
    this.hypothenuse = Math.sqrt(pow(hauteur, 2) + pow(base, 2));
    if (this.base) {
      this.aire = MathFunction['division'](
        MathFunction.produit(this.hauteur, this.base),
        2
      );
    }
  }
  public static nombreCote: number = 3;
}

export class TriangleCarre extends Triangle {
  constructor(public x: number, public y: number, public cote: number) {
    super(x, y, cote, cote);
    this.hypothenuse = cote;
    this.aire = MathFunction.division(pow(cote, 2), 2);
  }
}

// type T = Triangle | TriangleCarre

export const afficheTriangle = <T>(x: T): string => {
  let res = '';
  if (x instanceof TriangleCarre) {
    res = `carre : ${x.cote} et ${x.hypothenuse}`;
  } else if (x instanceof Triangle) {
    res = `simple : ${x.hypothenuse}`;
  } else {
    res = 'should be ';
  }
  return res;
};

export const Inutile = (callback: () => Promise<void>) => {
  // callback
  setTimeout(callback, 10000);
};

export const Utile = async (x: number) => {
  console.log('utile ', x);
};

export class Tuple<T extends number | boolean, K, C> {
  constructor(protected first: T, protected second: K, protected third: C) {}
  firstNSecond = (x: T, y: K) => {
    if (typeof x === 'number' && typeof this.first === 'number') {
      console.log(' x : ' + (this.first + x));
    } else if (typeof x === 'boolean' && typeof this.first === 'boolean') {
      console.log(' x : ' + (this.first && x));
    } else {
      console.log(' x : ' + this.first + x);
    }
    console.log(' y : ' + this.second + y);
  };
}
