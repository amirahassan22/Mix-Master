import axios from "axios";


export const customFetch = axios.create(
    {
        baseURL:'https://www.thecocktaildb.com/api/json/v1/1'
    }
)

