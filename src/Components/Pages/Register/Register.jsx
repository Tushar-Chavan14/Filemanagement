// Import Components
import MainContentRegister from "../../Register/Register";

// Import Styles
import global from "../Global.module.scss";

export default function Register() {
  return (
    <section className={global.parentContainer}>
      {/* Register Screen */}
      <section className={global.fullScreen}>
        <MainContentRegister />
      </section>
    </section>
  );
}
