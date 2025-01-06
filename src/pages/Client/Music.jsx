// component
import _aside from "../../components/_aside";
import _navUser from "../../components/_navUser";
import _searchBar from "../../components/_searchBar";
// style
// import "../../style/music.css";

export default function music() {
  return (
    <>
      <_aside />
      <main>
        <_navUser />
        <div className="container-section">
          <_searchBar />
          <div className="content">
            <div className="content-music"></div>
            <div className="content-music"></div>
            <div className="content-music"></div>
            <div className="content-music"></div>
            <div className="content-music"></div>
            <div className="content-music"></div>
          </div>
        </div>
      </main>
    </>
  );
}
