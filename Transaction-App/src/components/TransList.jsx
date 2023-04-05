import React from 'react'
import {users} from "../data.json";
import TransMap from './TransMap';
import cssStyle from "./TransList.module.css"

export default function TransList() {
  return (
    <div>
          <div className={cssStyle.main}>
              <div className={cssStyle.heading}>
                  <p>Last Transactions</p>
                  <p style={{ color: "gray" }}>See All</p>
              </div>
              <div>
                  {
                      users.map((el,i) => {
                          return <TransMap key={i} data={el} />
                      })
                  }
              </div>
          </div>
    </div>
  )
}
