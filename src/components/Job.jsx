import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Star, StarFill } from "react-bootstrap-icons";
import { addToFav, removeFromFav } from "../redux/actions";
import { connect } from "react-redux";

const mapStateToProps = state => {
  return state.favourites
};

const mapDispatchToProps = (dispatch) => ({
  addToFavourites: indexToAdd => {
        dispatch(addToFav(indexToAdd))
      },
  onClickAgainRemoveClass: indexToRemove => {
        dispatch(removeFromFav(indexToRemove))
      },
});

const Job = ({ data, favourites, addToFavourites, onClickAgainRemoveClass }) => {
  const isFav = favourites.includes(data.company_name);
  
  const toggleFavourite = () => {
    isFav
      ? onClickAgainRemoveClass(data.company_name)
      : addToFavourites(data.company_name);
  };

  return (
    <Row
      className="mx-0 mt-3 p-3"
      style={{ border: "1px solid #00000033", borderRadius: 4 }}>
      <Col xs={3} className="d-flex">
        <Link to={`/${data.company_name}`} style={{color: "grey"}}>{data.company_name}</Link>
      </Col>
      <Col xs={8}>
        <Link to={{ pathname: data.url }} target="_blank" style={{color: "grey"}}>
          {data.title}
        </Link>
      </Col>
      <Col xs={1}>
      {isFav ? (
          <StarFill
            color="green"
            size={20}
            className="me-4 my-auto"
            onClick={toggleFavourite}
          />
        ) : (
          <Star
            color="green"
            size={16}
            className="me-4 my-auto"
            onClick={toggleFavourite}
          />
        )}
      </Col>
    </Row>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Job);