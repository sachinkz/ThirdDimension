import React from 'react'

const Drop = ({ setModel, setError }) => {

    const handleFileSelection = (e) => {
        const file = e.target.files[0]
        const ext = file.name.split(".")[1]
        console.log(ext)
        if (ext === "glb") {
            setModel(file)
        } else {
            setError("File Format not supported")
        }
    }

    return (

        <div className="flex items-center justify-center w-full">
            <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-36 border-2 border-black border-dashed rounded-lg cursor-pointer ">
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    <svg className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                    </svg>
                    <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span></p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">.glb file only</p>
                </div>
                <input onChange={(e) => handleFileSelection(e)} id="dropzone-file" type="file" className="hidden" />
            </label>
        </div>

    )
}

export default Drop