import LoginForm from "../../components/Forms/LoginForm";
import { Logo } from "../../components/Logo";
import { LoginPageStyle } from "./style";
import { motion } from "framer-motion";

const LoginPage = () => {
  document.title = "Login";

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.5 }}>
      <LoginPageStyle>
        <motion.header
          initial={{ y: -200 }}
          animate={{ y: 0 }}
          exit={{ y: 200 }}
          transition={{ duration: 2 }}>
          <Logo />
        </motion.header>

        <LoginForm />
      </LoginPageStyle>
    </motion.div>
  );
};

export default LoginPage;
