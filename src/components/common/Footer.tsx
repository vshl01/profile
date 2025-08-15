import {
  FaFacebookF,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-black border-t border-gray-800 py-6">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Copyright */}
        <p className="text-gray-400 text-sm">
          © {new Date().getFullYear()}{" "}
          <span className="text-white font-medium">Vishal</span>. All Rights
          Reserved.
        </p>

        {/* Social Links */}
        <div className="flex gap-4 text-lg">
          <a
            href="https://github.com/vshl01"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://instagram.com/viishall.01"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-pink-500 transition"
          >
            <FaInstagram />
          </a>
          <a
            href="https://linkedin.com/in/vshl01"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-400 transition"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="https://x.com/vshl01_"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition"
          >
            <FaXTwitter />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
