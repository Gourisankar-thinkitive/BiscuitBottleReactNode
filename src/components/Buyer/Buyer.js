import React, {useState} from 'react';
import './buyer.css'
import axios from 'axios'

function Buyer(props){

    const [biscuitSelected, setBiscuitSelected] = useState(0);
    const [bottleSelected, setBottleSelected] = useState(0);

    const [bisAvailable, setBisAvailable] = useState(0);
    const [botAvailable, setBotAvailable] = useState(0);

    const [bisPrice, setBisPrice] = useState(0);
    const [botPrice, setBotPrice] = useState(0);

    const [msg, setMsg] = useState('');
    const [bill, setBill] = useState('');


    const red = {
        color:'red'
    }

    const green = {
        color: 'green'
    }

    const table = {
        paddingTop:'50px'
    }

    const [msgStyle, setMsgStyle] = useState(red);



    axios.get('http://localhost:9090/products').then(response=>{

        setBisAvailable(response.data.bottle);
        setBotAvailable(response.data.biscuit);
        setBisPrice(response.data.biscuitPrice);
        setBotPrice(response.data.bottlePrice);

        // console.log(response.data.bottle +" "+response.data.bottlePrice);
        // console.log(response.data.biscuit +" "+response.data.biscuitPrice);
    });

    return(
        <div>
            <div id="item-table">

            
            <table>
                <tr>
                    <td>
                        <img alt="Biscuit" width="50px" height="50px" src="http://www.goodsdelivery.co.in/wp-content/uploads/2020/06/OreoVanilaCadbery50g.jpg"></img>
                    </td>
                    <td>Biscuit</td>
                    <td>₹{bisPrice}</td>
                    <td><button onClick={()=>{
                        setBiscuitSelected(biscuitSelected+1);
                    }}>+</button></td>
                    <td>{biscuitSelected} item selected</td>
                </tr>
                <tr>
                    <td>
                        <img alt="Bottle" width="50px" height="50px" src="https://www.bigbasket.com/media/uploads/p/xxl/412087_1-bisleri-mineral-water.jpg"></img>
                    </td>
                    <td>Bottle</td>
                    <td>₹{botPrice}</td>
                    <td><button onClick={()=>{
                        setBottleSelected(bottleSelected+1);
                    }}>+</button></td>
                    <td>{bottleSelected} item selected</td>
                </tr>

                <tr>
                    <td style={table}>Total</td>
                    <td style={table} colSpan="3">{biscuitSelected*bisPrice + bottleSelected*botPrice}Rs. </td>
                </tr>
                <tr>
                    <td  style={table} colSpan="5">
                        <button className="check-out-button" onClick={
                            ()=>{
                                if(bottleSelected>botAvailable)
                                {
                                    setMsgStyle(red);
                                    setMsg('Only '+botAvailable+ ' Bottles Available');
                                    setBill('');
                                    
                                }
                                else if(biscuitSelected>bisAvailable)
                                {
                                    setMsgStyle(red);
                                    setMsg('Only ' + bisAvailable+ 'Biscuits Available');
                                    setBill('');
                                    
                                }
                                else if(bottleSelected === 0 && biscuitSelected === 0)
                                {
                                    setMsgStyle(red);
                                    setMsg('Please select any product to purchase.');
                                    setBill('');
                                    
                                }
                                else
                                {
                                    var purchaseItem={
                                        bottle:bottleSelected,
                                        biscuit:biscuitSelected
                                    }
                                    axios.put('http://localhost:9090/purchase',purchaseItem).then(()=>{
                                    
                                    setMsgStyle(green);
                                    setMsg('Thank You...');

                                    setBill('you bought '+bottleSelected+' Bottle and '
                                    + biscuitSelected + ' Biscuit for Rs. '+(botPrice*bottleSelected+bisPrice*biscuitSelected))

                                    setBottleSelected(0);
                                    setBiscuitSelected(0);
        
                                    })
                                }
                            }
                        }>Check out</button>
                    </td>
                </tr>
            </table>
            </div>

            <div style={msgStyle}>
                
                {msg}
            </div>
            <div>
                <h4>
                    {bill}
                </h4>
            </div>
        </div>
     )
}

export default Buyer;