import axios from "axios";

function GetAllGenerations(){
    return axios.get("https://pokeapi.co/api/v2/generation/");
}

function GetGenByID(id){
    return axios.get("https://pokeapi.co/api/v2/generation/"+id);
}

export default {GetAllGenerations, GetGenByID}