import { createContext } from "react";
import type { FloorTexture, WallColor } from "../data/RoomConfigOptions";

export interface RoomCustomizerContextProps {
    currentFloorTexture: FloorTexture;
    currentWallsColor: WallColor;
    changeFloorTexture: (id: string) => void;
    changeWallsColor: (id: string) => void;
}

export const RoomCustomizerContext = createContext({} as RoomCustomizerContextProps);