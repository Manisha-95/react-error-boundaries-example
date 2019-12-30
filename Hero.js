import React from 'react';

const Hero = ({heroname}) => {
if(heroname=="Joker"){
  throw new Error("Not a hero!");
}
  return(<div>{heroname}</div>);
}

export default Hero;
