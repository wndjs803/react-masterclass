import { Outlet } from "react-router-dom";
import Header from "./components/Header";

function Root() {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
}
{
  /* 
        Outlet은 이 컴포넌트의 자식을 render 할 때 사용된다.
        Root 밑에는 Home, About, User 등이 자식 컴포넌트가 있다.
      */
}
export default Root;
