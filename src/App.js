
import { useFormik } from 'formik';
import './App.css';
import { useState } from 'react';

function App() {
  const [data,setData]=useState([])
  const deleteData=(i)=>{
      let copy=[...data]
      copy.splice(i,1)
      setData(copy)
  }
  const formik = useFormik({
    initialValues: {
      id: '',
      password: ''
    },
    onSubmit: values =>{
      setData([...data,values])
      formik.resetForm()
    }
  })
  return (
    <div className="App">
      <>
        <form action="" onSubmit={formik.handleSubmit}>
          <table>
            <tr>
              <td>Id</td>
              <td><input type="text" name='id' value={formik.values.id} onChange={formik.handleChange}/></td>
            </tr>
            <tr>
              <td>Password</td>
              <td><input type="text" name='password'value={formik.values.password} onChange={formik.handleChange}/></td>
            </tr>
            <tr>
              <td></td>
              <input type="Submit" />
            </tr>
          </table>
        </form>
        <table>
          <tr>
            <th>Id</th>
            <th>Password</th>
          </tr>
          {
            data.map((item,i)=>(
                <tr>
                  <td>{item.id}</td>
                  <td>{item.password}</td>
                  <td><button onClick={()=>deleteData(i)}>Delete</button></td>
                 </tr>

            ))
          }
        </table>

      </>
    </div>
  );
}

export default App;
