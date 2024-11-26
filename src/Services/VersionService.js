import axios from "axios";

function GetAllVersions(){
    return axios.get("https://pokeapi.co/api/v2/version?limit=100");
}

function getVersionById(version) {
    return axios.get("https://pokeapi.co/api/v2/version/"+ version);
  }

function GetVersionGroupByName(name){
    return axios.get("https://pokeapi.co/api/v2/version-group/"+name);
}

export default {getVersionById, GetAllVersions, GetVersionGroupByName}