import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import { CgClose } from 'react-icons/cg';

const ModelViewer = ({ model,close }) => {

    return (
            <div className='h-36 w-full  border-black rounded-lg  relative modelbg shadow-lg shadow-black/50' >
                <Canvas >
                    <ambientLight intensity={10} />
                    <spotLight position={[10, 10, 10]} angle={0.5} intensity={10} penumbra={1} />
                    <pointLight position={[-10, -10, -10]} />
                    <GLTFModel url={URL.createObjectURL(model)} />
                    <OrbitControls />
                </Canvas>
                <CgClose onClick={()=>close(null)} className='absolute -top-3 bg-red-600 cursor-pointer text-white h-5 w-5 rounded-full -right-3'/>
            </div>
    );
};

const GLTFModel = ({ url }) => {
    const { scene } = useGLTF(url);
    return <primitive object={scene} />;
};

export default ModelViewer;
