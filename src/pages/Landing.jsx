import React from 'react'
import SearchForm from '../Components/searchForm.jsx'
import { useLoaderData } from 'react-router-dom';
import { customFetch  } from '../custom.js';
import { useGlobalContext } from '../Components/Store.jsx';
import CocktailList from '../Components/CocktailList.jsx';
import { Query, useQuery } from '@tanstack/react-query';
import axios from 'axios';

const searchCocktailsQuery = (searchTerm) =>{
  return{
    queryKey:['search',searchTerm || "all"],
    queryFn: async()=>{
      const result = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchTerm}`)
      return result.data.drinks;
    }
}

 
} 

export const loader = (clientQuery)=> async({request})=>{
  console.log(request);
  const url = new URL(request.url);
  const searchTerm = url.searchParams.get('search') ||  "orange";
 await clientQuery.ensureQueryData(searchCocktailsQuery(searchTerm))
  return {searchTerm};
}

export default function Landing() {
  const {searchTerm} =useLoaderData();
  const {setDrinksList} = useGlobalContext();
  const {data:drinks} = useQuery(searchCocktailsQuery(searchTerm))
  console.log(drinks,searchTerm);
  setDrinksList(drinks)
  return (
    <main>
       <SearchForm searchTerm={searchTerm}/>
       <CocktailList/>
    </main>
  )
}
