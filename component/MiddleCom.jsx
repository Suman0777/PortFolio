import React from 'react'
import { useNavigate } from 'react-router-dom'
import Buttonicon from '../BuildsSmall/Buttonicon';

const MiddleCom = () => {
    const Navigate = useNavigate();

  return (
    <div className='m-24 mx-auto max-w-3xl justify-center'>
        
        <div className=' flex gap-1 pb-2 '>
            <Buttonicon label="About" to="/about" />
            <img className='w-3 h-3' src="/Linkkss.png" alt="" />
        </div>
        
        

        <div className='flex gap-20 mx-auto max-w-3xl justify-center'>
            {/* Left side Content*/}
        <div>
                <h1 className=' font-semibold'>
                    Hi, I’m Suman, a full-stack developer passionate about building clean, scalable, and user-first web applications. I enjoy turning complex ideas into reliable products that ship, scale, and create real impact. With a strong problem-solving mindset, I focus on crafting seamless user experiences backed by robust, efficient systems. I love simplifying challenges, writing maintainable code, and collaborating on meaningful products that people genuinely enjoy using. Driven by curiosity and a desire to grow, I’m always learning, building, and pushing myself to deliver high-quality solutions that matter.
                </h1>
        </div>

        {/* Right side Content */}
        <div className="w-[560px] h-64 rounded-3xl overflow-hidden bg-black/10 backdrop-blur-md">
            <img
                src="/background.png"
                alt=""
                className="w-full h-full object-cover"
            />
        </div>

        </div>
        
    </div>
)
}

export default MiddleCom