import { useOutletContext } from "react-router-dom";

interface IFollowersContext {
  nameOfMyUsr: string;
}

function Followers() {
  const { nameOfMyUsr } = useOutletContext<IFollowersContext>();
  return <h1>Here are {nameOfMyUsr}의 followers</h1>;
}

export default Followers;
