import Container from "./Category/Container";
import Superiority from "./Superiority/superiorityContainer";

const HomePage = () => {
  return (
    <>
      <div className="w-full p-16 flex justify-center">
        <Container />
      </div>
      <div className="w-full flex justify-center bg-stone-200">
        <Superiority />
      </div>
    </>
  );
};
export default HomePage;
