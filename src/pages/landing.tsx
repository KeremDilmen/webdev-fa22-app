import type { NextPage } from "next";
import NavBar from "../components/nav-bar";
import { Box, Image, Text } from "@chakra-ui/react";


const Landing: NextPage = () => {

  return (
    <>
      <NavBar />
      <div style={{height: "100%", position: "relative"}}>
        <img src="/background.png" style={{height: "100%", width: "100%"}}/>
        <text style={{
          fontSize: "60px",
          fontFamily: "Poppins",
          fontWeight: "700",
          color: "white",
          position: "absolute",
          top: 270,
          bottom: 0,
          left: 100,
          right: 0}}>
            Grand Cheese Race
        </text>
        <text style={{
          fontSize: "30px",
          fontFamily: "Poppins",
          fontWeight: "400",
          color: "white",
          position: "absolute",
          top: 375,
          bottom: 0,
          left: 100,
          right: 0}}>
            It's the race of the century! All victors return for
        </text>
        <text style={{
          fontSize: "30px",
          fontFamily: "Poppins",
          fontWeight: "400",
          color: "white",
          position: "absolute",
          top: 400,
          bottom: 0,
          left: 100,
          right: 0}}>
            one final race... who do you think will win? 
        </text>
      </div>
    </>
  );
};

/*
<Image src="/background.png" height="100%" width="100%"/>
        <Text font-size="80px"  position="absolute" right="50%" left="50%" bottom="15%">Hi</Text>
*/

export default Landing;
