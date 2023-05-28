import React from "react";
import zz from "../images/favicon.png";
import { GiCheckMark } from "react-icons/gi";

function FeaturesBlocks() {
  function click(){
    if(window.ethereum){
      // Do something 
      alert("You don't have enough $Ravox to stake")
    }else{
      alert("You don't have enough $Ravox to stake!!")
    }

  }
  

  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          
        </div>
      </div>
    </section>
  );
}

export default FeaturesBlocks;
