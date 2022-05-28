import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import "./loading.css";

function Loading({ children }) {
  const loading = useSelector((state) => state.loading);
  return loading ? (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>{children}</>
  ) : (
    <div className="loading-container">
      <section>
        <img
          src="https://cdn.dribbble.com/users/1897588/screenshots/3887258/media/0f0e5623ca821abf1a521fa9b1e5e474.gif"
          alt="loading"
        />
        <p>loading</p>
      </section>
    </div>
  );
}

Loading.propTypes = {
  children: PropTypes.node.isRequired,
};
export default Loading;
