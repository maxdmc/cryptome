import React from 'react'
import Holdinglist from '../imports/Holdinglist'

export default class Holdingmain extends React.Component {
    
    
    state  ={
        arr:[{symbol:'Bitcoin (BTC)', price: 6500},{symbol:'Ethereum (ETH)', price: 450},{symbol:'Bitcoin Cash (BCH)', price: 750},{symbol:'Ripple (XRP)', price: 0.40}],
        arr2:[{symbol:'Bitcoin (BTC)', amount : 5, buyprice : 5000 , ROI : 0},{symbol:'Ethereum (ETH)', amount : 10, buyprice : 200, ROI : 0},{symbol:'Bitcoin Cash (BCH)', amount : 4, buyprice : 1500, ROI : 0}, {symbol:'Ripple (XRP)', amount : 4400, buyprice : 0.20, ROI : 0}],
        arr3:[]
    }




    componentDidMount(){
       var  { arr, arr2, arr3 } = this.state;
           arr.map((ele,i) => {
            ele.amount = arr2[arr2.findIndex((a)=>a.symbol == ele.symbol)].amount
            ele.buyprice = arr2[arr2.findIndex((a)=>a.symbol == ele.symbol)].buyprice
            ele.ROI = arr2[arr2.findIndex((a)=>a.symbol == ele.symbol)].ROI
            
            arr3.push(ele)
            })
            this.setState({arr3},()=>{
                        this.props.getData(this.state.arr3)
            })
                    
        
    }
        
    
    
    
   render() {
       
       
       return  (
           <div>
           <Holdinglist
           arr = {this.state.arr}
           />
           
           </div>
           
           )
       
       
       
       
       
       
       
   }
    
}