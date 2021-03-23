// components
import FormSignup from "../../components/FormSignup";

// styles
import { usePageLogin } from "../../styles/makeStyles";

const Signup = () => {
  const classes = usePageLogin();

  return (
    <div className={classes.root}>
      <FormSignup />
    </div>
  );
};
export default Signup;
