/* Import SVG */
import calorie from "./../images/calories.svg"
import glucide from "./../images/glucide.svg"
import proteine from "./../images/proteine.svg"
import lipide from "./../images/Lipide.svg"

function transformValue(value){
     if(value[0] === 'proteinCount'){
          return  {
               value : value[1],
               title : "Protéines",
               prefixe : "g",
               icon : proteine,
               background : "rgba(74, 184, 255, 0.1)"
          }
     }
     else if(value[0] === 'calorieCount'){
          return  {
               value : value[1],
               title : "Calories",
               prefixe : "kCal",
               icon : calorie,
               background : "rgba(255, 0, 0, 0.1)"
          }
     }
     else if(value[0] === 'carbohydrateCount'){
          return  {
               value : value[1],
               title : "Glucides",
               prefixe : "g",
               icon : glucide,
               background : "rgba(249, 206, 35, 0.1)"
          }
     }
     else if(value[0] === 'lipidCount'){
          return  {
               value : value[1],
               title : "Lipides",
               prefixe : "g",
               icon : lipide,
               background : "rgba(253, 81, 129, 0.1)"
          }
     }
     else{
          return value = "incorrect"
     }
}

export function cardDataTransform(mainData){
     const cardData = Object.entries(mainData.data.keyData).map((cardData)=>{
          return transformValue(cardData)
     })

     return cardData
}