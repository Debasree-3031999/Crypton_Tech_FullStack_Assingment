import React from 'react'
import { stats } from "../data.json"
import OrderStat from './OrderStat'

export default function WidgetOrderStats() {
    // console.log(stats)    
    return (
        <div id='cont'>
            {
                stats.map((el, i) => {
                    return <OrderStat key={i} data={el} />
                })
            }
        </div>
    )
}
