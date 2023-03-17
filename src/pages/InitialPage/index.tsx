import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import InitialPageList from "../../components/InitialPageList";
import { Logo } from "../../components/Logo";
import { InitialPageStyle } from "./style";

const InitialPage = () => {
  document.title = "Kenzie Movies";

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.5 }}>
      <InitialPageStyle>
        <aside>
          <h2>Dev's que participaram deste projeto</h2>
          <InitialPageList />
        </aside>
        <section>
          <Logo />
          <p>
            Deseja organizar e compartilhar seus filmes favoritos? Faça parte do
            universo do Kenzie Movies e tenha acesso a informaçoẽs de diversos
            filmes, além de poder compartilhar seus filmes favoritos para os
            demais usuários cadastrados. Venha e desfrute do que incrível mundo
            cinematográfico tem a oferecer.
          </p>
          <Link to={"/login"}>Iniciar</Link>
        </section>
      </InitialPageStyle>
    </motion.div>
  );
};

export default InitialPage;
