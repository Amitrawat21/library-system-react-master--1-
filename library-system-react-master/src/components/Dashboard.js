import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
function Dashboard() {
  const [query, setQuery] = useState('');

  const [items,setItems] = useState([]);
  const {state } = useLocation();
  const {name , rollNo} = state || {};
  const getBooks = () =>{
        axios.get('https://library-system-backend-master.vercel.app/book/getall').then(val=>setItems(val.data));
  }

  const handleBorrow = async(title) => {
  let data = await axios.put("https://library-system-backend-master.vercel.app/student/ask",{title:title , rollNo : rollNo })
  console.log(data.data.status)
  if(data.data.status === 201){
    alert('wait for the teacher to grant access for this book')
  }
  else{
    alert(data.data);
  }

  }

  useEffect(()=>{
    getBooks();
  },[])

  const filteredItems = items.filter(item =>
    item.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="search-list-container">
        <h1>{name}</h1>
      <input
        type="text"
        value={query}
        onChange={e => setQuery(e.target.value)}
        placeholder="Search Books..."
        className="search-input"
      />
       <div className="table">
      <div className="header">
        <div className="cell">Title</div>
        <div className="cell">Author</div>
        <div className="cell">Quantity</div>
        <div className='cell'>Borrow a Book</div>
      </div>
      
    
        {items && filteredItems.map(item => (
          <div className='row' key={item._id}>
            <div className='cell'>{item.title}</div>
            <div className="cell">{item.author}</div>
          <div className="cell">{item.available}</div> 
          <button className="cell-button" onClick={()=>handleBorrow(item.title)}>Borrow</button>
          </div>
        ))}

</div>
      
    </div>
  );
}

export default Dashboard;