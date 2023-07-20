import DessertModel from '../models/desert'

const dessertQuery = {
    getAllDesserts: async(parent,args) =>{
        const desserts = await DessertModel.find()

        return desserts
    }
}

export default dessertQuery