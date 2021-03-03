import React,{useState}from 'react';
import axios from 'axios'


function Modify(props){

    const [biscuitCount, setBiscuitCount] = useState(0);
    var [bottleCount, setBottleCount] = useState(0);
    const [msg, setMsg] = useState('');

    axios.get('http://localhost:9090/products').then(response=>{

        setBiscuitCount(response.data.bottle);
        setBottleCount(response.data.biscuit)
        // console.log(response.data.bottle +" "+response.data.biscuit );
    });

    return(
        <div>
                <div>
                   

                    
                    Biscuits: <input onChange={(e)=>{ setBiscuitCount(e.target.value)}} name="biscuits" type="text" required placeholder={biscuitCount}/> 
                </div>
                <div>
                    Bottles: <input onChange={(e)=>{setBottleCount(e.target.value)}} name="bottle" type="text" required  placeholder={bottleCount}/>
                </div>

                <div>
                    <button onClick={()=>
                    {
                            
                                const supplies = {
                                    bottle:bottleCount,
                                    biscuit: biscuitCount
                                } 
                                console.log(biscuitCount+" " + bottleCount);
                                
                                axios.put('http://localhost:9090/products',supplies).then(()=>{
                                    setMsg(bottleCount+biscuitCount+"Updated succesfully..")
                            }).catch(()=>{setMsg("Supply adding Failed")});
                            
                    }}
                    >Update</button>
                </div>
                <span>{msg}</span>
        
        </div>
     )
}

export default Modify;