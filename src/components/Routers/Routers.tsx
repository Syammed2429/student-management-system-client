//Importing the package requires
import React, { FC } from 'react'
import { Routes, Route } from 'react-router-dom'
import { AddNewStudents } from '../Admin/AddNewStudents'
import { Admin } from '../Admin/Admin'
import { Login } from '../Login/Login'
import { Navbar } from '../Navbar/Navbar'
import { Student } from '../Student/Student'


const Routers: FC = () => {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="" element={<Student />} />
                <Route path="/admin" element={<Admin />} />
                <Route path="/login" element={<Login />} />
                <Route path="/admin/new-student" element={<AddNewStudents />} />
                <Route path="*" element={
                    <>
                        <h1>404 Not Found</h1>
                    </>
                } />
            </Routes>

        </>
    )
}

export { Routers }
