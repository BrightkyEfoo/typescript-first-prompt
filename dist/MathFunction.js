const MathFunction = {
    somme: (x, y) => {
        return x + y;
    },
    soustraction: (x, y) => {
        return x - y;
    },
    produit: (x, y) => {
        return x * y;
    },
    add: (x, y) => {
        return x + y;
    },
    division: (x, y) => {
        if (y === 0) {
            throw new Error('y cant be null');
        }
        return x / y;
    },
};
export const pow = (x, y) => {
    if (Math.round(y) === y) {
        let res = 1;
        for (let i = 0; i < y; i++) {
            res *= x;
        }
        return res;
    }
    else {
        throw new Error(`y should be an integer not ${y}`);
    }
};
export default MathFunction;
