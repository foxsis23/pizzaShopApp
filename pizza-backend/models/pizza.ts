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
    dough:{
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
    subType:{
        type:String,
        default:''
    },
    image:{
        type:String,
        default:''
    },
    ingredients:{
        type:Array,
        default:[]
    }
})

export default model('Pizza',schema)