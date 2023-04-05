import React from 'react'
import cssStyle from "./TransMap.module.css"

export default function TransMap({data}) {
  return (
      <div className={cssStyle.cont}>
          <div className={cssStyle.leftCont}>
              <div>
                  <img src={data.image} alt="" />
              </div>
              <div>
                  <div>
                      <h2>{data.name}</h2>
                  </div>
                  <div className={cssStyle.timedetails}>
                      <p>{data.date}</p>
                      <li>{data.time}</li>
                  </div>
              </div>
          </div>
          <div className={cssStyle.rightCont}>
              <div>
                  <h2 style={{ color: data.transaction == "Received" ? "green" : "red" }}>{data.transaction == "Received" ? "+" : "-"}{data.money}</h2>
              </div>
              <div>
                  <p>{data.transaction}</p>
              </div>

          </div>
      </div>
  )
}
