import React,{useEffect, useState} from 'react'
import { AiOutlineArrowDown, AiOutlineArrowUp, AiOutlineShoppingCart } from "react-icons/ai";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import { SiBuymeacoffee } from "react-icons/si";
import { BsArrowUpRight } from "react-icons/bs";
import { IconContext } from "react-icons"


export default function OrderStat({ data }) {
    console.log("datad", data)
    const [color, setColor] = useState("");
    const [bgcolor, setBgcolor] = useState("");
    useEffect(()=>{
        if (data.type == "Revenue"){
            setBgcolor("orange")
        }
        else if (data.type == "Orders"){
            setBgcolor("rgb(37, 207, 167)")
        }
        else if (data.type == "Dine In") {
            setBgcolor("red")
        }
        else{
            setBgcolor("yellow")
        }
    },[])
   useEffect(()=>{
        if(data.gain){
            setColor("green")
        }
        else{
            setColor("red")
        }
   },[])
return (
    <div className='mainDiv'>
        <div className="statsCont">
            <div className="type">
                <div className='type-left'>{data.type}</div>
                <div className='profit' style={{display:"flex"}}> <div><IconContext.Provider value={{
                    color: color, className: "global-class-name"
                }}>{data.gain ?
                    <AiOutlineArrowUp /> : <AiOutlineArrowDown />}
                </IconContext.Provider></div>{data.gain ? <div className='gain'> 
                    {data.gain}</div> : <div className='loss'>{data.loss}</div>} 
                </div>
            </div>
            <div className="count">
                <div className='iconDiv' style={{backgroundColor:bgcolor}}>
                   
                    {data.type == "Revenue" ? <div 
                  className='one'> <BsArrowUpRight /></div> : data.type == "Orders" ? 
                   <div className='two'><AiOutlineShoppingCart /> </div> : data.type 
                    == "Dine In" ? <div className='three'><MdOutlineRestaurantMenu /> 
                            </div> : <div className='four'><SiBuymeacoffee /></div>}
                </div>
                <div style={{marginLeft:"4%" ,marginTop:"3%"}} >
                        {data.type == "Revenue" ? "$" : ""} 
                       {data.count}
                </div>
            </div>

        </div>
    </div>
)
}
