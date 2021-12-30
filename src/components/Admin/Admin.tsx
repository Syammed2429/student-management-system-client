import React, { FC } from 'react'
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
    Button
} from '@chakra-ui/react'
import { FiChevronDown } from 'react-icons/fi'
import { Link } from 'react-router-dom'


const Admin: FC = () => {
    return (
        <>
            <h1>Admin</h1>
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
        </>
    )
}

export { Admin }
