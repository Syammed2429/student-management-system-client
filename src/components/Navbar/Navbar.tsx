import React, { FC } from 'react'
import { Container, Flex } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const Navbar: FC = () => {
    return (
        <>
            <Container >
                <Flex
                    justify='center'
                    gap='5%'
                    color='#81E6D9'
                >
                    <Link to="">
                        <h3>Student</h3>
                    </Link>

                    <Link to="/admin">
                        <h3>Admin</h3>
                    </Link>


                </Flex>
            </Container>

        </>
    )
}

export { Navbar }
