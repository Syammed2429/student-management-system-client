import React, { FC, useState } from 'react'
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Flex,
    // MenuItemOption,
    // MenuGroup,
    // MenuOptionGroup,
    // MenuDivider,
    Button,
    Text
} from '@chakra-ui/react'
import { FiChevronDown } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import { useAuth } from '../../contexts/AuthContext'
import { useNavigate, Navigate } from 'react-router-dom'



const Admin: FC = () => {
    const { currentUser, logout } = useAuth()
    const [error, setError] = useState<string | null>(null)
    const navigate = useNavigate()


    const handleLogOut = async () => {
        setError(null)
        try {
            await logout()
            navigate('/login')

        } catch {
            setError('Failed to log out')
        }
    }

    return !currentUser ? <Navigate to="/login" /> : (
        <>
            <h1>Admin</h1>
            {/* <Text>Welcome {currentUser}</Text> */}
            <Text color="red">{error}</Text>
            <Flex
                justify='end'
                mx='5%'

            >

                <Menu

                >
                    {({ isOpen }) => (
                        <>
                            <MenuButton
                                colorScheme='blue'

                                isActive={isOpen} as={Button} rightIcon={<FiChevronDown />}>
                                {isOpen ? 'Close' : 'Admin Menu'}
                            </MenuButton>
                            <MenuList
                                bg='primary'


                            >
                                <Link to="/admin/new-student" ><MenuItem>Add New Student</MenuItem></Link>
                                <MenuItem onClick={() => alert('Kagebunshin')}>Add Contests</MenuItem>
                            </MenuList>
                        </>
                    )}
                </Menu>
            </Flex>
            <Button colorScheme='primary' onClick={handleLogOut}>Log Out</Button>
        </>
    )
}

export { Admin }
