"use client";
import React, { createContext, SetStateAction, useState } from "react";
import { Header } from "./Header";
import { Flex } from "@/once-ui/components";
import { RouteGuard } from "./RouteGuard";

interface GameModeContextType {
  gameMode: boolean;
  toggleGameMode: () => void;
}

export const GameModeContext = createContext<GameModeContextType>({
  gameMode: true,
  toggleGameMode: () => {},
});

export const GameModeProvider = ({ children }) => {
  const [gameMode, toggleGameMode] = useState<boolean>(false);
  const handelToggle = () => {
    toggleGameMode((prev) => !prev);
  };
  return (
    <GameModeContext.Provider
      value={{ gameMode, toggleGameMode: handelToggle }}
    >
      <Header />
      <Flex
        zIndex={0}
        fillWidth
        paddingY="l"
        paddingX="l"
        justifyContent="center"
        flex={1}
      >
        <Flex justifyContent="center" fillWidth minHeight="0">
          <RouteGuard>{children}</RouteGuard>
        </Flex>
      </Flex>
    </GameModeContext.Provider>
  );
};
