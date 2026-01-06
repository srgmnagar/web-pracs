// import './App.css';
// import Greetings from './Components/Greetings';
// import Increament from './Components/Increament';
// // import MovieMap from './Components/MovieMap';
// import { useState } from 'react';
// import { useEffect } from 'react';

// function App() {

//   const details=[
//     {name:"Alice",marks:66,roll_number:101}
//     ,{name:"Bob",marks:72,roll_number:102}
//     ,{name:"Charlie",marks:85,roll_number:103}
//   ]


//   const movies = [
//     { title: "Inception", year: 2010, rating: 8.8 },
//     { title: "Interstellar", year: 2014, rating: 8.6 },
//     { title: "The Dark Knight", year: 2008, rating: 9.0 },
//   ];


//   let [count,setCount]=useState(0);
//   const increament_func=()=>{
//     setCount(count+1);
//   }



//     //age
//     let [age,setAge]=useState(0);
//     let [msg,setMsg]=useState("");

// useEffect(() => {
//   if(age<18){
//     setMsg("You are a minor");
//   }
//   else{
//     setMsg("You are an adult");
//   }
  
// }, [age]);


//   return (
//     <div className="App">
//      {/* {details.map((detail)=>{
//       return <Greetings name={detail.name} marks={detail.marks} roll_number={detail.roll_number}/>;
//      })} */}
//      {/* <MovieMap movies={movies}/> */}
//       {/* <Increament count={count} increament={increament_func}/> */}


//       <input type="number" value={age} onChange={(e)=>setAge(e.target.value)}></input>
//       <h2>{msg}</h2>

//     </div>
//   );
// }
// export default App;
import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Navbar from './Components/Navbar';


function App() {
  const [count, setCount] = useState(0)
  console.log("App Rendered")
  return (
    <>
    <div>ee</div>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/contact' element={<Contact/>}/>
     </Routes>
    </>
  )
}

export default App
