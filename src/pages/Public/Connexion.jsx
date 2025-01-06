export default function Connexion() {
  // on recupere les informations du formulaire
  return (
    <>
      <h2>Connexion</h2>
      <form action="#" method="post">
        <div>
          <label htmlFor="name">entrer votre nom: </label>
          <input type="text" name="name" />
        </div>
        <div>
          <label htmlFor="password">entrer votre mot de passe: </label>
          <input type="password" name="password" />
        </div>
        <button>Valider</button>
      </form>
    </>
  );
}
