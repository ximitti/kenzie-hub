// components
import FormLogin from "../../components/FormLogin";

// styles
import { usePageLogin } from "../../styles/makeStyles";

const Login = () => {
  const classes = usePageLogin();

  return (
    <div className={classes.root}>
      <FormLogin />
    </div>
  );
};
export default Login;
