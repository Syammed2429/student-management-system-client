import { FC, useRef } from 'react'
import { Container, Flex } from '@chakra-ui/react'
const SignUp: FC = () => {
    const emailRef: any = useRef()
    const passwordRef: any = useRef()
    const confirmPasswordRef: any = useRef()


    return (
        <>
            <Container color="black">
                <Flex direction="column">

                    <div >

                        <form>
                            <label htmlFor="email">
                                <input type="email" id="email" ref={emailRef} placeholder="Enter your email" />
                            </label>

                            <label htmlFor="password">
                                <input type="password" id="password" ref={passwordRef} placeholder="Enter your password" />
                            </label>

                            <label htmlFor="confirm-password">
                                <input type="password" id="confirm-password" ref={confirmPasswordRef} placeholder="Enter your confirm-password" />
                            </label>

                            <input type="submit" value='Register' />

                        </form>

                    </div>
                </Flex>
            </Container>

        </>
    )
}

export { SignUp }
