import { Box } from "@chakra-ui/react";
import type { NextPage } from "next";
import NavBar from "../components/nav-bar";
import Card from "../components/card";

const Voting: NextPage = () => {
  return (
    <>
    <NavBar />
    <Box display="flex" flexDirection="column" marginStart="40" marginTop="10">
    <Box display="flex" flexDirection="row">
    <Card image="/runner1.jpg" name="Speedy Sidrimo"/>
    <Card image="/runner4.jpeg" name="Muscular Macy"/>
    </Box>
    <Box display="flex" flexDirection="row" marginTop="10" marginBottom="10">
    <Card image="/runner3.jpeg" name="Agile Aspen"/>
    <Card image="/runner2.jpeg" name="Fast-roller Fardan"/>
    </Box>
    </Box>
    </>
  );
};

export default Voting;
