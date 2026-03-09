interface Props {
    width: number;
    position: [x: number, y: number, z: number];
    rotation?: [x: number, y: number, z: number];
}

export const WallBaseboard = ({ width, position, rotation }: Props) => {
    return (
        <mesh position={position} rotation={rotation}>
            <boxGeometry args={[width, 0.15, 0.02]} />
            <meshStandardMaterial color="#ffffff" />
        </mesh>
    )
}
