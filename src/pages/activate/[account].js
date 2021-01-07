import { Fragment } from "react";
import Link from "next/link";
import axios from 'axios';
import { Container, Row, Col } from "react-bootstrap";
import { HeaderTwo } from "../../components/Header";
import { useRouter } from 'next/router';
import { useEffect } from "react";
const NotFound = () => {
    const router = useRouter()
  const { account} = router.query
  console.log(account)
  useEffect(() => {
    if(account){
        const activationEmail = async () => {
            try {
                const res = await axios.put('https://jyven-demo.herokuapp.com/api/auth/activate/', {activationToken:account})
                console.log(res)
            } catch (err) {
                console.log(err)
            }
        }
        activationEmail()
    }
},[account])
  return (
    <Fragment>
      <HeaderTwo />
      <div
        className="nothing-found-area bg-404"
        style={{
          backgroundImage: `url(${
            process.env.PUBLIC_URL + "/assets/images/backgrounds/404-bg.jpg"
          })`
        }}
      >
        <Container>
          <Row>
            <Col lg={6}>
              <div className="nothing-found-content">
                <h1 className="space-mb--50">Account Activated</h1>
                <p className="direction-page">
                  YOU CAN NOW LOGIN{" "}
                  <Link href="/other/login-register" as={process.env.PUBLIC_URL + "/"}>
                    <a>HERE</a>
                  </Link>
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </Fragment>
  );
};

export default NotFound;
