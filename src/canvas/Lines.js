import * as THREE from 'three'

import { extend, useFrame } from "@react-three/fiber"

import { MeshLineGeometry, MeshLineMaterial} from 'meshline'
import { useLayoutEffect, useMemo, useRef } from 'react'
import { useLocation } from 'react-router-dom'
import { gsap } from 'gsap'
extend({ MeshLineGeometry, MeshLineMaterial })

export default function Lines(){
    return (
        <GenLines 
        dash={1.0} 
        count={20} 
        radius={8} 
        colors={['#64FF95', '#F7F5EB']}
        />
    )
}

function GenLines({ dash, count, colors, radius = 10, rand = THREE.MathUtils.randFloatSpread }) {
    const lines = useMemo(() => {
        return Array.from({ length: count }, () => {
        const pos = new THREE.Vector3(0,0,0)
        const points = Array.from({ length: 10 }, () => pos.add(new THREE.Vector3(rand(radius), rand(radius), rand(radius))).clone())
        const curve = new THREE.CatmullRomCurve3(points).getPoints(200)
        return {
            color: colors[parseInt(colors.length * Math.random())],
            width: 0.05,
            speed: Math.max(0.10, 0.10 * Math.random()),
            curve: curve.flatMap((point) => point.toArray())
        }
        })
    }, [])

    return lines.map((props, index) => <Fatline key={index} dash={dash} {...props} />)
}
    
function Fatline({ curve, width, color, speed, dash }) {

    const location = useLocation()
    const ref = useRef()
    useFrame((_, delta) => {
        ref.current.material.dashOffset -= (delta * speed) / 10
    })

    useLayoutEffect(() => {
        let dash = ref.current.material
        if (location.pathname === '/'){
            gsap.to(dash, {
                dashRatio: "0.5",
                duration: 1.25,
                ease: "power2.inOut"
            })
        }
        else{
            gsap.to(dash, {
                dashRatio: "0.99",
                duration: 1.25,
                ease: "power2.inOut"
            })
        }
    })
    return (
      <mesh ref={ref}>
        <meshLineGeometry points={curve} />
        <meshLineMaterial 
        transparent 
        lineWidth={width} 
        color={color} 
        depthWrite={false}
        depthTest={false}
        dashArray={0.1} 
        dashRatio={dash} 
        toneMapped={false}
        />
    </mesh>

    )
}
      