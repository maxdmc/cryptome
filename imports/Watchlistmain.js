import React from 'react'
import Watchlistlist from '../imports/Watchlistlist'

export default class Watchlistmain extends React.Component {
    
    state ={apiwatch: [{symbol:'Bitcoin', price : 5900, hchange : 5},{symbol:'Neo', price : 25, hchange : -5 }]
    }
    
    
   render() {
       
       
       return  (
           <div>
           <Watchlistlist
           apiwatch = {this.state.apiwatch}
           />
           
           </div>
           
           )
         }
    
 
    
    
    
    
    
    
    
    
}