import { use } from "react";
import { RoomCustomizerContext } from "../../context/RoomCustomizerContext";

interface Props {
    position: [x: number, y: number, z: number];
    args: [x: number, y: number];
    rotation?: [x: number, y: number, z: number];
}

export const Wall = ({ position, args, rotation }: Props) => {

    const { currentWallsColor } = use(RoomCustomizerContext);

    return (
        <mesh rotation={rotation} position={position} receiveShadow>
            <planeGeometry args={args} />
            <meshBasicMaterial color={currentWallsColor.value} />
        </mesh>
    )
}
