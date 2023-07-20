import DrinkModel from '../models/drink'

const drinkQuery = {
    getDrinkByType: async(parent,args) =>{
        const drinks = await DrinkModel.find({type:args.type})

        return drinks
    }
}

export default drinkQuery