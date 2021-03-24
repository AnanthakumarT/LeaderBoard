import React from 'react'
import Points from './Points'

const Board = props => {

    const checkNo=(count)=>{
        if(count ===1){
            return "no-1 circle-no"
        }else if(count ===2){
            return "no-2 circle-no"
        } else if(count===3){
            return "no-3 circle-no"
        } else {
            return 'blue-background circle-no'
        }
    }

    const checkborder=(count)=>{
        if(count <= 9){
            return  ' border main-class'
        } else {
            return 'main-class'
        }
    }
    
    const styles ={
            animate:{
                top:`${50 * (props.count - 1)}px`,
            }
    }

    return (
        <div className="board" style={styles.animate} >
            <div className={checkborder(props.count)} >
                <div className={checkNo(props.count)} >{props.count}</div>
                <div className="profile-pic">{props.picture}</div>
                <div className="name">{props.name}</div>
                <div className="points"><Points points={props.points}/></div>
            </div>
        </div>
    )
}

export default Board
