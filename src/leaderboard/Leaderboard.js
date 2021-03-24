import React, { useEffect, useState } from "react";import Board from './Board'
import data from  '../Data/data.json'

const Leaderboard = props => {

    const [rows, setData] = useState(data);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const id = setInterval(() => {

         let newArray = data.map((item,i)=>{
             return {...item,score: (item.score +=
                Math.floor(Math.random() * data.length) < 1
                   ? Math.floor(Math.random() * 5000 + 2000)
                  : 0
                  )}
         })
         newArray = sortItems(newArray)
         newArray = ranking(newArray)



         setData(newArray)
         setLoading(false)  

        }, 1000);

        return () => {
          clearInterval(id);
        };

      },[]);

      const ranking=(newArray)=>{
        return data.map((item,i)=>{
            return {...item,ranking:setRank(item.userID,newArray)}
        })
      }

      const setRank = (userID, arr) => {
        let data = null;
        arr.forEach((item, index) => {
          if (item.userID === userID) {
            data = index + 1;
          }
        });
        return data;
      };

      const sortItems=(newArray)=>{
        return newArray.sort((itemOne, itemTwo)=>{
            var valueOne = itemOne.score;
            var valueTwo = itemTwo.score;
            if (valueOne < valueTwo) return 1;
            else if (valueOne > valueTwo) return -1;
            else return 0;
           })
        }


    return (
        <div className="box">
            {loading ? 
             <div class="loader"></div>
            :                rows.map((data,i)=>{
                    return (

                        <Board count={data.ranking} name={data.displayName} points={data.score} picture={data.picture}/>
                    )
                })
            }
        </div>
    )
}

Leaderboard.propTypes = {

}

export default Leaderboard
