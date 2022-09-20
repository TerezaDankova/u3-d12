import { useState } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { addToFavoritesWithThunk} from "../redux/actions";
import Job from "./Job";
import { connect } from "react-redux";

const mapStateToProps = state => { 
  return (state.jobs )
}

const MainSearch = ({ jobs, dispatch }) => {
  const [query, setQuery] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addToFavoritesWithThunk(query));
  };

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <Container>
      <Row className="pb-4">
        <Col md={12} className="mt-3" style={{ textAlign: "center"}}>
          <h1>Remote Jobs Search</h1>
        </Col>
        <Col md={12} className="mt-4" style={{ textAlign: "center"}}>
          <Link to="/favourites" className="btn link" style={{color: "green", fontSize: "20"}}>
            FAVOURITES JOBS
          </Link>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md={10} className="">
          <Form onSubmit={handleSubmit}>
            <Form.Control
              type="search"
              value={query}
              onChange={handleChange}
              placeholder="Type some job name and press Enter..."
            />
          </Form>
        </Col>
        <Col md={8} className="">
          {jobs &&
            jobs.map((jobData) => (
              <Job key={jobData._id} data={jobData} />
            ))}
        </Col>
      </Row>
    </Container>
  );
};

export default connect(mapStateToProps)(MainSearch);