function Home() {
  const users: any = [];
  return <h1>{users[0].name}</h1>;
}
// users에는 name이라는 property가 없기 때문에 에러가 발생함
export default Home;
