import { FC, useRef, useState } from 'react'
import { Container, Flex } from '@chakra-ui/react'
import { useAuth } from '../../contexts/AuthContext'




const Login: FC = () => {
    const emailRef: any = useRef()
    const passwordRef: any = useRef()
    const [error, setError] = useState<string | null>(null)
    const [loading, setLoading] = useState<boolean>(false)

    const { login } = useAuth()

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        try {
            setError(null)
            setLoading(true)
            await login(emailRef.current.value, passwordRef.current.value)

        } catch {
            setError('Failed to sign In')
        }
        setLoading(false)


    }


    return (
        <>
            <Container color="black">
                <Flex direction="column">

                    <div >
                        <h2 style={{ color: 'white' }}>Sign In</h2>

                        <form onSubmit={handleSubmit}>
                            <label htmlFor="email">
                                <input type="text" id="email" ref={emailRef} placeholder="Enter your email" />
                            </label>

                            <label htmlFor="password">
                                <input type="password" id="password" ref={passwordRef} placeholder="Enter your password" />
                            </label>



                            <input disabled={loading} type="submit" value='Login' />

                        </form>
                        <div style={{ color: 'red' }}>{error}</div>
                    </div>
                </Flex>
            </Container>

        </>
    )
}

export { Login }
