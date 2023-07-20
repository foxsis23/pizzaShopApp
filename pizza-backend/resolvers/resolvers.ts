import PizzaModel from '../models/pizza'


const pizzaQuery = {
    getAllPizzas:async(parent,args) =>{
        const pizzas = await PizzaModel.find()

        return pizzas
    },
    getPizzaByType:async(parent,args) =>{
        const pizzaByType = await PizzaModel.find({type:args.type})

        return pizzaByType
    },
    getPizzaById:async(parent,args) =>{
        try {
            const pizzaById = await PizzaModel.findOne({_id:args.id})

            return pizzaById
        } catch (error) {
            console.log(error)
        }
      
    },
    filterPizza:async(parent,args) =>{
        const {type,sauce,ingredients} = args.filterInput

        try {
            const allPizza = await PizzaModel.find() 

            const filterPizza = allPizza.filter((item) => {
                if(item.subType === type){
                    return true
                }
                item.ingredients.forEach((itemIngr) =>{
                    if(itemIngr.name === sauce){
                        return true
                    }
                    ingredients.forEach((itemIng) =>{
                        if(itemIng.name === itemIngr.name){
                            return true
                        }
                    })
                })
            })

            return filterPizza
        } catch (error) {
            console.log(error)
        }
    }
}

export default pizzaQuery