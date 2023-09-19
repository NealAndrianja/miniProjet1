let stocks = [
    {article: "Appareil Photo", brand: "Canon", isNew: true, price: 250000},
    {article: "Objectif", brand: "Nikon", isNew: false, price: 500000},
    {article: "Appareil Photo", brand: "Nikon", isNew: false, price: 150000},
    {article: "Appareil Photo", brand: "Canon", isNew: true, price: 650000},
    {article: "Appareil Photo", brand: "Canon", isNew: true, price: 250000},
    {article: "Objectif", brand: "Nikon", isNew: false, price: 500000},
    {article: "Objectif", brand: "Nikon", isNew: false, price: 150000},
    {article: "Objectif", brand: "Canon", isNew: false, price: 450000},
    {article: "Appareil Photo", brand: "Nikon", isNew: false, price: 350000},
    {article: "Objectif", brand: "Nikon", isNew: false, price: 500000},
    {article: "Appareil Photo", brand: "Nikon", isNew: false, price: 150000},
    {article: "Objectif", brand: "Canon", isNew: true, price: 650000},
    {article: "Appareil Photo", brand: "Nikon", isNew: true, price: 750000},
    {article: "Objectif", brand: "Nikon", isNew: false, price: 475000},
    {article: "Objectif", brand: "Canon", isNew: false, price: 150000},
    {article: "Appareil Photo", brand: "Canon", isNew: false, price: 450000}
]

const articleNouveau = stocks.filter(stock => stock.isNew === true)
console.log(articleNouveau)

// const liste = document.getElementById("list-all")

// function showAll(){
//     stocks.map(stock => {
//         const stockElement = document.createElement("li")
//         stockElement.innerText = `article: ${stock.article} | marque: ${stock.brand} | Prix: ${stock.price}`
//         liste.appendChild(stockElement)
//     })
// }
// showAll()


const nbreAppareil = stocks.reduce((count, current) => {
    if(current.article === "Appareil Photo"){
        return ++count
    }
    return count
},0)

console.log(nbreAppareil)


const prixParBrand = new Array(2)

prixParBrand[0] = stocks.filter((c) => c.brand === "Nikon").reduce((acc, curr) => {
    acc.totalPrice += curr.price
    return acc
    },{ brand: "Nikon", totalPrice: 0 })

prixParBrand[1] = stocks.filter((c) => c.brand === "Canon").reduce((acc, curr) => {
    acc.totalPrice += curr.price
    return acc
    },{ brand: "Canon", totalPrice: 0 })

console.log(prixParBrand)

