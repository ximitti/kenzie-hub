// provider
import { useUserList } from "../../provider/userList";

// components
import UserDetail from "../../components/UserDetail";

// material ui
import ArrowLeftIcon from "@material-ui/icons/ArrowLeft";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";
import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";

// styles
import { useListStyles } from "../../styles/makeStyles";

// --------------------------------
const List = () => {
  const classes = useListStyles();
  const { userList, page, getPrevPage, getNextPage } = useUserList();

  return (
    <div className={classes.root}>
      <div className={classes.pageStyles}>
        <ArrowLeftIcon className={classes.arrowStyles} onClick={getPrevPage} />
        <span style={{ color: "black" }}>{page}</span>
        <ArrowRightIcon className={classes.arrowStyles} onClick={getNextPage} />
      </div>
      <div className={classes.listStyles}>
        {userList.map((user, index) => (
          <div key={index} className={classes.itemStyles}>
            <div className={classes.nameStyles}>{user.name}</div>
            <UserDetail user={user} />
          </div>
        ))}
      </div>
      <div>
        <a href="#top">
          <ArrowDropUpIcon />
        </a>
      </div>
    </div>
  );
};

export default List;
