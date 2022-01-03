import { Menu, MenuButton, Button, MenuList, MenuItem, Flex } from '@chakra-ui/react'
import { FC, useState } from 'react'
import { FiChevronDown } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../contexts/AuthContext'
import './adminmenu.css'



const AdminMenu: FC = () => {
    const [error, setError] = useState<string | null>(null)
    const navigate = useNavigate()
    const { logout } = useAuth()


    const handleLogOut = async () => {
        setError(null)
        try {
            await logout()
            navigate('/login')

        } catch {
            setError('Failed to log out')
        }
    }

    return (
        <>
            {error}
            <Flex justify='end' mr='8%' z-index='10'>

                <Menu>
                    {({ isOpen }) => (
                        <>

                            <MenuButton
                                colorScheme='blue'


                                isActive={isOpen} as={Button} rightIcon={<FiChevronDown />}>
                                {isOpen ? 'Close' : 'Admin Menu'}
                            </MenuButton>
                            <MenuList
                                bg='#4A5568'


                            >
                                {/*  */}
                                <Link to="/admin/new-student" ><MenuItem
                                    className="hover"

                                >Add New Student</MenuItem></Link>
                                <Link to="/admin/add-contest" ><MenuItem
                                    className="hover"

                                >Add Contests</MenuItem>
                                </Link>
                                <MenuItem
                                    className="hover"
                                    onClick={handleLogOut}>Log Out</MenuItem>
                            </MenuList>
                        </>
                    )}
                </Menu>
            </Flex>
        </>
    )
}

export { AdminMenu }
