import React from 'react'

export default class Holdingitem extends React.Component {
    

   render() {
       var price = (parseFloat(Math.round(this.props.coin.price  * 100) / 100).toFixed(2))
       var value = (parseInt(this.props.coin.price*this.props.coin.amount).toLocaleString('en'))
       var roi = (((this.props.coin.price*this.props.coin.amount)-(this.props.coin.buyprice*this.props.coin.amount)) / (this.props.coin.buyprice*this.props.coin.amount) )*100
    var roi1 = (this.props.coin.price*this.props.coin.amount)-(this.props.coin.buyprice*this.props.coin.amount)
       
       return ( 
          
           <div className = 'gridholdings' >
           
           <span>{this.props.coin.symbol} </span>
           <span>$ {price}</span>
           <span>{parseFloat(Math.round(this.props.coin.amount * 100) / 100).toFixed(2)}</span>
           <span>$ {value}</span>
           <span><div className = 'Roiholdings'>
           {roi > 0 ? 
           <div style = {{color:'#1bdb1b'}}><h1>+{roi}%</h1></div>
    :<div style = {{color:'red'}}><h1>-{roi}%</h1></div>
    }
    {roi1 > 0 ? 
           <div style = {{color:'#1bdb1b'}}><h1>(${(parseInt(roi1).toLocaleString('en'))})</h1></div>
    :<div style = {{color:'red'}}><h1>(${parseInt(Math.abs(roi1)).toLocaleString('en')})</h1></div>
    }
               
            </div>
           </span>
           

           
           </div>
          
           )
   }
}
