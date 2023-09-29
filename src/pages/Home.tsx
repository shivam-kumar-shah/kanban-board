import BoardSection from "../components/board/BoardSection";
import Header from "../components/layout/header/Header";
import Nav from "../components/layout/nav/Nav";

type Props = {};

const Home = (props: Props) => {
  return (
    <div className="w-screen h-screen overflow-y-hidden">
      <Header />
      <main className="flex flex-row h-full relative pt-20 w-full">
        <Nav />
        <div className="pl-64 h-full bg-surface w-fit min-h-full min-w-full">
          <section className="p-6 flex flex-row gap-x-4 min-w-fit">
            <BoardSection />
            <BoardSection />
            <BoardSection />
          </section>
        </div>
      </main>
    </div>
  );
};

export default Home;
