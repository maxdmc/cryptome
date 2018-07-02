import React from 'react'
import Holdingitem from '../imports/Holdingitem'

export default class Holdinglist extends React.Component {
    
    
    
    
    
    
    
   render() {
       return (  
           <div>
       <div>
        { this.props.arr.map(function(ele,i){ 
    return <Holdingitem coin = {ele} key = {i}/>
    })}
    </div>
    <div>
    
    
    
    
    
</div>
</div>
    
    

           )
 
    
   }
  
}