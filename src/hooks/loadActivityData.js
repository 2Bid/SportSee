import { useContext, useEffect, useState } from "react";
import { MyContext } from "../store/context";

/**
 * Chargement des données des activités
 * @param {*} id 
 * @returns {{
 * loading : boolean,
 * data : [],
 * error : any
*   }}
*/
export const useLoadActivityData = (id)=> {
     const [loading,setLoading] = useState(true)
     const [data,setData] = useState([])
     const [error,setError] = useState(undefined)

     const context = useContext(MyContext)
     const urlMainData =context.useApi ? `http://localhost:3000/user/${id}/activity` : process.env.PUBLIC_URL + `/data/activity/${id}.json`
     
     useEffect(()=>{
          const fetchData = () =>{
               fetch(urlMainData)
               .then(response =>{
                    return response.json()
               })
               .then((mainData)=>{
                    setData(mainData.data)
                    setLoading(false)
               })
               .catch(e =>{
                    console.log(e)
                    setError(e)
                    setLoading(false)
               })
          }
     
          fetchData()
     }, [])


     return{
          loading,
          data,
          error
     }
}