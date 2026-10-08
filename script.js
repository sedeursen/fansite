var feiten = [
    "Ducks are excellent swimmers and can dive up to 20 feet deep.",
    "A group of ducks is called a paddling.",
    "Ducks have waterproof feathers due to a special oil they secrete.",
    "Ducks don't have teeth, but they have tooth-like edges to help them eat.",
    "The fastest duck in flight can reach around 60 mph (97 km/h).",
    "Ducks can be found on every continent except Antarctica."
]

function toonfeit(){
    var random = Math.floor(Math.random() * feiten.length);
    document.getElementById("feittekst").innerHTML = feiten[random];
}

var link = [
    "https://www.wwt.org.uk/join-and-support/adopt/adopt-a-duck",
    "https://amsterdamduckstore.com/"
];

function gotolink(){
    var random = Math.floor(Math.random() * link.length);
    window.open(link[random], "_blank");
}

function gotolink(){
    var random = Math.floor(Math.random() * link.length);
    window.open(link[random], "_blank");

    if (random === 0) {
        document.getElementById("ownertekst").innerHTML = "Are you gonna be a duck owner?? 🦆";
        document.getElementById("ownertekst").style.color = "#ffae00";
    } else {
        document.getElementById("ownertekst").innerHTML = "Are you gonna be a duck owner?? 🛍️";
        document.getElementById("ownertekst").style.color = "#ffae00";
    }
}