import { Link } from "react-router-dom";
import RegisterForm from "../../components/Forms/RegisterForm";
import { Logo } from "../../components/Logo";
import { RegisterPageStyle } from "./style";
import { motion } from "framer-motion";

const RegisterPage = () => {
  document.title = "Cadastro";

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.5 }}>
      <RegisterPageStyle>
        <motion.header
          initial={{ y: -200 }}
          animate={{ y: 0 }}
          exit={{ y: 200 }}
          transition={{ duration: 2 }}>
          <Logo />
          <Link to={"/login"}>Login</Link>
        </motion.header>
        <RegisterForm />
      </RegisterPageStyle>
    </motion.div>
  );
};

export default RegisterPage;
