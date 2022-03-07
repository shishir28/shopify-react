import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Box, Grid, Text, Image, Button, Heading, Flex } from '@chakra-ui/react'
import { ShopContext } from '../context/shopContext'

const ProductPage = () => {

    const { handle } = useParams()
    const { fetchProductWithHandle, addItemToCheckout, product } = useContext(ShopContext)

    useEffect(() => {
        fetchProductWithHandle(handle)
    }, [fetchProductWithHandle, handle])


    if (!product.title) {
        return <div>Loading...</div>
    }

    return (
        <Box p="2rem">
            <Grid templateColumns={["repeat(1, 1fr)", "repeat(2, 1fr)"]} m="auto">
                <Flex justifyContent="center" justifyItems="center">
                    <Image src={product.images[0].src} />
                </Flex>
                <Flex px="2rem" display="flex" flexDirection="column" alignItems="center" justifyContent="center" >
                    <Heading pb="2rem" >{product.title}</Heading>
                    <Text pb="2rem" fontWeight="bold" >{product.variants[0].price}</Text>
                    <Text pb="2rem" color="gray.500">{product.description}</Text>
                    <Button onClick={() => addItemToCheckout(product.variants[0].id, 1)} _hover={{ opacity: '70%' }} w="10rem" color="white" backgroundColor="#FF38BD">Add to Cart</Button>
                </Flex>
            </Grid>
        </Box >
    )
}

export default ProductPage