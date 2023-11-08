import React from "react"
import Navbar from "./component/Navbar";
import Hero from "./component/Hero";
import HeadlineCards from "./component/HeadlineCards";
import Food from "./component/Food";
import Categories from "./component/Categories";

function App() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <HeadlineCards/>
      <Food/> 
      <Categories/>
    </div>
  );
}

export default App;
