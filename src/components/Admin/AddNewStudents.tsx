import React, { ChangeEvent, FC, FormEvent, useState } from 'react'
import {
    FormControl,
    FormLabel,
    FormHelperText,
    Input,
    Container,
    Button,
    useToast,
    AlertDialog,
    AlertDialogBody,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogContent,
    AlertDialogOverlay,
    Wrap,
    WrapItem,
    FormErrorMessage,
    useDisclosure
} from '@chakra-ui/react'
import axios from 'axios'



const AddNewStudents: FC = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const cancelRef = React.useRef()



    const [formData, setFormData] = useState({
        studentName: '',
        city: '',
        age: '',
        education: '',
        gender: '',
        contact: '',
    })

    const [formDetails, setFormDetails] = useState<any>([])
    const [formIsEmpty, setFromIsEmpty] = useState<boolean>(false)
    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        })
    }

    const addNewStudent = async (datas: any) => {
        const data = await axios.post(`https://student-management-production.up.railway.app/student`, {
            name: datas.studentName,
            city: datas.city,
            age: datas.age,
            education: datas.education,
            gender: datas.gender,
            contact: datas.contact,
        })
        console.log('data:', data)
    }


    const handleSubmit = () => {
        setFormDetails([...formDetails, formData])
        if (formData.age.length === 0 ||
            formData.city.length === 0 ||
            formData.contact.length === 0 ||
            formData.education.length === 0 ||
            formData.gender.length === 0 ||
            formData.studentName.length === 0)
            return setFromIsEmpty(prev => !prev)

        // console.log("Triggered");

        addNewStudent(formData)


    }

    return (
        <>

            <h2>AddNewStudents</h2>
            <Container>

                {/* <FormControl isInvalid={isError}> */}
                <FormControl >

                    <FormLabel htmlFor='name'>Student Name</FormLabel>
                    <Input
                        id='name'
                        type='text'
                        name='studentName'
                        onChange={handleInputChange}
                    />
                    {!formData.studentName ? (
                        <FormHelperText>
                            Enter the student name.
                        </FormHelperText>
                    ) : (
                        <FormHelperText>Name is required.</FormHelperText>
                    )}


                    <FormLabel htmlFor='city'>City</FormLabel>
                    <Input
                        id='city'
                        name='city'
                        type='text'
                        onChange={handleInputChange}
                    />
                    {formData.city ? (
                        <FormHelperText>
                            Enter the city.
                        </FormHelperText>
                    ) : (
                        <FormHelperText>City is required.</FormHelperText>
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
                        <FormHelperText>
                            Enter the age.
                        </FormHelperText>
                    ) :
                        <FormHelperText>Age is required.</FormHelperText>
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
                        <FormHelperText>
                            Enter the Education.
                        </FormHelperText>
                    ) : (
                        <FormHelperText>Education is required.</FormHelperText>
                    )}


                    <FormLabel htmlFor='gender'>gender</FormLabel>
                    <Input
                        id='gender'
                        name='gender'
                        type='text'
                        onChange={handleInputChange}
                    />
                    {!formData.gender ? (
                        <FormHelperText>
                            Enter the Gender.
                        </FormHelperText>
                    ) : (
                        <FormHelperText>Gender is required.</FormHelperText>
                    )}

                    <FormLabel htmlFor='contact'>Contact</FormLabel>
                    <Input
                        id='contact'
                        name='contact'
                        type='text'
                        onChange={handleInputChange}
                    />
                    {!formData.contact ? (
                        <FormHelperText>
                            Enter the Contact Number.
                        </FormHelperText>
                    ) : (
                        <FormHelperText>Contact Number is required.</FormHelperText>
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
            </Container>

        </>
    )
}

export { AddNewStudents }
