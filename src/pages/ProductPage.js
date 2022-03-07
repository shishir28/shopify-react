import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Box, Grid, Text, Image, Button, Heading, Flex } from '@chakra-ui/react'
import { ShopContext } from '../context/shopContext'
import ImageWithText from '../components/ImageWithText';
import RichText from '../components/RichText';

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

            <RichText heading="The relaxation you’ve been waiting for." text="Our Bath bombs guarantee a fun, relaxing, and colorful night." />

            <ImageWithText
                button
                image="https://cdn.shopify.com/s/files/1/0472/5705/9496/files/premium-bath-bombs.jpg?v=1610066758"
                heading="Heading"
                text="I'm baby kale chips twee skateboard tattooed, DIY iPhone ugh mixtape tumeric unicorn narwhal. Iceland shoreditch authentic, sartorial vegan twee flannel banh mi bushwick retro farm-to-table single-origin coffee. " />
            <ImageWithText
                reverse
                button
                image="https://cdn.shopify.com/s/files/1/0472/5705/9496/files/bath-bomb-and-candle.jpg?v=1610066758"
                heading="Second Heading"
                text="I'm baby kale chips twee skateboard tattooed, DIY iPhone ugh mixtape tumeric unicorn narwhal. Iceland shoreditch authentic, sartorial vegan twee flannel banh mi bushwick retro farm-to-table single-origin coffee. " />
        </Box >
    )
}

export default ProductPage