
import { useFormik } from 'formik';
import './App.css';
import { useState } from 'react';
import Final from './Final';
import FormikInput from './FormikInput';
import Formiktag from './Formiktag';

function App() {
  // const [data, setData] = useState([])
  // const [editId, seteEditId] = useState(null)

  // const deleteData = (i) => {
  //   let copy = [...data]
  //   copy.splice(i, 1)
  //   setData(copy)
  // }
  // const formik = useFormik({
  //   initialValues: {
  //     id: '',
  //     password: ''
  //   },
  //   onSubmit: values => {

  //     if (editId !== null) {
  //       let copyData = [...data]
  //       copyData[editId] = values
  //       setData(copyData)
  //       seteEditId(null)
  //     }
  //     else
  //     {
  //       setData([...data, values])
  //     }
  //     formik.resetForm()

  //   }
  // })

  // const editData = (item, index) => {
  //   // console.log(item);
  //   formik.setValues({
  //     id: item.id,
  //     password: item.password
  //   })
  //   seteEditId(index)
  // }
  return (
    <div className="App">
      <>
        {/* <form action="" onSubmit={formik.handleSubmit}>
          <table>
            <tr>
              <td>Id</td>
              <td><input type="text" name='id' value={formik.values.id} onChange={formik.handleChange} /></td>
            </tr>
            <tr>
              <td>Password</td>
              <td><input type="password" name='password' value={formik.values.password} onChange={formik.handleChange} /></td>
            </tr>
            <tr>
              <td></td>
              <input type="Submit" />
            </tr>
          </table>
        </form>
        <table border={1} cellPadding={4} cellSpacing={3}>
          <tr>
            <th>Id</th>
            <th>Password</th>
            <th>Delete</th>
            <th>Edit</th>
          </tr>
          {
            data.map((item, i) => (
              <tr>
                <td>{item.id}</td>
                <td>{item.password}</td>
                <td><button onClick={() => deleteData(i)}>Delete</button></td>
                <td>
                  <button onClick={() => editData(item, i)}>EDIT</button>
                </td>
              </tr>

            ))
          }
        </table> */}
        {/* <Final></Final> */}
        {/* <FormikInput></FormikInput> */}
        <Formiktag></Formiktag>
      </>
    </div>
  );
}

export default App;
