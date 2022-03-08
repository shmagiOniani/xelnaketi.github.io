import React from "react";
import { MainSlider, Product, OwlSlider} from "./" 

function Home() {
  return (
    <div className="home-wrapper">
    {/* <MainSlider /> */}
      <Product/>
      <OwlSlider/>
    </div>
 
  );
}

export default Home;
