import { FC, useEffect, useState } from 'react'
import {
    Text,
} from '@chakra-ui/react'
import { useAuth } from '../../contexts/AuthContext'
import { Navigate } from 'react-router-dom'
import { StudentsData } from './StudentsData'
import { AdminMenu } from '../AdminMenu/AdminMenu'




//Main FFunction Starts
const Admin: FC = () => {
    const { currentUser } = useAuth()
    const [studentsData, setStudentsData] = useState<any>([])
    const [loading, setLoading] = useState<boolean>(false)
    // const [keys, setKeys] = useState<any>([]])
    // const [error, setError] = useState<string | null>(null)



    const Link = process.env.REACT_APP_BACKEND

    useEffect(() => {

        const getStudents = async () => {
            try {
                setLoading(true)

                const response = await fetch(`${Link}/student`);
                const result = await response.json();
                setStudentsData(result)
            } catch {
                // setError('Failed to sign up')

                setLoading(true)
            }


        }

        getStudents()
        setLoading(false)
    }, [Link, studentsData])






    return !currentUser ? <Navigate to="/login" /> : (
        <>

            <h1>Admin</h1>
            <AdminMenu />
            <Text>Welcome {currentUser.email}</Text>
            {loading ?
                <Text>Loading...</Text> :

                <StudentsData studentsData={studentsData} />
            }



        </>
    )
}

export { Admin }
