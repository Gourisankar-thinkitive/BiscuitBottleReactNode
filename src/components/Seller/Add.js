import React, {useState} from 'react';
import './seller.css'
// import {Link} from 'react-router-dom';
import axios from 'axios';


function Add(props){

    const [biscuitCount, setBiscuitCount] = useState(0);
    const [bottleCount, setBottleCount] = useState(0);

    const [msg, setMsg] = useState('');

    const red = {
        color:'red'
    }

    const green = {
        color: 'green'
    }

    const [msgStyle, setMsgStyle] = useState(red);

    return(
        <div>
        <div className="addProduct">


            <table>
                <tr>
                    <td><img alt="Biscuit" width="50px" height="50px" src="http://www.goodsdelivery.co.in/wp-content/uploads/2020/06/OreoVanilaCadbery50g.jpg"></img></td>
                    <td>Biscuit</td>
                    <td>{biscuitCount}</td>
                    <td><button onClick={()=> setBiscuitCount(biscuitCount+1)}>+</button></td>
                </tr>

                <tr>
                    <td><img alt="Bottle" width="50px" height="50px" src="https://www.bigbasket.com/media/uploads/p/xxl/412087_1-bisleri-mineral-water.jpg"></img></td>
                    <td>Bottle</td>
                    <td>{bottleCount}</td>
                    <td><button onClick={()=> setBottleCount(bottleCount+1)}>+</button></td>
                </tr>
                <tr>
                    <td colSpan="4">
                    <button onClick={()=>{
                        if(biscuitCount!==0 || bottleCount!==0)
                        {
                            const supplies = {
                                bottle:bottleCount,
                                biscuit: biscuitCount
                            }
                            axios.post('http://localhost:9090/products',supplies).then(()=>{
                                setMsgStyle(green);
                                setMsg("Supply added succesfully..")
                        }).catch(()=>{setMsg("Supply adding Failed"); setMsgStyle(red);});
                        }
                        else{
                            setMsgStyle(red);
                            setMsg("Please add Biscuits or Bottles..")
                        }
                    }}>Submit
                    </button>
                    </td>
                </tr>

            </table>

            
        
        </div>
        <span style={msgStyle}>{msg}</span>
        </div>
     )
}

export default Add;