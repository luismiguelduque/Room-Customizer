import { Environment, OrbitControls, PerspectiveCamera } from "@react-three/drei"
import { ErrorBoundary } from "react-error-boundary"
import { Canvas } from "@react-three/fiber"

import { Room } from "./Room"
import { ErrorCatcher } from "./common/ErrorCatcher"

export const Viewer = () => {
    return (
        <ErrorBoundary FallbackComponent={ErrorCatcher}>
            <Canvas shadows>
                <color attach="background" args={['#fdfdfd']} />
                <PerspectiveCamera makeDefault position={[14, 8, 14]} fov={50} />
                <spotLight
                    position={[0, 15, 0]}
                    angle={0.3}
                    penumbra={1}
                    intensity={2}
                    castShadow
                    shadow-mapSize={[2048, 2048]}
                />
                <ambientLight intensity={0.3} />
                <Environment preset="apartment" />

                <Room />

                <OrbitControls
                    makeDefault
                    minPolarAngle={0}
                    maxPolarAngle={Math.PI / 2.1}
                    minAzimuthAngle={0}
                    maxAzimuthAngle={Math.PI / 2}
                    minDistance={2}
                    maxDistance={30}
                />
            </Canvas>
        </ErrorBoundary>
    )
}
