const path = require("path");

const productManager = require("./products/productManager")

const mainProduct = async () => {


    try {
        const dbPath = path.join(`${__dirname}/db_product.json`);



        const productInstance = new productManager(dbPath);


        const listProduct = await productInstance.getAllVinos();

        console.log(listProduct.vinosArgentinos)


        const vino1 = {

            nombreVino: "vino las perdices",
            cantidadDeCajas: 20,
            unidadesPorCaja: 6,
            tipo: "cabernet",
            ubicacion: "Tunuyan,Mendoza",
            caracteristica: "añejo frutado",
        };

        const newUser = await productInstance.createVinos(vino1);
        console.log("🚀 ~ file: app.js:31 ~ mainProduct ~ newUser", newUser)


    } catch (error) {


    }

};

mainProduct();