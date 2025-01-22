import { FaDiscord } from 'react-icons/fa';
//  FaBook

const Header = () => {
  return (
    <nav className="relative z-50 backdrop-blur-sm bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <img src="https://files.catbox.moe/bu8ygj.png" alt="Nebula" className="w-12 h-12" />
            <span className="text-xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">Cubix</span>
          </div>
          <div className="flex items-center space-x-5">
            <a
              href="https://discord.gg/Fwq4EAKsa8"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 hover:text-white transition-colors"
              title="Discord"
            >
              <FaDiscord className="w-6 h-6" />
            </a>
            
{/*             <a
              href="https://docsnebula.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 hover:text-white transition-colors flex items-center space-x-1"
              title="Documentation"
            >
              <FaBook className="w-5 h-5" />
            </a> */}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
