import {gql} from 'apollo-server'

const typeDefs = gql`
    type Query{
        getAllPizzas:[Pizza]
        getPizzaByType(type:String):[Pizza]
        getPizzaById(id:ID):Pizza
        getDrinkByType(type:String):[Drink]
        getSideByType(type:String):[Side]
        filterPizza(filterInput:FilterInput):[Pizza]
        getAllDesserts:[Dessert]
    }

    type Mutation{
        createPizza(pizzaInput:PizzaInput):Pizza
        createDrink(drinkInput:DrinkInput):Drink
        createSide(sideInput:SideInput):Side
        createDessert(dessertInput:DessertInput):Dessert
        deletePizza(id:ID):Pizza
        deleteSide(name:String):Dessert
    }

    input PizzaInput{
        name:String
        dough:String
        image:String
        size:String
        type:String
        subType:String
        ingredients:[IngredientInput]
        price:String
    }

    input FilterInput{
        type:String
        sauce:String
        ingredients:[IngredientFilterInput]
    }

    input SideInput{
        name:String
        size:String
        price:String
        image:String
        type:String
    }

    type Side{
        name:String
        image:String
        id:ID
        size:String
        type:String
        price:String
    }
    
    type Dessert{
        name:String
        image:String
        id:ID
        size:String
        price:String
    }

    type Pizza{
        name:String
        dough:String
        image:String
        id:ID
        size:String
        type:String
        subType:String
        ingredients:[Ingredient]
        price:String
    }

    type Drink{
        name:String
        image:String
        id:ID
        size:String
        type:String
        price:String
    }

    input DrinkInput{
        name:String
        image:String
        size:String
        type:String
        price:String
    }

    input DessertInput{
        name:String
        image:String
        size:String
        price:String
    }

    type Ingredient{
        name:String
        image:String
        amount:String
    }

    input IngredientInput{
        name:String
        image:String
        amount:String
    }
    input IngredientFilterInput{
        name:String
    }
`

export default typeDefs