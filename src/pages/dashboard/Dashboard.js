import React, { useEffect, useState } from 'react'
import { Navigate, useParams } from 'react-router-dom'

/* Import Composant */
import Card from '../../components/card/Card'
import Circlechart from '../../components/charts/circlechart/Circlechart'
import Hexachart from '../../components/charts/hexachart/Hexachart'
import Linechart from '../../components/charts/linechart/Linechart'
import Stickchart from '../../components/charts/barchart/Barchart'
import Header from '../../components/header/Header'
import Navbar from '../../components/navbar/Navbar'

/* Import CSS */
import "./../../components/charts/charts.css"
import "./dashboard.css"

/* Import Data */
import { useLoadMainData } from '../../hooks/loadMainData'
import { cardDataTransform } from '../../transform/main'

/**
 * Composant générant la page Dashboard
 * @returns {React.Component}
 */
export default function Dashboard() {
     let {id} = useParams()
     const mainData = useLoadMainData(id)

     const [name, setName] = useState('')
     const [card, setCard] = useState([])

     useEffect(()=>{
          if(mainData.data && mainData.data.keyData){

               const cardData = cardDataTransform(mainData)
               setCard(cardData)
               setName(mainData.data.userInfos.firstName)
          }
     },[mainData.data])

     function checkIdExist(){
          if(!mainData.loading && !mainData.error){
               if(mainData.data){
                    return (
                         <>
                               <Header />
                               <div className='dashboard-container'>
                                    <Navbar />
                                    <div className='dashboard'>
                                         <div className='user-welcome'>
                                              <h1>Bonjour <span className='user-name'>{name}</span></h1>
                                              <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
                                         </div>
                                         <div className='user-data-container'>
                                              <div className='data-graph'>
                                                   <Stickchart />
                                                   <div className='chart-box-container'>
                                                        <Linechart />
                                                        <Hexachart />
                                                        <Circlechart />
                                                   </div>
                                              </div>
                                              <div className='data-cardNumber'>
                                                   {
                                                        card.map((value)=>{
                                                             return <Card value={value.value} title={value.title} prefixe={value.prefixe} icon={value.icon} key={value.title} background={value.background}/>
                                                        })
                                                   }
                                              </div>
                                         </div>
                                    </div>
                               </div>
                         </>
                    )
               }
               else{
                    return <Navigate to="/error"/>
               }
          }
          else{
               <></>
          }
     }

     return (
          <>
          {    
               checkIdExist()
          }
          </>
          
     )
}