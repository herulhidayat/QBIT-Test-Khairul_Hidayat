function fruit() {
    const fruits = [
        {
            fruitId: 1,
            fruitName: 'Apel',
            fruitType: 'IMPORT',
            stock: 10
        },
        {
            fruitId: 2,
            fruitName: 'Kurma',
            fruitType: 'IMPORT',
            stock: 20
        },
        {
            fruitId: 3,
            fruitName: 'apel',
            fruitType: 'IMPORT',
            stock: 50
        },
        {
            fruitId: 4,
            fruitName: 'Manggis',
            fruitType: 'LOCAL',
            stock: 100
        },
        {
            fruitId: 5,
            fruitName: 'Jeruk Bali',
            fruitType: 'LOCAL',
            stock: 10
        },
        {
            fruitId: 5,
            fruitName: 'KURMA',
            fruitType: 'IMPORT',
            stock: 20
        },
        {
            fruitId: 5,
            fruitName: 'Salak',
            fruitType: 'LOCAL',
            stock: 150
        }
    ]

    let nameOfFruit = fruits.map(f => f.fruitName.toLowerCase())
    let newName = [...new Set(nameOfFruit)]
    console.log("Buah yang dimiliki Andi: " + newName)

    let typeOfFruit = fruits.map(f => f.fruitType)
    let newType = [...new Set(typeOfFruit)]
    console.log("Terdapat "+newType.length+" wadah yaitu: "+newType)

    let importFruit = fruits.filter(f => f.fruitType === "IMPORT")
    let getImportName = importFruit.map(f => f.fruitName.toLowerCase())
    let newImport = [...new Set(getImportName)]
    console.log("Pada wadah IMPORT terdapat: " + newImport)

    let localFruit = fruits.filter(f => f.fruitType === "LOCAL")
    let getLocalName = localFruit.map(f => f.fruitName.toLowerCase())
    let newLocal = [...new Set(getLocalName)]
    console.log("Pada wadah LOCAL terdapat: " + newLocal)

    let importStock = importFruit.map(f => f.stock)
    let totalImport = 0
    for(let i=0;i<importStock.length;i++){
        totalImport += importStock[i]
    }
    console.log("Dimana dalam wadah IMPORT berisi " + totalImport + " buah")

    let localStock = localFruit.map(f => f.stock)
    let totalLocal = 0
    for(let i=0;i<localStock.length;i++){
        totalLocal += localStock[i]
    }
    console.log("dan dalam wadah LOCAL berisi " + totalLocal + " buah")
}

fruit()