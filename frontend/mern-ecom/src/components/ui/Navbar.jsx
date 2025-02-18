import { Container, Flex, HStack, Button, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { LinearGradient } from 'react-text-gradients'
// import { colorMode } from '@chakra-ui/color-mode';
// import { IoMoon } from 'react-icons/io5';
// import { IoSun } from 'react-icons/lu';
import { FaShoppingCart } from 'react-icons/fa';

const Navbar = () => {
  // const {colorMode, toggleColorMode} = useColorMode();
  return (
    
    <Container maxW = {"1140PX"} px={4} >
        
      <Flex
        h = {"60px"}
        alignItems = {"center"}
        justifyContent = {"space-between"}
        flexDir={{
            base : "column",
            sm : "row"
        }}>
        <LinearGradient gradient={['to left', '#367588 ,#008080']}>
          <Link to="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
            <Text fontSize={25} fontWeight={'bold'} color="inherit">
              MERN ECOM
            </Text>
            <FaShoppingCart style={{ marginLeft: '8px' }} color='teal' size={35}/> {/* Add cart icon with teal color */}
          </Link>
        </LinearGradient>
        
        <HStack spacing={4} >
          <Link to = "/">
            <Button colorPalette={"teal"} variant={'solid'}>Home</Button>
          </Link>
          <Link to = "/create">
            <Button colorPalette={"teal"} variant={'solid'}>Create</Button>
          </Link>
          {/* <Button onClick={toggleColorMode}>
            {colorMode === "light" ? <IoMoon /> : <IoSun  />}
            </Button> */}
        </HStack>
       
        

      </Flex>
      
    </Container>

    
  )
}




export default Navbar