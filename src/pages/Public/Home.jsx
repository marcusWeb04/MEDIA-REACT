// style
import "../../style/home.css";

// fonction
import { NavLink } from "react-router-dom";

export default function Home() {
  return (
    <>
      <section id="home">
        <form>
          <div>
            <label htmlFor="email">email:</label>
            <input type="text" name="" />
          </div>
        </form>
      </section>
    </>
  );
}
