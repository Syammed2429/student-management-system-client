//Importing the package requires
import { Container, Img } from '@chakra-ui/react'
import { FC } from 'react'
import { Routes, Route } from 'react-router-dom'
import { AddContest } from '../AddContest/AddContest'
import { AddNewStudents } from '../Admin/AddNewStudents'
import { Admin } from '../Admin/Admin'
import { Login } from '../Login/Login'
import { Navbar } from '../Navbar/Navbar'
import { Student } from '../Student/Student'
import errorMsg from '../../assests/images/404.svg'
import { Footer } from '../Footer/Footer'



const Routers: FC = () => {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="" element={<Student />} />
                <Route path="/admin" element={<Admin />} />
                <Route path="/login" element={<Login />} />
                <Route path="/admin/new-student" element={<AddNewStudents />} />
                <Route path="/admin/add-contest" element={<AddContest />} />
                <Route path="*" element={
                    <>
                        <Container>

                            <Img src={errorMsg} />
                        </Container>
                    </>
                } />
            </Routes>
            <Footer />

        </>
    )
}

export { Routers }
