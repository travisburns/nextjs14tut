"use client";

import Header from "./components/Header";



export default function Home() {
  const name ="Guillaume"

  return (


   <div>
    <Header name={"Guilaume"} age={35} isMan={true}/>
    Main page of my application
    <Header name={"Kevin"} age={24} isMan={true}/>
    </div>
  )
}
