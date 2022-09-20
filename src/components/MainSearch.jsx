import { useState } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { addToFavoritesWithThunk} from "../redux/actions";
import Job from "./Job";
import { useDispatch, useSelector } from "react-redux";


const MainSearch = () => {

  const [query, setQuery] = useState("");

  const selectorJobs = useSelector(state => state.jobs)

  const dispatch = useDispatch()

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addToFavoritesWithThunk(query));
  };

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <Container>
      <Row className="justify-content-center pb-4">
        <Col md={9} className="mt-3" style={{ }}>
          <h1>Remote Jobs Search</h1>
        </Col>
        <Col md={3} className="mt-4">
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
              placeholder="type and press Enter"
            />
          </Form>
        </Col>
        <Col md={8} className="">
          {selectorJobs &&
            selectorJobs.map((jobData) => (
              <Job key={jobData._id} data={jobData} />
            ))}
        </Col>
      </Row>
    </Container>
  );
};

export default MainSearch;