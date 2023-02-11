
const fs = require("fs/promises")
const bcrypt = require("bcryptjs")



class productManager {

    constructor(path) {

        this.path = path;

    }

    async generateIndex(Vinos) {

        if (Vinos.length === 0) return 1;
        return Vinos[Vinos.length - 1].id + 1;

    }



    async validateVinos() { }


    async createVinos(Vino) {

        try {
            const validacion = await this.validateVinos(Vino);


            const {
                nombreVino,
                cantidadDeCajas,
                unidadesPorCaja,
                tipo,
                ubicacion,
                caracteristica, } = Vino;


            const dbProduct = await this.getAllVinos()


            const newId = await this.generateIndex(dbProduct.vinosArgentinos)

            const salt = await bcrypt.genSalt()

            const locationEncrypted = await bcrypt.hashSync(ubicacion, salt)

            const newVinos = {
                id: newId,
                nombreVino,
                cantidadDeCajas,
                unidadesPorCaja,
                tipo,
                ubicacion: locationEncrypted,
                caracteristica,
            };

            dbProduct.vinosArgentinos.push(newVinos);

            await fs.writeFile(this.path, JSON.stringify(dbProduct));

            return newVinos;

        } catch (error) { }

    }

    async getAllVinos() {
        try {
            const VinosDB = await fs.readFile(this.path, "utf-8");
            return JSON.parse(VinosDB);
        } catch (error) {
            console.log(
                "🚀 ~ file: armyManager.js:16 ~ ArmyManager ~ getAllMilitaryBases ~ error",
                error
            );
        }
    }
}


module.exports = productManager;