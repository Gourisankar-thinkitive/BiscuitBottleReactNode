import React, {useState} from 'react';
import './seller.css'
import {Link} from 'react-router-dom';

import axios from 'axios'


function Seller(props){

    const [biscuitCount, setBiscuitCount] = useState(0);
    const [bottleCount, setBottleCount] = useState(0);
    
    const [biscuitPrice, setbiscuitPrice] = useState(0);
    const [bottlePrice, setBottlePrice] = useState(0);

    const [biscuitSold, setbiscuitSold] = useState(0);
    const [bottleSold, setBottleSold] = useState(0);

    axios.get('http://localhost:9090/products').then(response=>{

        setBiscuitCount(response.data.biscuit);
        setBottleCount(response.data.bottle);
        setbiscuitPrice(response.data.biscuitPrice);
        setBottlePrice(response.data.bottlePrice);
        setbiscuitSold(response.data.biscuitSold)
        setBottleSold(response.data.bottleSold);
        // console.log(response.data.bottle +" "+response.data.bottlePrice);
        // console.log(response.data.biscuit +" "+response.data.biscuitPrice);
    });
    

    return(
        <div>

            <Link className="add-link" to="addproduct"><div className="add">+Add</div></Link>
            <Link className="add-link" to="modify"><div className="modify">Modify</div></Link>
        
            <div className="summaryTable">
                <table border="1">
                    <tr><th colSpan="4">Summary</th></tr>

                    <tr>
                        <td>Product</td>
                        <td>Availability</td>
                        <td>Price per item</td>
                        <td>Total Sold</td>
                    </tr>
                    <tr>
                        <td>Biscuit</td>
                        <td>{biscuitCount}</td>
                        <td>{biscuitPrice}</td>
                        <td>{biscuitSold}</td>
                    </tr>
                    <tr>
                        <td>Bottle</td>
                        <td>{bottleCount}</td>
                        <td>{bottlePrice}</td>
                        <td>{bottleSold}</td>
                    </tr>
                </table>
            </div>
        </div>
     )
}

export default Seller;