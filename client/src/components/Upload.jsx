import { useState } from 'react'
import ModelViewer from '../components/ModelViewer'
import axios from 'axios'
import pic from '../assets/pencilDrawing.jpeg'
import Drop from './Drop'
import GradientBanner from './GradientBanner'
import { useNavigate } from 'react-router-dom'
import { FaUpload } from 'react-icons/fa'
import { BiLoader } from 'react-icons/bi'
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

function Upload() {
    const [model, setModel] = useState(null)
    const [thumbnail, setThumbnail] = useState(null)
    const [title, setTitle] = useState("")
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)

    const handlePost = async (e) => {
        e.preventDefault()
        setLoading(true)
        if (!model | !thumbnail | !title) {
            setError("Please Fill all fields")
            setLoading(false)
            return;
        }
        try {
            const formData = new FormData();
            formData.append("model", model);
            formData.append("thumbnail", thumbnail);
            formData.append("title", title);
            await axios.post('https://third-dimension.onrender.com/api/upload-model', formData)
            setLoading(false)
            setModel(null)
            setThumbnail(null)
            setTitle("")
            toast("Model uploaded successfully");
        } catch (err) {
            console.log(err)
            setLoading(false)
            toast("Failed To Upload Model")
        }
    }


    return (
        <div className='w-full flex px-[14%] max-md:p-[5%] justify-center items-center min-h-screen bg-gradient-to-b '>
            <GradientBanner />
            <div className='w-full flex mt-20 z-10'>
                <div className='w-1/2 max-lg:w-full max-lg:rounded-r-xl bg-white rounded-l-xl shadow-lg shadow-black/50 '>
                    <form onSubmit={(e) => handlePost(e)} className='w-full border-x px-14 max-md:px-4 border-black/10 flex items-center flex-col gap-10 pb-10' action="">
                        <h1 className='text-2xl font-semibold mt-10'>Upload Your 3D model</h1>
                        {model ? <ModelViewer close={setModel} model={model} /> : <Drop setModel={setModel} setError={setError} />}
                        <div className='w-full flex flex-col gap-5'>
                            <div className='flex flex-col gap-2 w-full text-black/70 font-semibold'>
                                <label htmlFor="title">Add a title</label>
                                <input id='title' onChange={(e) => setTitle(e.target.value)} type="text" className='border-2 px-2 py-1 rounded-lg border-black/50' placeholder='Enter a title' />
                            </div>
                            <div className='flex flex-col gap-1.5 w-full text-black/70 font-semibold'>
                                <label htmlFor="thumbnail">Add a thumbnail image</label>
                                <input onChange={(e) => setThumbnail(e.target.files[0])} id='thumbnail' accept=".jpg,.png,.jpeg" type="file" className='border-2  py-0.5 pl-0.5 rounded-lg border-black/50' />
                            </div>
                        </div>
                        {error !== "" && <p className='text-sm text-red-500 text-center'>{error}</p>}
                        <button disabled={loading} className={`w-[200px] flex justify-center items-center gap-2 ${loading && "cursor-not-allowed bg-black/50"}`} type='submit'>Upload model {loading ? <BiLoader className='animate-spin h-5 w-5'/> : <FaUpload />}</button>
                    </form>
                </div>
                <div className='w-1/2 max-lg:hidden bg-white flex justify-center rounded-r-xl relative shadow-lg shadow-black/50'>
                    <img className='h-full object-cover brightness-75 aspect-square rounded-r-xl' src={pic} alt="" />
                    <h1 className='absolute top-14 font-bold text-white uppercase text-2xl tracking-widest'>Third Dimension</h1>
                    <p className='absolute text-white top-24 uppercase font-thin text-xs'>Free High Definition 3D models</p>
                </div>
            </div>
            <ToastContainer/>
        </div>
    )
}

export default Upload
