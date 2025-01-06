// component
import _aside from "../../components/_aside";
import _navUser from "../../components/_navUser";
import _searchBar from "../../components/_searchBar";
// style
import "../../style/follow.css";

export default function follow() {
  return (
    <>
      <_aside />
      <main>
        <_navUser />
        <div className="container-section">
          <_searchBar />
          <div className="container">
            <ul>
              <li className="title-ul">les étoiles</li>
              <li>toby fox</li>
              <li>polyphia</li>
              <li>beabadoobee</li>
            </ul>
            <ul>
              <li className="title-ul">votre top personelle</li>
              <li>grentperez</li>
              <li>ado</li>
              <li>xxtentation</li>
            </ul>
            <ul>
              <li className="title-ul">top de la semaine</li>
              <li>drake</li>
              <li>ziak</li>
              <li>katty perry</li>
            </ul>
          </div>
          <div className="favorite-artist"></div>
          <div className="content">
            <div className="artist"></div>
            <div className="artist"></div>
            <div className="artist"></div>
          </div>
        </div>
      </main>
    </>
  );
}
