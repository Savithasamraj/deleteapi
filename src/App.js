import "./styles.css";
import {useEffect,useState} from "react"
export default function App() {
  const [post,setpost]=useState([])
useEffect(()=>{
fetch("https://jsonplaceholder.typicode.com/posts").then(data=>data.json()).then(data=>setpost(data))},[])
 const handledelete=(id)=>{
   const data=post.filter(ele=>ele.id!==id)
   setpost(data)
    console.log(data.length)
 }
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      
   
    <h2>Start editing to see some magic happen!</h2>
    
    {
      post.map((ele)=>{
        return <p> {ele.title} <button onClick={()=>handledelete(ele.id)}>delete</button></p>
      }
  )
    }
    
    </div>
  );
}
