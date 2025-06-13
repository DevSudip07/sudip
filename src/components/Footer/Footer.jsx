import { FaGithub } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
const Footer = () => {
  return (
    <>
        <footer className="w-full h-[50vh] flex justify-between mt-15 pt-5 px-40">
            <div className="socialLinks w-fit h-full flex flex-col justify-between gap-3 opacity-80 text-center">
                <a className='text-2xl' href=""><FaGithub /></a>
                <a className='text-2xl' href=""><AiFillInstagram /></a>
                <a className='text-2xl' href=""><FaGithub /></a>
                <a className='text-2xl' href=""><FaGithub /></a>
                <a className='text-2xl' href=""><FaGithub /></a>
                <div className="w-0.5 h-30 mx-auto bg-white"></div>
            </div>

            <div className="socialLinks w-8 h-full flex flex-col justify-between gap-25 opacity-80 text-center">
                <a className='text-lg rotate-90' href="">developersudip@gmail.com</a>
                <div className="w-0.5 h-30 mx-auto bg-white"></div>
            </div>
        </footer>   
    </>
  )
}

export default Footer