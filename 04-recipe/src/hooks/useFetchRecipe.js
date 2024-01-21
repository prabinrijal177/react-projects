import axios from "axios";
import { useReducer } from "react";

const options = {
    method: 'GET',
    url: 'https://tasty.p.rapidapi.com/recipes/get-more-info',
    params: {id: '8138'},
    headers: {
      'X-RapidAPI-Key': '4bda459f30msh808856354f436e7p1cce64jsn5196f027ca87',
      'X-RapidAPI-Host': 'tasty.p.rapidapi.com'
    }
  };

const initialState={
   data: null,
   loading: false,
   error: null,
};

const Action ={
    FETCHING_DATA: "FETCHING_DATA",
    FETCH_SUCCESSFUL: "FETCH_SUCCESSFUL",
    FETCH_ERROR: "FETCH_ERROR",
};


const reducer = (_, action) =>{
  switch (action.type) {
    case Action.FETCHING_DATA:
        return {
            data: null,
            error: null,
            loading: true,
        }
    case Action.FETCH_SUCCESSFUL:
            return{
                error: null,
                loading: false,
                data: action.payload
            }
    case Action.FETCH_ERROR:
                return{
                    error: action.payload,
                    loading: false,
                    data: null,

                }
                default: return initialState
    }
}


const useFetchRecipe = () =>{


    const [{data, loading, error}, dispatch] = useReducer(reducer, initialState);


    const fetchRecipe = async(id ) =>{


        dispatch({type: Action.FETCHING_DATA});


      try {
        const reqOptions = {...options}

            reqOptions.params.id = id;

        const response = await axios.request(options);

        dispatch({type: Action.FETCH_SUCCESSFUL, payload: response.data});
      } catch (error) {

        dispatch({type: Action.FETCH_ERROR, payload: error.message});
      }
    };

    return [fetchRecipe, {data, loading, error}]
};


export default  useFetchRecipe;