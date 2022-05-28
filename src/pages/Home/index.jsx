import { useSelector, useDispatch } from "react-redux";
import ReactPaginate from "react-paginate";
import HomeCard from "../../components/HomeCard";
import { urlId } from "../../Store/actions";
import "./home.css";
import Loading from "../../components/Loading";

function Home() {
  const dispatch = useDispatch();
  const characters = useSelector((state) => state.characterData);

  const handlePageClick = (data) => {
    dispatch(urlId(data.selected + 1));
  };

  return (
    <Loading>
      <div className="home-container">
        {characters.results &&
          characters.results.map((character) => (
            <HomeCard character={character} key={character.id} />
          ))}
      </div>
      {characters.info && (
        <ReactPaginate
          breakLabel="...."
          pageCount={characters.info.pages}
          previousLabel={null}
          nextLabel={null}
          marginPagesDisplayed={characters.info.pages}
          onPageChange={handlePageClick}
          containerClassName="pagination"
          disableInitialCallback
          initialPage={1}
        />
      )}
    </Loading>
  );
}

export default Home;
