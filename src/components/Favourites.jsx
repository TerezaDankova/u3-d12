import { Container, Row, Col, ListGroup, ListGroupItem, Button } from "react-bootstrap";
import { connect } from "react-redux";
import { removeFromFav } from "../redux/actions";
import { useNavigate, useLocation} from "react-router-dom";

const mapStateToProps = state => { return state.favourites }
  
const mapDispatchToProps = (dispatch) => ({
  removeFromFav: (JOB) => {
    dispatch(removeFromFav(JOB));
  },
});

const Favourites = ({ favourites, removeFromFav }) => {

  const navigate = useNavigate(); 
  const location = useLocation(); 
  console.log("LOCATION pathname", location.pathname);

  

  return (
    <Container>
      <Row>
        <Col xs={12}>
          <h1 className="mt-3 pb-3">YOUR FAVORITE JOBS:</h1>
          <ListGroup>
            {favourites &&
              favourites.map((JOB, i) => (
                <ListGroupItem key={i} style={{ backgroundColor: " #adadad9b"}}>
                  <Row>
                    <Col md={11}>
                    <span style={{color: "white"}} >{JOB}</span>
                    </Col>
                    <Col md={1} >
                       <Button variant="outline-danger" size="sm" onClick={() => removeFromFav(JOB)}>REMOVE</Button>
                    </Col>
                  </Row>
                </ListGroupItem>
              ))}
          </ListGroup>
        </Col>
        <Col>
        <Button variant="link" onClick={() => {navigate("/")}} className={location.pathname === "/" ? "nav-link active" : "nav-link"}>
                  <span>Go back Home</span>
        </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Favourites);