import Link from "next/link";
import { useState } from "react";
import { useDispatch , useSelector} from 'react-redux';
import { useRouter } from 'next/router'

import { Container, Row, Col } from "react-bootstrap";
import { LayoutTwo } from "../../components/Layout";
import { BreadcrumbOne } from "../../components/Breadcrumb";
import { registerUser, signin } from "../../redux/actions/authActions";
import { Button, Message } from "semantic-ui-react";
import { useEffect } from "react";

const LoginRegister = () => {

  const authState = useSelector(state=>state.auth.msg)
  const authErrors = useSelector((state) => state.auth.error);
  const state = useSelector(state=>state.auth)
  console.log(state)
  const router = useRouter()

  useEffect(() => {
    if (JSON.parse(localStorage.getItem('jwt'))) {
      router.push('/other/my-account')
    }
  }, [])
  
 
  const [newUser, setNewUser] = useState({
    firstName:'',
    lastName:'',
    email:'',
    password:''
   
  });

  const [user, setUser] = useState({
    email:'',
    password:''
  });
   
  const [visible, setVisible] = useState(true);

  const handleDismiss = () => {
    setVisible(false)
  }


  const dispatch = useDispatch();
  
  //console.log(authErrors.data.msg)
  const isLoading = useSelector(state=>state.isLoading)
  
  

  function handleRegisterChange(event){
    const { name, value } = event.target;

    setNewUser((prevState)=>({
     ...prevState, [name] : value
    }));

  }

  function handlesigninChange(event){
    const { name, value } = event.target;

    setUser((prevState)=>({
     ...prevState, [name] : value
    }));

   }

  //if(authErrors) console.log( authErrors.data.error.message);

  function handleRegister(event) {
    event.preventDefault();
    dispatch(registerUser(newUser));
    //setNewUser(INITIAL_USER)
  }

  function handleSignin(event) {
    event.preventDefault();
    dispatch(signin(user, router));
   }
 

  return (
    <LayoutTwo>
      {/* breadcrumb */}
      <BreadcrumbOne
        pageTitle="Customer Login"
        backgroundImage="/assets/images/backgrounds/breadcrumb-bg-2.jpg"
      >
        <ul className="breadcrumb__list">
          <li>
            <Link href="/" as={process.env.PUBLIC_URL + "/"}>
              <a>Home</a>
            </Link>
          </li>

          <li>Customer Login</li>
        </ul>
      </BreadcrumbOne>
      <div className="login-area space-mt--r130 space-mb--r130">
        <Container>
          <Row>
            <Col lg={6} className="space-mb-mobile-only--50">
              <div className="lezada-form login-form">
                <form>
                  <Row>
                    <Col lg={12}>
                      <div className="section-title--login text-center space-mb--50">
                        <h2 className="space-mb--20">Login</h2>
                        <p>Great to have you back!</p>
                      </div>
                    </Col>
                    <Col lg={12} className="space-mb--60">
                      <input
                        type="email"
                        placeholder="email address"
                        name='email'
                        value={user.email}
                        onChange={handlesigninChange}
                        required

                      />
                      
                    </Col>
                    <Col lg={12} className="space-mb--60">
                      <input
                       type="password" 
                       placeholder="Password"
                       name='password'
                       value={user.password}
                       onChange={handlesigninChange}
                       required
                      />
                      <br/>
                      <span style={{color:'red'}}>
                      { state.error == 'Account not activated'? state.error : null}
                      { state.error == 'invalid credentials'? state.error : null}
                      </span>
                    </Col>
                    <Col lg={12} className="space-mb--30">
                    <Button loading={isLoading} size='big' onClick={handleSignin} secondary>
                        LOGIN
                      </Button>
                    </Col>
                    <Col>
                      <input type="checkbox" />{" "}
                      <span className="remember-text">Remember me</span>
                      <a href="#" className="reset-pass-link">
                        Lost your password?
                      </a>
                    </Col>
                  </Row>
                </form>
              </div>
            </Col>
            <Col lg={6}>
              <div className="lezada-form login-form--register">
                <form>
                  <Row>
                    <Col lg={12}>
                      <div className="section-title--login text-center space-mb--50">
                        <h2 className="space-mb--20">Register</h2>
                        <p>If you don’t have an account, register now!</p>
                      </div>
                    </Col>
                    <Col lg={12} className="space-mb--30">
                      <label htmlFor="firstName">
                        Fist Name <span className="required">*</span>{" "}
                      </label>
                      <input type="text" id="regEmail"  name="firstName"
                        value={newUser.firstName}
                        onChange={handleRegisterChange} required
                         />
                         <span style={{color:'red'}}>
                         { state.error.includes('First Name')? state.error : null}
                           </span>
                    </Col>
                    <Col lg={12} className="space-mb--30">
                      <label htmlFor="lastName">
                        Last Name <span className="required">*</span>{" "}
                      </label>
                      <input type="text" id="regEmail"  name="lastName"
                          value={newUser.lastName}
                          onChange={handleRegisterChange} required
                           />
                           <span style={{color:'red'}}>
                           { state.error.includes('Last Name')? state.error : null}
                           </span>
                           
                    </Col>
                    <Col lg={12} className="space-mb--30">
                      <label htmlFor="regEmail">
                        Email Address <span className="required">*</span>{" "}
                      </label>
                      <input type="text" id="regEmail" required  name="email"
                        value={newUser.email}
                        onChange={handleRegisterChange}
                        />
                        <span style={{color:'red'}}>
                        { state.error.includes('Email')? 'Invalid Email' : null}
                        { state.error.includes('email')? state.error : null}
                           </span>
                    </Col>
                    <Col lg={12} className="space-mb--50">
                      <label htmlFor="regPassword">
                        Password <span className="required">*</span>{" "}
                      </label>
                      <input type="password" id="regPassword" name="password"
                        value={newUser.password}
                        onChange={handleRegisterChange} required
                         />
                         <span style={{color:'red'}}>
                         { state.error.includes('Password')? state.error : null}
                           </span>
                    </Col>
                    <Col lg={12} className="space-mb--50">
                    {visible && state.message.includes('Please check your email for activation') ?  (<Message
                        onDismiss={handleDismiss}
                        header='Email Activation'
                        content={state.message}
                      />) : null }

                    </Col>
                    <Col lg={12} className="text-center">       
                      <Button loading={isLoading} size='big' onClick={handleRegister} secondary>
                        REGISTER
                      </Button>
                    </Col>
                  </Row>
                </form>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </LayoutTwo>
  );
};

export default LoginRegister;
