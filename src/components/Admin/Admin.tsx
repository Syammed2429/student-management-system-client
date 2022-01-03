import React, { FC, useEffect, useState } from 'react'
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
    Text,
    Container,
    Table,
    Thead,
    Th,
    Tr,
    Tbody,
    Td
} from '@chakra-ui/react'
import { FiChevronDown } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import { useAuth } from '../../contexts/AuthContext'
import { useNavigate, Navigate } from 'react-router-dom'
import { StudentsData } from './StudentsData'




//Main FFunction Starts
const Admin: FC = () => {
    const { currentUser, logout } = useAuth()
    const [error, setError] = useState<string | null>(null)
    const [studentsData, setStudentsData] = useState<any>([])

    // const [keys, setKeys] = useState<any>([]])
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


    useEffect(() => {
        const getStudents = async () => {
            const response = await fetch(`https://student-management-production.up.railway.app/student`);
            const result = await response.json();
            setStudentsData(result)

        }
        getStudents()
    }, [studentsData])






    return !currentUser ? <Navigate to="/login" /> : (
        <>
            <h1>Admin</h1>
            <Text>Welcome {currentUser.email}</Text>
            <Text color="red">{error}</Text>
            <Flex
                justify='end'
                mx='5%'

            >

                <Menu>
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
                                <MenuItem onClick={handleLogOut}>Log Out</MenuItem>
                            </MenuList>
                        </>
                    )}
                </Menu>
            </Flex>
            <StudentsData studentsData={studentsData} />


        </>
    )
}

export { Admin }
