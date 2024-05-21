import { useEffect, useState } from 'react'
import axios from 'axios'
import painting from '../assets/painting.jpeg';
import GradientBanner from './GradientBanner'
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'
import { GiPriceTag } from 'react-icons/gi'
import { Link } from 'react-router-dom'
import Card from './Card'
import ModelPage from './ModelPage';

function Home() {
    const [models, setModels] = useState(null)
    const [showModel,setShowModel]=useState(null)

    useEffect(()=>{
        fetchUploads()
    },[])

    const fetchUploads=async()=>{
        try{
            const res=await axios.get("https://third-dimension.onrender.com/api/get-models")
            if(res.data){
                setModels(res.data)
            }
        }catch(err){
            console.log(err)
        }
    }

    return (
        <div className='w-full flex justify-center flex-col min-h-screen bg-gradient-to-b '>
            <GradientBanner />
            <div className="flex justify-between items-center pt-16 mx-[14%] max-md:mx-2 h-screen border-primary/20 pb-16 px-2">
                <div className="w-1/2 max-lg:w-full flex flex-col gap-5">
                    <h1 className="text-7xl font-extrabold max-xl:text-6xl leading-tight text-primary">Get High Quality 3D models</h1>
                    <p className="text-primary/90 text-lg">Or upload 3d model which you have created </p>
                    <div className="flex gap-8 mt-4 z-0 items-center">
                        <Link to={"/upload"}><button className=" rounded-3xl flex items-center font-semibold pl-6 hover:bg-primary/80">Upload<MdOutlineKeyboardArrowRight className="h-5 w-5 mt-1" />   </button></Link>
                        <a href="#posts"><p className="text-primary hover:text-primary/60  font-bold flex text-sm justify-between cursor-pointer  h-full items-center">Browse Models<MdOutlineKeyboardArrowRight className="h-5 w-5 rotate-90 mt-0.5" /></p></a>
                    </div>
                </div>
                <div className="w-1/2 max-lg:hidden relative  flex justify-center  items-center ">
                    <div className="absolute shadow-xl px-5 pt-5 right-0  w-3/4">
                        <img className=" w-full h-[500px] object-cover rounded-lg shadow-inner bg-white/20  " src={painting} alt="" />
                        <h1 className="flex items-center gap-2 text-sm font-thin p-1 justify-end text-primary/80"><GiPriceTag className="h-4 w-4 text-primary/20" /> FOR SALE</h1>
                    </div>
                </div>
            </div>
            <div className='w-full min-h-screen bg-rose-100 mt-10 px-[14%] py-10' id='posts'>
                <div className='w-full flex flex-col items-center gap-10 p-5'>
                    <h1 className='text-3xl font-bold'>Models</h1>
                    <div className='w-full h-full grid grid-cols-3 gap-5'>
                        {models?.map((model)=><Card key={model._id} setShowModel={setShowModel} model={model}/>)}
                    </div>
                </div>
            </div>
            {showModel && <ModelPage close={setShowModel} model={showModel}/>}
        </div>
    )
}

export default Home
