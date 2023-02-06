import { Container, Row, Col } from "react-bootstrap"

const MyFooter=()=>{
return(

        <Container fluid className="mt-5" fixed="bottom">
            <Row className='justify-content-center  bg-dark' >
                <Col className='text-center' xs={12}  md={6} >
                    <footer className="page-footer font-small footer">
                        
                        <div className="footer-copyright text-center py-3">
                        <div className="links d-flex justify-content-center" style={{gap:"30px"}}>
                                <a href="google.com">Terms of Use</a>
                                <a href="google.com">Privacy Policy</a>
                            </div>
                              
                        <div className="icons d-flex justify-content-around mt-3">
                        <i className="bi bi-instagram"></i>
                        <i className="bi bi-facebook"></i>
                        <i className="bi bi-linkedin"></i>
                        <i className="bi bi-twitter"></i>
                        </div>
                        </div>
                    </footer> 
                </Col>
            </Row>
        </Container>
)
}
export default MyFooter

// import React from 'react';
// import {
//   MDBFooter,
//   MDBContainer,
 
//   MDBIcon,
//   MDBBtn
// } from 'mdb-react-ui-kit';

// export default function App() {
//   return (
//     <MDBFooter className='bg-dark text-center text-white'>
//       <MDBContainer className='p-4 pb-0'>
//         <section className='mb-4'>
//           <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
//             <MDBIcon fab icon='facebook-f' />
//           </MDBBtn>

//           <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
//             <MDBIcon fab icon='twitter' />
//           </MDBBtn>

//           <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
//             <MDBIcon fab icon='google' />
//           </MDBBtn>
//           <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
//             <MDBIcon fab icon='instagram' />
//           </MDBBtn>

//           <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
//             <MDBIcon fab icon='linkedin-in' />
//           </MDBBtn>

//           <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
//             <MDBIcon fab icon='github' />
//           </MDBBtn>
//         </section>
//       </MDBContainer>

//       <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
//         © 2020 Copyright:
//         <a className='text-white' href='https://mdbootstrap.com/'>
//           MDBootstrap.com
//         </a>
//       </div>
//     </MDBFooter>
//   );
// }
