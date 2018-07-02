import React from 'react'
import Holdingmain from '../imports/Holdingmain'
import Watchlistmain from '../imports/Watchlistmain'



export default class App extends React.Component{
    state = { value : '' , buyprice : '' , gainloss : '', ROI : ''}
    
    
    
    getData = (data) => {
       
        var totalvalue= 0
        var totalinvest =0
        var gainloss = 0
        var ROI = 0
        
        data.forEach(function(ele,i){
          totalvalue   += (ele.price*ele.amount)  
          totalinvest += (ele.buyprice*ele.amount)
          ROI += (ele.ROI)
          debugger
       
        })
        this.setState({value : totalvalue})
        this.setState({buyprice : totalinvest})
        this.setState({gainloss : Math.round((( (totalvalue - totalinvest) / totalinvest ) * 100) * 100) / 100 })
        this.setState({ROI : ROI})
    }
    
    
    
    
      
       

    
render() {
var currentvalue = parseInt(this.state.value).toLocaleString('en')
var currentinvest = parseInt(this.state.buyprice).toLocaleString('en')
    return ( 
    
    <section>
    
    <div className ='boxportofolio'>
    <h2>Current portofolio</h2>
    </div>
    
    
    
    
    <div className = 'uppersquare' >
    <div>Current value<div style = {{color:'white'}}><h1>$ {currentvalue}</h1></div> </div>
    
    <div>Current investment<div style = {{color:'white'}}><h1>$ {currentinvest}</h1></div></div>
    
    <div>
    Gain / Loss
    
    { this.state.gainloss > 0 ? 
    <div style = {{color:'#1bdb1b'}}><h1>+{this.state.gainloss}%</h1></div>
    :<div style = {{color:'red'}}><h1>-{this.state.gainloss}%</h1></div>
    }
    
    </div>
    
    <div>My target</div>
    
    <div>Graph</div>
    <div>Logout</div>
    
    </div>
    
    
    <div className = 'grid'> 
    
       <div>
       <h1> <i class="fas fa-university"></i> Holdings</h1> 
       <div className = 'itemdisplay'>
       <h2>   </h2>
       
       
       <h2 className = 'gridusdbox'>Price <div className = 'boxusd' style = {{background :'white'}}>USD</div></h2>
       
       
       
       
       
       <h2>Amount</h2>
        <h2>Value</h2>
       <h2>ROI</h2>
       
      
       
       </div>
       <Holdingmain  getData = {this.getData}/>
      
       </div>
       
       
       
        <div>
        <h1><i class="fas fa-signal"></i>
        Profit / Loss </h1>
        </div>
        
        
        <div>
        <h1><i class="fas fa-binoculars"></i> Watchlist</h1> 
        <div className = 'gridwatchlist'>
        <h2>   </h2>
        <h2>Price</h2>
        <h2>24h Change</h2>
        <h2>Tendency</h2>
        </div>
        <Watchlistmain  />
        </div>
        
        <div>
        <h1><i class="fas fa-chart-pie"></i>
        Coin allocation</h1>
        </div>
        
       </div> 
       
       </section>
       
) } }
