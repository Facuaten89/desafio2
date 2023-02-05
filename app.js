const path = require("path");

const mainProduct = async () => {


    try {
        const dbPath = path.join(`${__dirname}/db_product.json`);

        const productInstance = new productManager(dbPath);
    } catch (error) {

    }

}

mainProduct()