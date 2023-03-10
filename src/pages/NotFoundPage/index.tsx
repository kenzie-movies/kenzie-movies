import { motion } from "framer-motion";
import { Logo } from "../../components/Logo";
import gif from "../../assets/notfound.gif";
import notfound from "../../assets/page-404.svg";
import { Link } from "react-router-dom";
import { NotFoundStyle } from "./style";

const NotFoundPage = () => {
  document.title = "404 - NotFound";

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.5 }}>
      <NotFoundStyle>
        <section className="section_one">
          <Logo />
          <div>
            <img src={notfound} alt="" />
            <h2>Parece que a página que você procura não existe.</h2>
            <Link to={"/"}>Home</Link>
          </div>
        </section>

        <section className="section_two">
          <img src={gif} alt="" />
        </section>
      </NotFoundStyle>
    </motion.div>
  );
};

export default NotFoundPage;
