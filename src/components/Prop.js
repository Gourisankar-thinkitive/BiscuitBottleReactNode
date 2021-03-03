import React from 'react';
import './props.css'
import {Link} from 'react-router-dom';


function Prop(props){

    return(
        <div>

       
       <Link id="seller-link" to="seller"><div className="seller">Seller</div></Link> 
       <Link id="buyer-link" to="buyer"><div className="buyer">Buyer</div></Link>
        
        </div>
     )
}

export default Prop;