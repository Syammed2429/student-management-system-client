import React, { FC } from 'react'

const Test: FC = () => {
    const getData = async (): Promise<string | void> => {
        const response = await fetch(`https://student-management-production.up.railway.app/student`)
        const result = await response.json();
        console.log('result:', result)

    }
    getData()
    return (
        <>
            <h1>Hello</h1>
        </>
    )
}

export default Test
