// style
import "../../style/home.css";

// fonction
import { NavLink } from "react-router-dom";

export default function Home() {
  return (
    <>
      <section id="home">
        <form className="form-connexion">
          <div>
            <label htmlFor="email">email:</label>
            <input type="text" name="" />
          </div>
          <div>
            <label htmlFor="password">mot de passe:</label>
            <input type="password" name="password" />
          </div>
          <button>Valider</button>
        </form>
      </section>
    </>
  );
}
