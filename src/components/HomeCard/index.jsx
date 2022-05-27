import PropTypes from "prop-types";
import "./homeCard.css";
import { Link } from "react-router-dom";
import { CHARACTER } from "../../constant/route";

function HomeCard({ character }) {
  const { image, name, id } = character;

  return (
    <Link to={`${CHARACTER}/${id}`} className="character-container">
      <img src={image} alt={name} />
      <p className="character-container_title">{name}</p>
    </Link>
  );
}

HomeCard.propTypes = {
  character: PropTypes.shape({
    image: PropTypes.string,
    name: PropTypes.string,
    id: PropTypes.number,
  }).isRequired,
};
export default HomeCard;
