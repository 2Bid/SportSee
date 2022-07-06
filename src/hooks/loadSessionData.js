import { useContext, useEffect, useState } from "react";
import { MyContext } from "../store/context";

/**
 * Chargement des données des sessions
 * @param {*} id 
 * @returns {{
 * loading : boolean,
 * data : [],
 * error : any
*   }}
*/
export const useLoadSessionData = (id)=> {
     const [loading,setLoading] = useState(true)
     const [data,setData] = useState([])
     const [error,setError] = useState(undefined)

     const context = useContext(MyContext)
     const urlMainData =context.useApi ? `http://localhost:3000/user/${id}/average-sessions` : process.env.PUBLIC_URL + `/data/session/${id}.json`
     
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