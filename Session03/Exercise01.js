
class Point {

#x
#y

constructor(x, y)
{
    this.#x = x;
    this.#y = y;
}

getX()
{
    return this.#x
}

getY()
{
    return this.#y
}

moveTo(x, y)
{
    this.#x = x;
    this.#y = y;
}

toString()
{
    return `[${this.#x},${this.#y}]`
}

}

class Circle {
    #radius
    #center

    constructor(center, radius)
    {
        this.#center = center
        this.#radius = radius
    }

    getCenterX()
    {
        return this.#center.getX;
    }

    getCenterY()
    {
        return this.#center.getY;
    }

    getRadius()
    {
        return this.#radius
    }

    moveCenterTo(x, y)
    {
        this.#center.moveTo(x, y);
    }

    toString()
    {
        return `Circle(Center: ${this.#center.toString()}, Radius: ${this.#radius})`
    }
}
/*
function createCircle(center, radius) {
    return {
        getCenterX: () => center.getX(),
        getCenterY: () => center.getY(),
        getRadius: () => radius,
        moveCenterTo: (x, y) => center.moveTo(x, y),
        toString: () => `Circle(Center: ${center.toString()}, Radius: ${radius})`,
    }
}

function createPoint(x, y) {
    return {
        getX: () => x,
        getY: () => y,
        moveTo(newX, newY) {
            x = newX
            y = newY
        },
        toString: () => `[${x},${y}]`,
    }
}
*/
const point = new Point(1, 2);
const circle = new Circle(point, 4)
console.log(circle.toString())
// → Circle(Center: [1,2], Radius: 4)