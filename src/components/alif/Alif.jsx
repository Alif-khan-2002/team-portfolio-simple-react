
import alif from '../../assets/ALIF_KHAN.png';
import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa';

const skill = ['HTML', 'CSS', 'Bootstrap', 'Tailwind CSS', 'JavaScript', 'TypeScrypt', 'React js', 'Next js', 'Redux js', 'Express js', 'Mongo DB', 'Mongooes', 'Node js', 'Git', 'Git Hub']

const Alif = () => {
    return (
        <div className='flex justify-center gap-5 items-center m-5 p-5 bg-[#614444]'>
            <div className='bg-white w-[400px] h-[550px]'>
                <img src={alif} className=' p-10 ' />
                <h1 className='text-center text-5xl mb-5 font-custom'>MD . Alif Khan</h1>
            </div>
            <div className='bg-white w-[400px] h-[550px]'>
                <h1 className='font-custom text-3xl text-center my-7 m-3' > Name : MD . Alif Khan</h1>
                <h1 className='font-custom text-xl text-center my-7 m-3' >Email : alifr2648@gmail.com</h1>
                <h1 className='font-custom text-xl text-center my-7 m-3' >Mobile : 01704347965</h1>
                <h1 className='font-custom text-xl text-center my-7 m-3' > Thakurgaon Polytechnic Institute</h1>
                <h1 className='font-custom text-xl text-center my-7 m-3' >Computer Science and Technology</h1>
                <a href='#' className='flex my-7' >
                    <FaFacebook className='font-custom text-4xl text-center mx-10  text-blue-500' />
                    <span> <code>@/mdalifkhan123</code> </span>
                </a>
                <a href='#' className='flex my-7' >
                    <FaLinkedin className='font-custom text-4xl text-center mx-10 text-blue-900' />
                    <span> <code>@/in/alifkhan2004/</code> </span>
                </a>
                <a href='#' className='flex my-7' >
                    <FaGithub className='font-custom text-4xl text-center mx-10 ' />
                    <span> <code>@/Alif-khan-2002</code> </span>
                </a>

            </div>
            <div className='bg-white w-[400px] h-[550px]'>
                <h1 className='text-center mt-10 text-3xl font-custom'>SKILL</h1>
                <div className='grid grid-cols-3 gap-5 m-5'>
                    {
                        skill.map((data, index) => (
                            <div key={index} className='bg-[#614444] mt-5 rounded-lg hover:bg-black text-white p-2 text-center font-custom'>{data}</div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default Alif;