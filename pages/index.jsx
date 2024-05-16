import Header from "../components/header/header";
import Title from "../components/game/title";
import GameInfo from "../components/game/game-info";
import GameField from "../components/game/game-field";

const HomePage = () => {
  return (
    <div className="bg-slate-50 min-h-screen">
      <Header />
      <main className="pt-6 mx-auto w-max">
        <Title />
        <GameInfo className="mt-4" />
        <GameField className="mt-6" />
      </main>
    </div>
  );
};

export default HomePage;
