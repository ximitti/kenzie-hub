// global state
import { AuthProvider } from "../provider/authentication";
import { UserProvider } from "../provider/user";
import { UserListProvider } from "../provider/userList";

// ------------------------------------------
const Providers = ({ children }) => {
  return (
    <AuthProvider>
      <UserProvider>
        <UserListProvider>{children}</UserListProvider>
      </UserProvider>
    </AuthProvider>
  );
};

export default Providers;
