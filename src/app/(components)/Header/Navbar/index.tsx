import Image from 'next/image';
import Link from 'next/link';
import LogoLc from '../../../../../public/Logo RCB1-s:f.png';
import { DesktopMenu } from '../DesktopMenu';
import { MobileMenu } from '../MobileMenu';
import { FaWhatsapp } from 'react-icons/fa';

export function Navbar() {
  return (
    <>
      <nav
        className="w-full h-40 sticky top-0 z-50 bg-white shadow-md"
        id="navbar"
      >
        <div className="w-4/5 m-auto h-full flex items-center justify-between">
          <Link href="/">
            <Image
              src={LogoLc}
              width={350}
              alt="RCB Advocacia"
              title="RCB Advocacia"
            />
          </Link>

          <div className="2xl:block xl:block lg:block hidden">
            <DesktopMenu />
          </div>
          <div className="2xl:hidden xl:hidden lg:hidden block">
            <MobileMenu />
          </div>
          <a
            href="https://wa.me/5519971413322?text=Olá!%20Vi%20seu%20anúncio%20no%20Google%20e%20gostaria%20de%20falar%20com%20vocês."
            target="_blank"
            className="hidden lg:flex bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-full items-center gap-2 text-sm shadow-md"
          >
            <FaWhatsapp /> Fale conosco
          </a>
        </div>
      </nav>
    </>
  );
}
