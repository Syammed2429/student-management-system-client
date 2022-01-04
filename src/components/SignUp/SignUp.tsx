import { FC, useRef, useState } from 'react'
import { Container, Flex } from '@chakra-ui/react'
import { useAuth } from '../../contexts/AuthContext'



const SignUp: FC = () => {
    const emailRef: any = useRef()
    const passwordRef: any = useRef()
    const confirmPasswordRef: any = useRef()
    const [error, setError] = useState<string | null>(null)
    const [loading, setLoading] = useState<boolean>(false)

    const { signUp, currentUser } = useAuth()

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if (passwordRef.current.value !== confirmPasswordRef.current.value) return setError('Password Does not match')
        try {
            setError(null)
            setLoading(true)
            await signUp(emailRef.current.value, passwordRef.current.value)

        } catch (err) {
            setError('Failed to sign up')
        }
        setLoading(false)


    }


    return (
        <>
            <Container color="black">
                <Flex direction="column">

                    <div >
                        <h2>Sign Up</h2>
                        {currentUser && currentUser.email}

                        <form onSubmit={handleSubmit}>
                            <label htmlFor="email">
                                <input type="text" id="email" ref={emailRef} placeholder="Enter your email" />
                            </label>

                            <label htmlFor="password">
                                <input type="password" id="password" ref={passwordRef} placeholder="Enter your password" />
                            </label>

                            <label htmlFor="confirm-password">
                                <input type="password" id="confirm-password" ref={confirmPasswordRef} placeholder="Enter your confirm-password" />
                            </label>

                            <input disabled={loading} type="submit" value='Register' />

                        </form>
                        <div style={{ color: 'red' }}>{error}</div>
                    </div>
                </Flex>
            </Container>

        </>
    )
}

export { SignUp }
