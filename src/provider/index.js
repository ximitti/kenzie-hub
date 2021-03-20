// global state
import { AuthProvider } from "../provider/authentication";
import { UserProvider } from "../provider/user";

// ------------------------------------------
const Providers = ({ children }) => {
  return (
    <AuthProvider>
      <UserProvider>{children}</UserProvider>
    </AuthProvider>
  );
};

export default Providers;
