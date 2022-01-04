import { Box, Text } from '@chakra-ui/react'
import { FC } from 'react'
import './footer.css'

const Footer: FC = () => {
    return (
        <>
            <Box position="absolute" bottom='0' left='0' w='100%'>


                <Text>Made With ♥️ By <a href="https://github.com/kerrybli">Dada Khalandar</a></Text>
            </Box >
        </>
    )
}

export { Footer }
