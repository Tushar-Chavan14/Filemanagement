// Import Components
import MainContentLogin from "../../Login/Login";

// Import Styles
import global from "../Global.module.scss";

export default function Login() {
  return (
    <section className={global.parentContainer}>
      {/* Login Screen */}
      <section className={global.fullScreen}>
        <MainContentLogin />
      </section>
    </section>
  );
}
