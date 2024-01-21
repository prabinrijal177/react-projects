import axios from "axios";
import { useState } from "react";


const options = {
    method: 'GET',
    url: 'https://tasty.p.rapidapi.com/recipes/list',
    params: {
      from: '0',
      size: '20',


    },
    headers: {
      'X-RapidAPI-Key': '4bda459f30msh808856354f436e7p1cce64jsn5196f027ca87',
      'X-RapidAPI-Host': 'tasty.p.rapidapi.com'
    }
  };
const useFetchRecipes = () => {
    const [recipes, setRecipes ] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);


    const fetchRecipes = async(searchTerm ) =>{
        setLoading(true);
        setRecipes(null);
        setError(null);
      try {
        const reqOptions = {...options}
        if(searchTerm){
            reqOptions.params.q = searchTerm
        }
        const response = await axios.request(options);
        setRecipes(response.data.results);
        setLoading(false);
      } catch (error) {
        setError(error.message)

        setLoading(false);
      }
    };

    return [fetchRecipes, {data: recipes, loading, error}]
};

export default useFetchRecipes;

