import { Container, Row, Col, ListGroup, ListGroupItem, Button } from "react-bootstrap";
import { connect } from "react-redux";
import { removeFromFav } from "../redux/actions";

const mapStateToProps = state => { return state.favourites }
  
const mapDispatchToProps = (dispatch) => ({
  removeFromFav: (JOB) => {
    dispatch(removeFromFav(JOB));
  },
});

const Favourites = ({ favourites, removeFromFav }) => {
  return (
    <Container>
      <Row>
        <Col xs={12}>
          <h1 className="mt-3 pb-3">YOUR FAVORITE JOBS:</h1>
          <ListGroup>
            {favourites &&
              favourites.map((JOB, i) => (
                <ListGroupItem key={i}>
                  <Row>
                    <Col md={11}>
                    <span >{JOB}</span>
                    </Col>
                    <Col md={1} >
                       <Button variant="outline-danger" size="sm" onClick={() => removeFromFav(JOB)}>REMOVE</Button>
                    </Col>
                  </Row>
                </ListGroupItem>
              ))}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Favourites);