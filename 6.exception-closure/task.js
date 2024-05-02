function parseCount(number) {
    let parsedNumber = Number.parseFloat(number);
    if (isNaN(parsedNumber)) {
        throw new Error("Невалидное значение");
    }
    return parsedNumber;
}

function validateCount(number) {
    try {
        return parseCount(number);
    } catch(error) {
        return error;
    }
}

class Triangle {
    constructor (a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;

        if ((a + b <= c) || (a + c <= b) || (b + c <= a)) {
            throw new Error("Треугольник с такими сторонами не существует")
        }
    }

    get perimetr() {
        return this.a + this.b + this.c;
    }

    get area() {
        let p = this.perimetr / 2;
        return Number(Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c)).toFixed(3))
    }
}

function getTriangle (a, b, c) {
    try {
        return new Triangle(a, b, c)
    } catch (error) {
        return {
            get perimetr() {
                return "Ошибка! Треугольник не существует"
            },
            get area() {
                return "Ошибка! Треугольник не существует"
            }
        }
    }
}

console.log(getTriangle(2, 2, 2));
console.log(getTriangle(2, 2, 3));
console.log(getTriangle(1, 13, 8))