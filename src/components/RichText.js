import React from 'react'
import { Box, Heading, Text, Center } from "@chakra-ui/react"

const RichText = ({ heading, text }) => {
    return (
        <Box p="4rem">
            <Center display="flex" flexDir="column" textAlign="center">
                <Heading py={10}>{heading && heading}</Heading>
                {text ?
                    <Text pb={10}>
                        {text}
                    </Text> : null
                }
            </Center>
        </Box>
    )
}

export default RichText
