import profilePic from '../assets/logo.jpg';

export default function Header(){
    return(
    <header className="bg-white flex justify-center items-center  top-0 z-10 h-[100px] w-full relative">
    
    <img
              src={profilePic}
              alt="Profile"
              className="w-24 h-24 rounded-full mb-4 border-4 border-blue-300 cursor-pointer absolute left-[10px]"
            />

       <nav className="space-x-6 text-lg ">
        
          <a href="/" className="text-gray-700 hover:text-blue-500 transition">Home</a>
          <a href="/products" className="text-gray-700 hover:text-blue-500 transition">Products</a>
          <a href="/about" className="text-gray-700 hover:text-blue-500 transition">About Us</a>
          <a href="/contact" className="text-gray-700 hover:text-blue-500 transition">Contact Us</a>
        </nav>     
     </header>
    )
}