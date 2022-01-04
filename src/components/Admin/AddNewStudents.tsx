import React, { ChangeEvent, FC, useState } from 'react'
import {
    FormControl,
    FormLabel,
    FormHelperText,
    Input,
    Container,
    Button,
    AlertDialogBody,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogContent,
    AlertDialogOverlay,
    useDisclosure,
    AlertDialogCloseButton,
    AlertDialog,
    Text,
} from '@chakra-ui/react'
import axios from 'axios'
import { AdminMenu } from '../AdminMenu/AdminMenu'
import { useAuth } from '../../contexts/AuthContext'
import { Navigate } from 'react-router-dom'







const AddNewStudents: FC = () => {
    const { currentUser } = useAuth()

    const { isOpen, onOpen, onClose } = useDisclosure()
    const cancelRef: any = React.useRef()

    const Link = process.env.REACT_APP_BACKEND



    const [formData, setFormData] = useState({
        studentName: '',
        city: '',
        age: '',
        education: '',
        gender: '',
        contact: '',
    })

    const [formDetails, setFormDetails] = useState<any>([])
    const [success, setSuccess] = useState<boolean>(false)

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        })
    }

    const addNewStudent = async (datas: any) => {
        try {

            const data = await axios.post(`${Link}/student`, {
                name: datas.studentName,
                city: datas.city,
                age: datas.age,
                education: datas.education,
                gender: datas.gender,
                contact: datas.contact,
            })

            if (data.status === 201) {
                onOpen()
                setSuccess(true)
            } else {
                setSuccess(false)
                onOpen()

                return
            }
        } catch (e) {
            setSuccess(false)
            onOpen()
        }

    }


    const handleSubmit = () => {
        setFormDetails([...formDetails, formData])
        if (formData.age.length === 0 ||
            formData.city.length === 0 ||
            formData.contact.length === 0 ||
            formData.education.length === 0 ||
            formData.gender.length === 0 ||
            formData.studentName.length === 0) {
            onOpen()
            return setSuccess(false)

        }


        addNewStudent(formData)


    }



    return !currentUser ? <Navigate to="/login" /> : (
        <>


            <AdminMenu />
            <h2>Add New Students</h2>


            <Container>

                <FormControl >

                    <FormLabel htmlFor='name'>Student Name</FormLabel>
                    <Input
                        id='name'
                        type='text'
                        name='studentName'
                        onChange={handleInputChange}
                    />
                    {!formData.studentName ? (
                        <FormHelperText display='flex'>
                            Enter the student name.
                        </FormHelperText>
                    ) : (
                        <FormHelperText display='flex'>Name is required.</FormHelperText>
                    )}


                    <FormLabel htmlFor='city'>City</FormLabel>
                    <Input
                        id='city'
                        name='city'
                        type='text'
                        onChange={handleInputChange}
                    />
                    {formData.city ? (
                        <FormHelperText display='flex'>
                            Enter the city.
                        </FormHelperText>
                    ) : (
                        <FormHelperText display='flex'>City is required.</FormHelperText>
                    )}


                    <FormLabel htmlFor='age'>age</FormLabel>
                    <Input
                        id='age'
                        type='number'
                        name='age'
                        max={50} min={10}
                        onChange={handleInputChange}
                    />
                    {!formData.age ? (
                        <FormHelperText display='flex'>
                            Enter the age.
                        </FormHelperText>
                    ) :
                        <FormHelperText display='flex' >Age is required.</FormHelperText>
                    }


                    <FormLabel htmlFor='education'>Education</FormLabel>
                    <Input
                        id='education'
                        name='education'
                        type='text'
                        pattern='[a-zA-Z]{9}'
                        onChange={handleInputChange}
                    />
                    {!formData.education ? (
                        <FormHelperText display='flex'>
                            Enter the Education.
                        </FormHelperText>
                    ) : (
                        <FormHelperText display='flex'>Education is required.</FormHelperText>
                    )}


                    <FormLabel htmlFor='gender'>gender</FormLabel>
                    <Input
                        id='gender'
                        name='gender'
                        type='text'
                        onChange={handleInputChange}
                    />
                    {!formData.gender ? (
                        <FormHelperText display='flex'>
                            Enter the Gender.
                        </FormHelperText>
                    ) : (
                        <FormHelperText display='flex'>Gender is required.</FormHelperText>
                    )}

                    <FormLabel htmlFor='contact'>Contact</FormLabel>
                    <Input
                        id='contact'
                        name='contact'
                        type='text'
                        onChange={handleInputChange}
                    />
                    {!formData.contact ? (
                        <FormHelperText display='flex'>
                            Enter the Contact Number.
                        </FormHelperText>
                    ) : (
                        <FormHelperText display='flex'>Contact Number is required.</FormHelperText>
                    )}


                    <Button
                        mt={4}
                        colorScheme='teal'
                        onClick={handleSubmit}
                        // isLoading={props.isSubmitting}
                        type='submit'
                    >
                        Submit
                    </Button>
                </FormControl>


                <AlertDialog
                    motionPreset='slideInBottom'
                    leastDestructiveRef={cancelRef}
                    onClose={onClose}
                    isOpen={isOpen}
                    isCentered
                >
                    <AlertDialogOverlay />

                    <AlertDialogContent>
                        <AlertDialogHeader>{success ? <Text>Success</Text> : <Text>Error</Text>}</AlertDialogHeader>
                        <AlertDialogCloseButton />
                        <AlertDialogBody>
                            {success ?
                                <Text>Successfully New Student is created</Text>
                                :
                                <Text>Student is already created or your input fields are empty</Text>}
                        </AlertDialogBody>
                        <AlertDialogFooter>
                            <Button colorScheme='red' ref={cancelRef} onClick={onClose}>
                                Ok
                            </Button>

                        </AlertDialogFooter>
                    </AlertDialogContent>
                </AlertDialog>

            </Container>

        </>
    )
}

export { AddNewStudents }
