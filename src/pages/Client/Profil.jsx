// style
// import "../../style/profil.css";
// image
import artistPref from "../../img/artist/artist-d-ace.png";
import playlistPref from "../../img/playlist/playlist.jpg";
import lastMusic from "../../img/album/1.png";
import favoriteMusic from "../../img/album/2.png";
import newMusic from "../../img/album/3.png";
// component
import _aside from "../../components/_aside";

export default function Profil() {
  return (
    <>
      <_aside />
      <main>
        <div className="top-container">
          <img id="my-favorite-artist" src={artistPref} />
          <img id="my-favorite-playlist" src={playlistPref} />
        </div>
        <ul id="list-parameter-user">
          <li>
            <img src={lastMusic} alt="" />
          </li>
          <li>
            <img src={favoriteMusic} alt="" />
          </li>
          <li>
            <img src={newMusic} alt="" />
          </li>
        </ul>
      </main>
    </>
  );
}
