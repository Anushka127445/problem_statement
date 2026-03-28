import { Globe, MessageCircle, Share2, Video, Mail, Heart } from 'lucide-react';
import { Link } from 'react-scroll';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8 border-t border-slate-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <Link to="home" smooth={true} duration={500} className="cursor-pointer inline-block mb-4">
              <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon to-neon-purple">HackOrbit</span>
                Reimagined
              </h2>
            </Link>
            <p className="text-slate-400 max-w-md mb-6 leading-relaxed">
              Empowering innovators to build the future. Join the most exciting hackathon of the year and turn your ideas into reality.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 rounded-full bg-slate-800 hover:bg-primary hover:text-white transition-colors duration-300">
                <Globe size={20} />
              </a>
              <a href="#" className="p-2 rounded-full bg-slate-800 hover:bg-[#1DA1F2] hover:text-white transition-colors duration-300">
                <MessageCircle size={20} />
              </a>
              <a href="#" className="p-2 rounded-full bg-slate-800 hover:bg-[#0A66C2] hover:text-white transition-colors duration-300">
                <Share2 size={20} />
              </a>
              <a href="#" className="p-2 rounded-full bg-slate-800 hover:bg-gradient-to-tr from-[#fd5949] to-[#d6249f] hover:text-white transition-all duration-300">
                <Video size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4 text-lg">Quick Links</h3>
            <ul className="space-y-3">
              {['About', 'Tracks', 'Timeline', 'Prizes', 'FAQ'].map((item) => (
                <li key={item}>
                  <Link
                    to={item.toLowerCase()}
                    smooth={true}
                    duration={500}
                    offset={-80}
                    className="hover:text-neon cursor-pointer transition-colors duration-300"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4 text-lg">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <Mail size={18} className="text-neon" />
                <a href="mailto:hello@hackorbit.com" className="hover:text-white transition-colors duration-300">
                  hello@hackorbit.com
                </a>
              </li>
              <li>
                <p className="text-slate-400">
                  Building 42, Innovation Hub<br />
                  Tech District, Silicon Valley
                </p>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-400">
            &copy; {currentYear} HackOrbit Reimagined. All rights reserved.
          </p>
          <div className="flex items-center gap-1 text-sm font-medium">
            Designed & Developed by <span className="text-white mx-1">Anushka Rathore</span>
            <Heart size={14} className="text-red-500 fill-red-500 animate-pulse" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
