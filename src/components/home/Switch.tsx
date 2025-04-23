"use client";
import { useContext } from "react";
import { Switch as OnceSwitch } from "@/once-ui/components";
import { GameModeContext } from "../GameModeProvider";

export const Switch = () => {
  const { gameMode, toggleGameMode } = useContext(GameModeContext);

  return (
    <OnceSwitch
      // label={gameMode ? "Dev Portfolio" : "Game Dev"}
      //   description="Feature description"
      isChecked={gameMode}
      onToggle={() => toggleGameMode()}
      //   iconButtonProps={{
      //     onClick: handleOnClick,
      //     tooltip: "Learn more",
      //     tooltipPosition: "top",
      //   }}
    />
  );
};
