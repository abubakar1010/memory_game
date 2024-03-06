const cards = [
    {
        name: "bicycle",
        image: "../assets/bicycle.jpg"
    },
    {
        name: "bike",
        image: "../assets/bike.jpg"
    },
    {
        name: "boat",
        image: "../assets/boat.jpg"
    },
    {
        name: "ship",
        image: "../assets/ship.jpg"
    },
    {
        name: "chopper",
        image: "../assets/chopper.jpg"
    },
    {
        name: "car",
        image: "../assets/car.jpg"
    },
    {
        name: "bicycle",
        image: "../assets/bicycle.jpg"
    },
    {
        name: "bike",
        image: "../assets/bike.jpg"
    },
    {
        name: "boat",
        image: "../assets/boat.jpg"
    },
    {
        name: "ship",
        image: "../assets/ship.jpg"
    },
    {
        name: "chopper",
        image: "../assets/chopper.jpg"
    },

    {
        name: "car",
        image: "../assets/car.jpg"
    },
]

cards.sort( () => 0.5 - Math.random())

console.log(cards);