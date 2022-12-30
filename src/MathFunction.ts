type function2Variables = (x: number, y: number) => number;

interface Maths {
  [index: string]: function2Variables;
}

const MathFunction: Maths = {
  somme: (x: number, y: number) => {
    return x + y;
  },

  soustraction: (x: number, y: number) => {
    return x - y;
  },

  produit: (x: number, y: number) => {
    return x * y;
  },
  add: (x: number, y: number) => {
    return x + y;
  },
  division: (x: number, y: number) => {
    if (y === 0) {
      throw new Error('y cant be null');
    }
    return x / y;
  },
};

export const pow: function2Variables = (x: number, y: number): number => {
  if (Math.round(y) === y) {
    let res = 1;
    for (let i = 0; i < y; i++) {
      res *= x;
    }
    return res;
  } else {
    throw new Error(`y should be an integer not ${y}`);
  }
};

export default MathFunction;
