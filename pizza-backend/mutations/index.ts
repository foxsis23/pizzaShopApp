import PizzaModel from '../models/pizza'
import DrinkModel from '../models/drink'
import SideModel from '../models/sides'
import DessertModel from '../models/desert'

const mutations = {
    createPizza:async(parent,args) =>{
        const {name,size,dough,image,ingredients,price,subType,type} = args.pizzaInput

        const pizza = new PizzaModel({name,size,dough,image,ingredients,price,subType,type})
        await pizza.save()

        return pizza
    },
    createDrink:async(parent,args) =>{
        const {name,image,price,type,size} = args.drinkInput

        const drink = new DrinkModel({name,image,price,type,size})
        await drink.save()

        return drink
    },
    createSide:async(parent,args) =>{
        const {name,image,price,type,size} = args.sideInput

        const side = new SideModel({name,image,price,type,size})
        await side.save()

        return side
    },
    deletePizza:async(parent,args) =>{
        const {id} = args

        const deletePizza = await PizzaModel.findByIdAndDelete({_id:id})
        return deletePizza
    },
    deleteSide:async(parent,args) =>{
        const {name} = args

        const deleteSide = await DessertModel.findOneAndDelete({name:name})
        return deleteSide
    },
    createDessert:async(parent,args) =>{
        const {name,image,price,size} = args.dessertInput

        const dessert = new DessertModel({name,image,price,size})
        await dessert.save()

        return dessert
    }
}

export default mutations