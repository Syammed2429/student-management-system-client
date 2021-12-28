//Importing the package requires
import React, { FC } from 'react'
import { Routes, Route } from 'react-router-dom'
import { Admin } from '../Admin/Admin'
import { Navbar } from '../Navbar/Navbar'
import { Student } from '../Student/Student'


const Routers: FC = () => {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="" element={<Student />} />
                <Route path="/admin" element={<Admin />} />
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
