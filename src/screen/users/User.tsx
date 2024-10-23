import { Link, Outlet, useParams } from "react-router-dom";
import users from "../../db";

function User() {
  const { userId } = useParams();
  return (
    <div>
      <h1>
        User with it {userId} is named: {users[Number(userId) - 1].name}
      </h1>
      <hr />
      <Link to="./followers">See Followers</Link>
      <Outlet
        context={{
          nameOfMyUsr: users[Number(userId) - 1].name,
        }}
      />
      {/* 
        Outlet은 이 컴포넌트의 자식을 render 할 때 사용된다.
        Followers component가 자식
      */}
    </div>
  );
}

export default User;
