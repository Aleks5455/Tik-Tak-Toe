import Header from "../components/header/header";
import Title from "../components/game/title";
import GameInfo from "../components/game/game-info";
import GameField from "../components/game/game-field";
import { useState } from "react";
import { useGameState } from "../components/game/gameState";
import UiModal from "../components/UIkit/ui-modal";
import UIButton from "../components/UIkit/ui-button";

const HomePage = () => {
  const [playersCount] = useState(4);
  const {
    cells,
    currentMove,
    nextMove,
    CellClick,
    winnerSequence,
    handlePlayerTimeOver,
    winnerSymbol,
  } = useGameState(playersCount);

  return (
    <div className="bg-slate-50 min-h-screen">
      <Header />
      <main className="pt-6 mx-auto w-max">
        <Title playersCount={playersCount} />
        <GameInfo
          playersCount={playersCount}
          currentMove={currentMove}
          className="mt-4"
          isWinner={winnerSymbol}
          onPlayerTimeOver={handlePlayerTimeOver}
        />
        <UiModal width="md" isOpen={winnerSymbol}>
          <UiModal.Header>Game Over!</UiModal.Header>
          <UiModal.Body>
            <div className="text-sm">
              Winner: <span className="text-teal-600">Aleks5455</span>
            </div>
          </UiModal.Body>
          <UiModal.Footer>
            <UIButton size="medium" type="outline">
              Go Back
            </UIButton>
            <UIButton size="medium" type="filled">
              {" "}
              Play Again
            </UIButton>
          </UiModal.Footer>
        </UiModal>

        <GameField
          cells={cells}
          currentMove={currentMove}
          nextMove={nextMove}
          CellClick={CellClick}
          className="mt-6"
          winnerSequence={winnerSequence}
          winnerSymbol={winnerSymbol}
        />
      </main>
    </div>
  );
};

export default HomePage;
