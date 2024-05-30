import Header from "../components/header/header";
import Game from "../components/game-v2/Game";

const HomePage = () => {

  return (
    <HomePageLayout header={<Header />}>
      <Game />
    </HomePageLayout>
  );
};

export default HomePage;

function HomePageLayout({ header, children }) {
  return (
    <div className="bg-slate-50 min-h-screen">
      {header}
      <main className="pt-6 mx-auto w-max">{children}</main>
    </div>
  );
}
