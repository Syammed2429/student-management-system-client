import { Container, Table, Thead, Tr, Th, Tbody, Td, Button } from '@chakra-ui/react'
import React, { useState, FC, useEffect, Props } from 'react'
import axios from 'axios'


const StudentsData = ({ studentsData }: any) => {

    const handleDelete = async (id: string) => {
        console.log('id:', id)
        const data = await axios.delete(`https://student-management-production.up.railway.app/student/${id}`)
        console.log('data:', data)
    }



    return (
        <>
            <Container>
                <Table>

                    <Thead>
                        <Tr>

                            <Th>Name</Th>
                            <Th>City</Th>
                            <Th>Age</Th>
                            <Th>Education</Th>
                            <Th>Gender</Th>
                            <Th>Contact</Th>
                        </Tr>
                    </Thead>


                    {studentsData.map((e: any) => (

                        <Tbody key={e._id}>
                            <Tr>

                                {/* {console.log(Object.keys(e))} */}
                                <Td>{e.name} </Td>
                                <Td>{e.city} </Td>
                                <Td>{e.age} </Td>
                                <Td>{e.education} </Td>
                                <Td>{e.gender} </Td>
                                <Td>{e.contact} </Td>
                                <Button onClick={() => {
                                    handleDelete(e._id)
                                }} colorScheme='red'>Delete</Button>
                            </Tr>

                        </Tbody>
                    ))}

                </Table>
            </Container>

        </>
    )
}

export { StudentsData }
