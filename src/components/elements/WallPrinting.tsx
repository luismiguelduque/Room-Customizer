import { useTexture } from '@react-three/drei'

export const WallPrinting = ({ url, width = 10, height = 3, ...props }: any) => {
    const texture: any = useTexture(url)

    return (
        <mesh {...props}>
            <planeGeometry args={[3, 2]} />
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
