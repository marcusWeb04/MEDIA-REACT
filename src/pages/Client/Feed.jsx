// component
import _aside from "../../components/_aside";
import _navUser from "../../components/_navUser";
// style css
import "../../style/feed.css";
// img
import album1 from "../../img/album/4.png";
import album2 from "../../img/album/5.png";
import album3 from "../../img/album/6.png";
import album4 from "../../img/album/7.png";
import album5 from "../../img/album/8.png";
import album6 from "../../img/album/9.png";
import album7 from "../../img/album/10.png";
import album8 from "../../img/album/11.png";

export default function Feed() {
  return (
    <>
      <_aside />
      <main>
        <_navUser />
        <div id="container-feed">
          <div className="music-feed">
            <img src={album1} alt="" />
          </div>
          <div className="music-feed">
            <img src={album2} alt="" />
          </div>
          <div className="music-feed">
            <img src={album3} alt="" />
          </div>
          <div className="music-feed">
            <img src={album4} alt="" />
          </div>
          <div className="music-feed">
            <img src={album5} alt="" />
          </div>
          <div className="music-feed">
            <img src={album6} alt="" />
          </div>
          <div className="music-feed">
            <img src={album7} alt="" />
          </div>
          <div className="music-feed">
            <img src={album8} alt="" />
          </div>
        </div>
      </main>
    </>
  );
}
