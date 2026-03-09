import { createContext, useState, type PropsWithChildren } from "react"
import { FLOOR_TEXTURES, WALL_COLORS, type FloorTexture, type WallColor } from "../data/RoomConfigOptions";

interface RoomCustomizerContextProps {
    currentFloorTexture: FloorTexture;
    currentWallsColor: WallColor;
    changeFloorTexture: (id: string) => void;
    changeWallsColor: (id: string) => void;
}

export const RoomCustomizerContext = createContext({} as RoomCustomizerContextProps);

export const RoomCustomizerContextProvider = ({ children }: PropsWithChildren) => {

    const [floorTexture, setFloorTexture] = useState<FloorTexture>(FLOOR_TEXTURES[0]);
    const [wallsColor, setWallsColor] = useState<WallColor>(WALL_COLORS[0]);

    const handleFloorTextureChange = (id: string) => {
        const newTexture = FLOOR_TEXTURES.find((item) => item.id === id);
        setFloorTexture((prev) => newTexture ?? prev)
    }
    const handleWallsColorChange = (id: string) => {
        const newColor = WALL_COLORS.find((item) => item.id === id);
        setWallsColor((prev) => newColor ?? prev)
    }

    return (
        <RoomCustomizerContext value={{
            currentFloorTexture: floorTexture,
            currentWallsColor: wallsColor,
            changeFloorTexture: handleFloorTextureChange,
            changeWallsColor: handleWallsColorChange,
        }}>
            {children}
        </RoomCustomizerContext>
    )
}
