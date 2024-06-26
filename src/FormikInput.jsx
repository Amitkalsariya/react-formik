// import { Field, Form, Formik } from 'formik'
// import React, { useState } from 'react'

// const FormikInput = () => {

//     const [data , setData] = useState([])

//     const handleData = (values) => {
//         // console.log(values);
//         setData([...data , values])
//     }
//   return (
//     <>
//         <Formik
//             initialValues={{
//                 name : '',
//                 surname : '',
//             }}
//             // onSubmit={(values) => {
//             //     console.log(values);
//             //     setData([...data , values])
//             // }}
//             onSubmit={handleData}
//         >
//             <Form>
//                 NAme :- <Field type="text" name="name" />
//                 <br />
//                 Surname :- <Field type="text" name="surname" /> 
//                 <br />
//                 Submit :-  <button type='submit'>Submit</button>     
//             </Form>
//         </Formik>

//         <table border={1}>
//             <tr>
//                 <td>Name</td>
//                 <td>Surname</td>
//             </tr>
//             {
//                 data.map((item , index) => (
//                     <tr>
//                         <td>{item.name}</td>
//                         <td>{item.surname}</td>
//                     </tr>
//                 ))
//             }
//         </table>
//     </>
//   )
// }

// export default FormikInput
