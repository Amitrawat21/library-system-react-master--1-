import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useLocation , useParams } from 'react-router-dom';
function TeacherDash() {
  const {id} = useParams()
 const [teacherdata , setteacherData] = useState([])
 const [val ,setVal] = useState(false);


  const {state} = useLocation();
  const {name} = state || {};
  const getBooks =  async () =>{
     const finaldata = await axios.get(`https://library-system-backend-master.vercel.app/teacher/info/${id}`)
     setteacherData(finaldata.data.studentdata)
  }


  const teachergrant  = async (rollno)=>{

    console.log(rollno)
    const maindata = await axios.get(`https://library-system-backend-master.vercel.app/teacher/grant/${rollno}`)
    alert(maindata.data);
    console.log(maindata , "this is maindata")
    setVal(val=>!val);
 
  

  }

  useEffect(()=>{
    getBooks();
  },[val])


  return (
    <div className="search-list-container">
        <h1>{name}</h1>
    
       <div className="table">
      <div className="header">
        <div className="cell">Student Name</div>
        <div className="cell">Student Rollno</div>
        <div className='cell'>Borrow a Book</div>
        <div className='cell'>permission request</div>
        <div className='cell'>accept button</div>
      </div>
      
    
        { teacherdata.map(item => (
          <div className='row' key={item._id}>
            <div className='cell'>{item.name}</div>
            <div className="cell">{item.rollNo}</div>
            <div className="cell">{item.borrowedBooks.length === 0 ? "no" : "yes"}</div>
            <div className="cell">{item.permission ? "yes" : "no"}</div>
            <button className={item.permission ? "cell-button" : "no-button"}  onClick={()=>teachergrant(item.rollNo)}>accept</button>
            
      
        
          </div>
        ))}

</div>
      
    </div>
  );
}

export default TeacherDash;