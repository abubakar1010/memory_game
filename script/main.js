// variables 

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

let judge = [];
let targets = []

cards.sort( () => 0.5 - Math.random())

// console.log(cards);

const parent = document.querySelector('#container')

// console.log(parent);


function displayCart(){

    let url

    cards.forEach( (element) => {
        console.log(element);

        const card = document.createElement('img')
        
        // const id = 1
        card.setAttribute('src','../assets/play.jpg')
        card.setAttribute('id',element.image)
        card.setAttribute('class','card')
        // card.setAttribute()
        
        parent.appendChild(card)
        card.addEventListener('click',flipCart)
        url = element.image

    })

    return url
}

// console.log(document.querySelectorAll('img'));

displayCart()


function flipCart(e){

    const getTarget = e.target

    const url = e.target.id

    getTarget.setAttribute("src",url)

    targets.push(getTarget)

judge.push(url)

console.log(judge);
console.log(judge.length);
if ( judge.length === 2) {
    if( judge[0] === judge[1]){
        setTimeout(() => {
            alert('you are win')
            targets.forEach((element) => {
                element.setAttribute("src","../assets/blank.jpg")
            element.style.visibility = "hidden"

            })
            judge = [];
            targets = []
        }, 500);

    }else{
        setTimeout(() => {
            
            targets.forEach((element) => {
                element.setAttribute("src","../assets/play.jpg")
            })
                alert('you are lost')
                judge = [];
                targets = []
        }, 500);
    }

    
}

}

