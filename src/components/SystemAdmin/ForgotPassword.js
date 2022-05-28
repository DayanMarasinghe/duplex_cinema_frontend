// import axios from "axios";
// import React, { useState } from "react";
// import { Button,  Form } from "react-bootstrap";


// import "./Login/AdminLogin.css";
// import Header from "./Header/Header";

// const ForgotPassword = () => {
//        const [email, setEmail] = useState("");
//     //   const [password, setPassword] = useState("");
//         const [error, setError] = useState(false);
//        const [message, setMessage] = useState(null);

//     const handleSubmit  = async (e) => {
//         e.preventDefault();
//         try{
//             const url = 'http://localhost:4000/systemadmins/requestPasswordReset'
//             const {data} = await axios.post(url, {email});
//             setMessage(data.message);
//             setError("");
//         }catch(error){
//             if(
//                 error.resonse && error.response.status >= 400
//             ){
//                 setError(error.resonse.data.message);
//                 setMessage("");
//             }
            
//         }
//     }
//   return (
//     <div>
//       <Header></Header>
//       <div
//         className="container"
//         id="logincss"
//         style={{ width: 500, marginTop: 40, marginBottom: 200 }}
//       >
//         {/* {message && <ErrorMessage variant="danger">{message}</ErrorMessage>} */}
//         <Form onSubmit={handleSubmit}>
//           <Form.Group className="mb-3" controlId="formBasicEmail">
//             <Form.Label>Email address</Form.Label>
//             <Form.Control
//               type="email"
//               name = "email"
//               placeholder="Enter email"
//               value={email}
//               required
//               onChange={(e)=> setEmail(e.target.value)}
             
//             />
//           </Form.Group>

//           <Button variant="primary" type="submit">
//             Submit
//           </Button>
//         </Form>
       
//       </div>
//     </div>
//   );
// };

// export default ForgotPassword;
