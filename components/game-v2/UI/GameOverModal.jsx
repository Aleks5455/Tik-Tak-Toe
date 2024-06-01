import UIButton from "../../UIkit/ui-button.jsx";
import UiModal from "../../UIkit/ui-modal.jsx";

const GameOverModal = ({ winnerName, players }) => {
  return (
    <UiModal
      width="md"
      isOpen={winnerName}
      onClose={() => console.log("close")}
    >
      <UiModal.Header>Game Over!</UiModal.Header>
      <UiModal.Body>
        <div className="text-sm">
          Winner: <span className="text-teal-600">{winnerName}</span>
        </div>
        <div className="justify-between grid grid-cols-2 gap-3 mt-2">{players}</div>
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
  );
};

export default GameOverModal;
