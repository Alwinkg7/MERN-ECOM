import { useProductStore } from '@/store/product';
import { Container, SimpleGrid, Text, VStack, Box } from '@chakra-ui/react';
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '@/components/ui/ProductCard';



const HomePage = () => {
  const { fetchProducts, products } = useProductStore();

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  console.log("Products in HomePage:", products); // Debugging log

  return (
    <Container maxW={'container.xl'} py={12}>
      <VStack spacing={8}>
        <Text
          fontSize={'4xl'}
          fontWeight={'bold'}
          textAlign={'center'}
          color={'teal.300'}>
          Welcome to MERN ECOM 🛒       
        </Text>
        <Text
          fontSize={'2xl'}
          textAlign={'center'}
          color={'gray.500'}>
          A simple e-commerce app built with MERN stack
        </Text>
        <Text
          fontSize={'2xl'}
          textAlign={'center'}
          color={'teal.500'}
          mt={4}
          fontWeight={'bold'}
          fontStyle={'italic'}>
          Our Products
        </Text>

          <SimpleGrid
					columns={{
						base: 1,
						md: 2,
						lg: 3,
					}}
					spacing={10}
					w={"full"}
				>
					{products.map((product) => (
						<ProductCard key={product._id} product={product} />
					))}
				</SimpleGrid>
        {products.length === 0 && (
          <Box textAlign={'center'}>
            <Text fontSize={'xl'} color={'gray.500'}>
              No products available yet 😢
            </Text>
            <Link to="/create" style={{ color: 'teal', fontWeight: 'bold' }}>
              <Text _hover={{ textDecoration: "underline" }}>Create a new product</Text>
            </Link>
          </Box>
        )}
      </VStack>
    </Container>
  );
}

export default HomePage;