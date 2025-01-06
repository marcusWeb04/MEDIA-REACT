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
