import React, { FC } from 'react'
import { Container, Flex } from '@chakra-ui/react'


const Navbar: FC = () => {
    return (
        <>
            <Container >
                <Flex
                    justify='center'
                    gap='5%'
                >

                    <h3>Admin</h3>
                    <h3>Student</h3>
                </Flex>
            </Container>

        </>
    )
}

export { Navbar }
