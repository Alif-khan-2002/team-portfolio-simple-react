import React from 'react'
function Nifad() {
  return (
    <div className='w-full min-h-screen bg-slate-900 text-slate-50'>
      <div className='xl:w-[80%] w-full   mx-auto min-h-screen bg-slate-800 shadow-2xl xl:shadow-yellow-500 py-8'>
        {/* Herro section*/}
        <div className=' w-full md:flex md:flex-row flex-col flex justify-between items-center h-[450px] '>
          <div className='md:w-1/2  w-full h-full relative bg-slate-800 grid place-items-center'>
              <div className='w-[300px] h-[300px]   rounded-full overflow-hidden shadow-xl border-2 drop-shadow-md border-orange-500/90 relative cursor-pointer box-border '>
                <img src="/nifad_profile.jpg" alt=""  className='w-full h-full hover:scale-105 transition-all duration-700 blur-[1px] hover:blur-0'/>
              </div>
                <p className='absolute bottom-10 text-slate-600 text-lg font-serif '>Hover to see</p>
            </div>
            <div className='md:w-1/2 w-full  h-full bg-slate-800 flex items-center gap-6 flex-col justify-center font-bold tracking-widest'>
              <h1 className='text-5xl text-orange-500'>Md Nifad Uzzaman</h1>
              <p className='text-base text-slate-400 font-serif'>I love reading books.</p>
            </div> 
        </div>
        <div className='w-[80%] mx-auto h-[1px] bg-slate-500 mt-28 '>
        </div>

        {/* About section */}
        <div className='flex w-full h-[300px] text-4xl text-slate-700 tracking-widest bg-slate-800 justify-center items-center font-serif'>
          Will be written here soon.
        </div>
      </div>
    </div>
  )
}
export default Nifad
