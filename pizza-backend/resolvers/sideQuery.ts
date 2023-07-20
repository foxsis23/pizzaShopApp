import SideModel from '../models/sides'

const sideQuery = {
    getSideByType: async(parent,args) =>{
        const sides = await SideModel.find({type:args.type})

        return sides
    }
}

export default sideQuery