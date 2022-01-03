import axios from 'axios';
import React, { FC, useEffect, useState } from 'react'





const Student: FC = () => {
    const [contestsData, setContestsData] = useState<string[] | null>(null);

    const Link = process.env.REACT_APP_BACKEND

    useEffect(() => {
        const getContests = async () => {
            const { data } = await axios(`${Link}/contest`, {
                params: {
                    page: 3,
                    limit: 2
                }
            })
            setContestsData(data.contests)

        }

        getContests()
    }, [Link, contestsData])




    return (
        <>
            <h1>Student</h1>


        </>
    )
}

export { Student }
