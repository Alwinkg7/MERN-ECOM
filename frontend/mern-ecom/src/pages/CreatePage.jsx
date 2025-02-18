import { Box, Button, Container, Heading, VStack, Input, useToast } from '@chakra-ui/react';
import { useState } from 'react';
import { useProductStore } from '../store/product';

const CreatePage = () => {
    const [newProduct, setNewProduct] = useState({
        name: '',
        price: '',
        image: '',
    });

    const { createProduct } = useProductStore();
    const toast = useToast();

    const handleAddProduct = async () => {
        if (!newProduct.name || !newProduct.price || !newProduct.image) {
            toast({
                title: "Error",
                description: "Please fill all the fields",
                status: "error",
                isClosable: true,
            });
            return;
        }

        const { success, message } = await createProduct(newProduct);
        if (!success) {
            toast({
                title: "Error",
                description: message,
                status: "error",
                isClosable: true,
            });
        } else {
            toast({
                title: "Success",
                description: message,
                status: "success",
                isClosable: true,
            });
        }
        setNewProduct({ name: "", price: "", image: "" });
    };

    return (
        <Container maxW={"container.sm"}>
            <VStack
                spacing={4}
                align="stretch"
                padding={4}
                borderRadius={8}
                boxShadow="md">
                <Heading as={"h1"} size={"2xl"} textAlign={"center"} mb={8} color={"teal.300"}>Create a new product</Heading>
                <Box
                    w={"full"} bg={"teal.900"} boxShadow={"md"} rounded={"lg"} p={7} textAlign={"center"}>
                    <VStack spacing={6} align={"inherit"}>
                        <Input
                            placeholder='Product Name'
                            name='name'
                            value={newProduct.name}
                            onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
                        />
                        <Input
                            placeholder='Product Price'
                            name='price'
                            value={newProduct.price}
                            onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
                        />
                        <Input
                            placeholder='Image Url'
                            name='image'
                            value={newProduct.image}
                            onChange={(e) => setNewProduct({ ...newProduct, image: e.target.value })}
                        />
                        <Button colorScheme={"teal"} onClick={handleAddProduct} w={"full"}>Add Product</Button>
                    </VStack>
                </Box>
            </VStack>
        </Container>
    );
}

export default CreatePage;