import {Schema,model} from 'mongoose'


const schema = new Schema({
    name:{
        type:String,
        default:''
    },
    price:{
        type:String,
        default:''
    },
    size:{
        type:String,
        default:''
    },
    type:{
        type:String,
        default:''
    },
    image:{
        type:String,
        default:''
    }
})

export default model('Side',schema)