import React from 'react';


export default function MyCourse({data}) {
    console.log(data)
  return (
    <>
    <div className="heading">
        <h4>Course Name</h4>
              <h4>Start Date</h4>
              <h4>Lesson Completed</h4>
              <h4>Duration</h4>
    </div>
    <div className='mycourse'>
         {data.map((el,i)=>{
            console.log(el)
            return<div style={{display:"flex", justifyContent:"space-around"}} key={i}>
                <div className='courseandimg'><div className='img'>
                    {/* <img src={el.src} alt="" /> */}
                </div><div style={{height:'90px'}}>{el.courseName}<p style={{ fontSize: '0.9vw', color:"rgb(175, 173, 173)"}}>{el.totalLesson} Lesson</p></div></div>

<div>{el.startDate}</div> 
                <div>{el.lessonCmplt}/{el.totalLesson} ({Math.round(el.lessonCmplt * 100 / el.totalLesson)}%)</div>  
                <div>{el.duration}</div>                 
            </div>
         })}
          
    </div>
      </>
  )
}
