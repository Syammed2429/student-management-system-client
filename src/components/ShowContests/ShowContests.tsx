

import {
    Container,
    Table,
    Thead,
    Tr,
    Th,
    Tbody,
    Td,
    Button,

} from '@chakra-ui/react'
import { useState } from 'react'
import { useEffect } from 'react'

const ShowContests = ({ contestsData }: any) => {

    const [contestsDatas, setContestsDatas] = useState<string[]>([]);
    const [dsa, setDsa] = useState<boolean>(false)
    const [coding, setCoding] = useState<boolean>(false)


    useEffect(() => {
        if (!dsa && !coding) {

            setContestsDatas(contestsData)
        }
    }, [coding, contestsData, dsa]);


    const dsaSort = () => {

        const data = contestsData.filter((e: any) => {
            return e.type === 'DSA'
        })

        setDsa(true)
        setContestsDatas(data)

    }

    const codingSort = async () => {

        const datas = contestsData.filter((e: any) => {
            return e.type === 'Coding'
        })


        setCoding(true)
        setContestsDatas(datas)



    }


    return (
        <>
            <Container >
                <Button onClick={dsaSort} colorScheme="pink">DSA</Button>
                <Button onClick={codingSort} colorScheme="pink">Coding</Button>


                <Table size='md' >

                    <Thead>
                        <Tr>

                            <Th>Title</Th>
                            <Th>Type</Th>
                            <Th>Deadline</Th>
                            <Th>Tags</Th>
                            <Th>Time</Th>
                        </Tr>
                    </Thead>


                    {contestsDatas.map((e: any) => (

                        <Tbody key={e._id} >
                            <Tr >

                                <Td fontSize="19px"> {e.title} </Td>
                                <Td fontSize="19px">{e.type} </Td>
                                <Td fontSize="19px">{e.deadline} </Td>
                                <Td fontSize="19px">{e.tags} </Td>
                                <Td fontSize="19px">{e.time} </Td>

                            </Tr>

                        </Tbody>
                    ))}

                </Table>


            </Container>

        </>
    )
}

export { ShowContests }
