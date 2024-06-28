import { Formik, Form, Field } from 'formik'
import React, { useState } from 'react'

const Formiktag = () => {
    const [data, setData] = useState([])
    const [value, setValue] = useState(
        {
            name: '',
            id: '',
            password: ''
        }
    )
    const [id, setId] = useState(null)


    const handlesubmit = (values, { resetForm }) => {
        if (id !== null) {
            let copydata = [...data]
            copydata[id] = values
            setData(copydata)
            setId(null)


        }
        else {

            setData([...data, values])
            resetForm()
        }
        setValue({
            name: '',
            id: '',
            password: ''

        })
    }
    const deleteData = (i) => {
        let copy = [...data]
        copy.splice(i, 1)
        setData(copy)
    }
    const updateData = (el, i) => {
        setValue({
            'name': el.name,
            "id": el.id,
            'password': el.password
        })
        setId(i)
    }
    return (
        <div>
            <Formik
                enableReinitialize
                initialValues={value}
                onSubmit={handlesubmit}


            >
                <Form>
                    Name :- <Field type="text" name="name" /> <br />
                    Id   :- <Field type="text" name="id" /> <br />
                    Password :- <Field type="password" name="password" />
                    <br />
                    Enter :- <button type='submit'>Submit</button>
                </Form>
            </Formik>
            <table border={1}>
                <tr>
                    <th>Name</th>
                    <th>Id</th>
                    <th>Password</th>
                    <th>Delete</th>
                    <th>Update</th>
                </tr>
                {
                    data.map((el, i) => (
                        <tr key={i}>
                            <td>{el.name}</td>
                            <td>{el.id}</td>
                            <td>{el.password}</td>
                            <td><button onClick={() => deleteData(i)}>Delete</button></td>
                            <td><button onClick={() => updateData(el, i)}>Edit</button></td>
                        </tr>
                    ))
                }
            </table>
        </div>
    )
}

export default Formiktag
