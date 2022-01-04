import { Button, Flex } from '@chakra-ui/react';
import axios from 'axios';
import React, { FC, useEffect, useState } from 'react'
import { ShowContests } from '../ShowContests/ShowContests';





const Student: FC = () => {
    const [contestsData, setContestsData] = useState<string[]>([]);
    const [pages, setPages] = useState<number>(1);

    const Link = process.env.REACT_APP_BACKEND

    useEffect(() => {
        const getContests = async () => {
            const { data } = await axios.get(`${Link}/contest`, {
                params: {
                    page: pages,
                    limit: 5,
                }
            })
            setContestsData(data.contests)

        }

        getContests()
    }, [pages, contestsData, Link,])




    return (
        <>
            <h1>Welcome to the contets</h1>

            <ShowContests contestsData={contestsData} />
            <Flex justify="space-around" my='5' >
                <Button
                    disabled={pages === 1}
                    colorScheme='yellow'
                    onClick={() => {
                        setPages(prev => prev - 1)
                    }}
                >Prev</Button>
                <Button
                    disabled={contestsData.length === 0}
                    onClick={() => {
                        setPages(prev => prev + 1)
                    }} colorScheme='green'>Next</Button>
            </Flex>

        </>
    )
}

export { Student }
