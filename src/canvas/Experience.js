import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useLocation } from "react-router-dom";
import Lines from "./Lines";

const canvasStyle = {
    position: 'fixed',
    width: '100%',
    height: '100%'
}

export default function Experience(){

    const location = useLocation()
    console.log('Experience Render')
    return (
        <div 
        id='canvas-container'
        style={canvasStyle}>
            <Canvas camera={{position: [0,0,10]}}>
                <Lines />
                <OrbitControls />
            </Canvas>
        </div>
    )
}