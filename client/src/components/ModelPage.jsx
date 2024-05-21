import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import { CgClose } from 'react-icons/cg';

const ModelPage = ({ model, close }) => {

    return (
        <div className='h-screen p-10 w-full z-50 bg-[#000000d7]  fixed top-0 left-0' >
            <div className=' modelbg relative w-full h-full rounded-2xl'>

                <Canvas >
                    <ambientLight intensity={5} />
                    <spotLight position={[10, 10, 10]} angle={20} penumbra={1} />
                    <pointLight position={[-10, -10, -10]} />
                    <GLTFModel url={`https://third-dimension.onrender.com/${model.modelUrl}`} />
                    <OrbitControls />
                </Canvas>
            <CgClose onClick={() => close(null)} className='absolute -top-5 bg-red-600 cursor-pointer text-white h-7 w-7 rounded-full -right-5' />
            </div>
        </div>
    );
};

const GLTFModel = ({ url }) => {
    const { scene } = useGLTF(url);
    return <primitive object={scene} />;
};

export default ModelPage;
