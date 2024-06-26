import { Formik , Form , Field } from 'formik'
import React, { useState } from 'react'

const Formiktag = () => {
    const [data,setData]=useState([])
    const handlesubmit = (values)=>{
        setData([...data,values])
    }
    const deleteData =(i)=>{
        let copy=[...data]
        copy.splice(i,1)
        setData(copy)
    }
  return (
    <div>
      <Formik
       initialValues={{
            name:'',
            id:'',
            password:''
    }}
    onSubmit ={handlesubmit}
       >
        <Form>
            Name :- <Field type="text" name="name" /> <br />
            Id   :- <Field type="text"  name="id"/> <br />
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
        </tr>
        {
            data.map((el,i)=>(
                <tr>
                    <td>{el.name}</td>
                    <td>{el.id}</td>
                    <td>{el.password}</td>
                    <td><button onClick={()=>deleteData(i)}>Delete</button></td>
                </tr>
            ))    
        }    
      </table>
    </div>
  )
}

export default Formiktag
