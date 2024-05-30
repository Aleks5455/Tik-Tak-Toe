const GameOverModal = () => {
  return (
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
  );
};

export default GameOverModal;
