import axios from "axios";

function getTypeById(type) {
    return axios.get("https://pokeapi.co/api/v2/type/"+ type);
  }

function GetAllTypes(){
    return axios.get("https://pokeapi.co/api/v2/type?limit=50");
}

export default {GetAllTypes, getTypeById}