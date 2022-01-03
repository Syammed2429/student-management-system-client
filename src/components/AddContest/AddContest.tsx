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






const AddContest: FC = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const cancelRef: any = React.useRef()

    const Link = process.env.REACT_APP_BACKEND




    const [formData, setFormData] = useState({
        contestTitle: '',
        type: '',
        deadline: '',
        tags: '',
        time: '',
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

            const data = await axios.post(`${Link}/contest`, {
                title: datas.contestTitle,
                type: datas.type,
                deadline: datas.deadline,
                tags: datas.tags,
                time: datas.time,
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
        if (formData.contestTitle.length === 0 ||
            formData.deadline.length === 0 ||
            formData.tags.length === 0 ||
            formData.time.length === 0 ||
            formData.type.length === 0) {
            onOpen()
            return setSuccess(false)

        }


        addNewStudent(formData)


    }



    return (
        <>


            <AdminMenu />
            <h2>AddContest</h2>


            <Container>

                <FormControl >

                    <FormLabel htmlFor='title'>Contest Title</FormLabel>
                    <Input
                        id='title'
                        type='text'
                        name='contestTitle'
                        onChange={handleInputChange}
                    />
                    {!formData.contestTitle ? (
                        <FormHelperText display='flex'>
                            Enter the contest title.
                        </FormHelperText>
                    ) : (
                        <FormHelperText display='flex'>Title is required.</FormHelperText>
                    )}


                    <FormLabel htmlFor='type'>Contest Type</FormLabel>
                    <Input
                        id='type'
                        name='type'
                        type='text'
                        onChange={handleInputChange}
                    />
                    {formData.type ? (
                        <FormHelperText display='flex'>
                            Enter the type.
                        </FormHelperText>
                    ) : (
                        <FormHelperText display='flex'>Type is required.</FormHelperText>
                    )}


                    <FormLabel htmlFor='deadline'>Deadline</FormLabel>
                    <Input
                        id='deadline'
                        type='text'
                        name='deadline'
                        max={50} min={10}
                        onChange={handleInputChange}
                    />
                    {!formData.deadline ? (
                        <FormHelperText display='flex'>
                            Enter the deadline.
                        </FormHelperText>
                    ) :
                        <FormHelperText display='flex' >Deadline is required.</FormHelperText>
                    }


                    <FormLabel htmlFor='tags'>Tags</FormLabel>
                    <Input
                        id='tags'
                        name='tags'
                        type='text'
                        pattern='[a-zA-Z]{9}'
                        onChange={handleInputChange}
                    />
                    {!formData.tags ? (
                        <FormHelperText display='flex'>
                            Enter the tags.
                        </FormHelperText>
                    ) : (
                        <FormHelperText display='flex'>Tags is required.</FormHelperText>
                    )}


                    <FormLabel htmlFor='time'>Time</FormLabel>
                    <Input
                        id='time'
                        name='time'
                        type='text'
                        onChange={handleInputChange}
                    />
                    {!formData.time ? (
                        <FormHelperText display='flex'>
                            Enter the time.
                        </FormHelperText>
                    ) : (
                        <FormHelperText display='flex'>Time is required.</FormHelperText>
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

export { AddContest }
