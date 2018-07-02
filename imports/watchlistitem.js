import React from 'react'

export default class Watchlistitem extends React.Component {

    
    
render() {
       
       
       return ( 
          
           <div className = 'gridelewatch' >
           
           <span>{this.props.coinwatch.symbol} </span>
           <span>$ {parseFloat(Math.round(this.props.coinwatch.price  * 100) / 100).toFixed(2)} </span>
           
           <span><div>{this.props.coinwatch.hchange > 0 ? 
           <div style = {{color:'#1bdb1b'}}><h1>+{this.props.coinwatch.hchange}%</h1></div>
    :<div style = {{color:'red'}}><h1>-{this.props.coinwatch.hchange}%</h1></div>
    }
                </div></span>
           
           
           
           
           <span><div className = 'tendency'>
           {this.props.coinwatch.hchange > 0 ?
           <div><i class="fas fa-child" style = {{color:'#1bdb1b'}}></i></div>
         :<div><i class="fas fa-thumbs-down"style = {{color:'red'}}></i></div>
           }
         
                
               
               
               
               
            </div>
           </span>
           
           

           </div>
          
           )
   }
}