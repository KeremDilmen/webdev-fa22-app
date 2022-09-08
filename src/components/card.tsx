import { Box, Image, Text, VStack, HStack, Spacer } from "@chakra-ui/react";
import { ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons';
import {useState} from "react";

interface CardProps {
    image: string;
    name: string;
  }

const buttonStyle = { background: '#EFDCB6', borderRadius: 30, marginRight: 10, width: "60px", height: "40px"};

const Card = (props: CardProps) => {
    const [score, setScore] = useState(0);

    return (
        <>
            <Box height="50%" width="50%">
                <Image src={props.image} height="300px" width="500px"/> 
                <Box bg="#F1EDDF"  height="10%" width="500px">
                    <HStack>
                    <VStack 
                        spacing="1%" 
                        paddingLeft="5" 
                        alignItems="start" 
                        fontStyle="Poppins" 
                        fontSize="20px"
                    >
                        <Text fontWeight="700">{props.name}</Text>
                        <Text fontWeight="400">Score: {score}</Text>
                    </VStack>
                    <Spacer />
                    <div style={{verticalAlign: "middle"}}>
                    <button onClick={() => setScore(score + 1)} style={buttonStyle}><ChevronUpIcon w={10} h={10}/></button>
                    <button onClick={() => score > 0 ? setScore(score - 1) : null} style={buttonStyle}><ChevronDownIcon w={10} h={10}/></button>
                    </div>
                    </HStack>
                </Box>
            </Box>
        </>
    );
};





export default Card;