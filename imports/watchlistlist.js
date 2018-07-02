import React from 'react'
import Watchlistitem from '../imports/Watchlistitem'

export default class Watchinglistlist extends React.Component {
    
    
    
    
    
    
    
    render() {
       return (  
           <div>
       <div> 
      {this.props.apiwatch.map(function(ele,i){
          return <Watchlistitem coinwatch = {ele} key = {i}/>
      })}
    </div>
    <div>
    </div>
   
</div>

           )}}
      
    