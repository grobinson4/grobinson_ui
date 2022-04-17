import * as THREE from 'three'
import ReactDOM from 'react-dom'
import React, { useRef, useState } from 'react'
import { Suspense } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Environment } from '@react-three/drei'
import { OrbitControls, Stage } from '@react-three/drei'
import './style.css'

import Model from '../../components/Models/tv'


function Box(props) {
// This reference gives us direct access to the THREE.Mesh object
const ref = useRef()
// Hold state for hovered and clicked events
const [hovered, hover] = useState(false)
const [clicked, click] = useState(false)
// Subscribe this component to the render-loop, rotate the mesh every frame
useFrame((state, delta) => (ref.current.rotation.x += 0.01))
// Return the view, these are regular Threejs elements expressed in JSX
return (
  <mesh
    {...props}
    ref={ref}
    scale={clicked ? 1.5 : 1}
    onClick={(event) => click(!clicked)}
    onPointerOver={(event) => hover(true)}
    onPointerOut={(event) => hover(false)}>
    <sphereGeometry args={[1.7, 32]} />
    <meshStandardMaterial color={hovered ? 'hotpink' : 'green'} />
  </mesh>
)
        
  };

  const Scene = () => {
    const ref = useRef()
    return class extends React.Component {
      render() {
        
        return (
      <>
      <div id='canvas-container'>
        
      <Canvas dpr={[1,2]} camera={{ fov: 12 }} shadows>
      <color attach="background" args={['#ffffff']} />
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Suspense fallback={null}>
          <Model />
          {/* <Environment preset="sunset" background /> */}
        </Suspense>
        <OrbitControls ref={ref} autoRotate />
      {/* <Box position={[0, 0, 0]} /> */}
      {/* <Box position={[1.2, 0, 0]} /> */}
    </Canvas>
    </div>
      </>
        )
      }
    }
}

//   ReactDOM.render(
//     <Canvas>
//       <ambientLight />
//       <pointLight position={[10, 10, 10]} />
//       <Box position={[-1.2, 0, 0]} />
//       <Box position={[1.2, 0, 0]} />
//     </Canvas>,
//     document.getElementById('root'),
//   )



  export default Scene;