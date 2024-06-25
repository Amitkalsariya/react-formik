import { useFormik } from 'formik'
import React, { useState } from 'react'

const Final = () => {
    const [data,setData]=useState([])
    const [id,setId]=useState(null)
    const formik = useFormik({
        initialValues:{
            name:'',
            sub1:'',
            sub2:'',
            sub3:''
        },
        onSubmit:values=>{
            if(id!==null)
                {
                    let copy=[...data]
                    copy[id]=values
                    setData(copy)
                    setId(null)
                }
                else{
                    setData([...data,values])

                }
            formik.resetForm()
    }
    })
    const deleteData=(i)=>{
        let copy=[...data]
        copy.splice(i,1)
        setData(copy)
    }
    const updateData=(el,i)=>{
        formik.setValues({
            name:el.name,
            sub1:el.sub1,
            sub2:el.sub2,
            sub3:el.sub3
        })
        setId(i)
    }
    return (
        <div>
            <form action="" onSubmit={formik.handleSubmit}>
                <table>
                    <tr>
                        <td>Name :-</td>
                        <td><input type="text" name='name' value={formik.values.name}  onChange={formik.handleChange}/></td>
                    </tr>
                    <tr>
                        <td>Subject-1 :-</td>
                        <td><input type="text" name='sub1' value={formik.values.sub1} onChange={formik.handleChange} /></td>
                    </tr>
                    <tr>
                        <td>Subject-2 :-</td>
                        <td><input type="text" name='sub2' value={formik.values.sub2}  onChange={formik.handleChange}/></td>
                    </tr>
                    <tr>
                        <td>Subject-3 :-</td>
                        <td><input type="text" name='sub3' value={formik.values.sub3} onChange={formik.handleChange} /></td>
                    </tr>
                    <tr>
                        <td>Submit</td>
                        <td><input type="Submit" /></td>
                    </tr>




                </table>
                    </form>
                <table border={2}>
                    <tr>
                        <th>Name</th>
                        <th>Subject 1</th>
                        <th>Subject 2</th>
                        <th>Subject 3</th>
                        <th>Delete</th> 
                        <th>Update</th>
                    </tr>
                    {
                        data.map((el,i)=>(
                           <tr>
                            <td>{el.name}</td>
                            <td>{el.sub1}</td>
                            <td>{el.sub2}</td>
                            <td>{el.sub3}</td>
                            <td><button onClick={()=>deleteData(i)}>Delete</button></td>
                            <td><button onClick={()=>updateData(el,i)}>Update</button></td>

                           </tr>

                        ))
                    }
                </table>
        </div>
    )
}

export default Final
