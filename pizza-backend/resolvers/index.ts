import mutations from '../mutations/index'

import pizzaQuery from './resolvers'
import drinkQuery from './drinkQuery'
import sideQuery from './sideQuery'
import dessertQuery from './dessertQuery'

const resolvers = {
    Query:{
        ...pizzaQuery,
        ...drinkQuery,
        ...sideQuery,
        ...dessertQuery
    },
    Mutation:{
        ...mutations
    }

}

export default resolvers