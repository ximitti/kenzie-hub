// provider
import { useUserList } from "../../provider/userList";

// components
import UserDetail from "../../components/UserDetail";

// --------------------------------
const List = () => {
  const { userList, page, getPrevPage, getNextPage } = useUserList();

  return (
    <div>
      <div>
        <button onClick={getPrevPage}>Prev</button>
        <span style={{ color: "black" }}>{page}</span>
        <button onClick={getNextPage}>Next</button>
      </div>
      <div>
        {userList.map((user, index) => (
          <div key={index}>
            <div style={{ color: "black" }}>{user.name}</div>
            <UserDetail user={user} />
          </div>
        ))}
      </div>
      <div>
        <a href="#top">Top</a>
      </div>
    </div>
  );
};

export default List;
