import mongoose from "mongoose";

const projectSchema =new mongoose.Schema({
  name: {
    type: String,
  },
  description: {
    type: String,
  },
  role: {
    type: String,
  },
  start: {
    type: String,
  },
  end: {
    type: String,
  },
})

const expSchema = new mongoose.Schema({
  company: {
    type: String,
  },
  role: {
    type: String,
  },
  startDate: {
    type: String,
  },
  endDate: {
    type: String,
    default: null,
  },
});

const infoSchema=new mongoose.Schema({
  userId: {
    type: String,
    require:true,
    unique:true
  },
  birthDate: {
    type: String,
  },birthPlace:{
    type:String,
  },nationality:{
    type:String
  },educationLv:{
    type:String
  }, skills:{
    type:Array
  },
  projects:{
    type: projectSchema
  },
  exp:{ 
    type: expSchema
  },
})

const infoModel = mongoose.model('infoModel', infoSchema);

export default infoModel
