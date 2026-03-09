import { useTexture } from '@react-three/drei'
import type { Texture } from 'three/src/Three.js';

interface Props {
    url: string;
    width?: number;
    height?: number;
    position?: [x: number, y: number, z: number];
    rotation?: [x: number, y: number, z: number];
}

export const WallPrinting = ({ url, width = 10, height = 3, ...props }: Props) => {
    const texture: Texture<unknown> = useTexture(url)

    return (
        <mesh {...props}>
            <planeGeometry args={[width, height]} />
            <meshStandardMaterial
                map={texture}
                transparent={true}
                alphaTest={0.5}
                side={2}
            />
        </mesh>
    )
}
