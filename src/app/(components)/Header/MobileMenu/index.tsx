'use client';
import { useState } from 'react';
// import { useRouter } from 'next/navigation';
import { IoMdMenu, IoMdClose } from 'react-icons/io';
import Image from 'next/image';

import LogoLc from '../../../../../public/Logo RCB1-s:f.png';

import MenuValues from '../menu.json';
import { handleMenuScroll } from '@/app/(utils)/MenuScroll';

export function MobileMenu() {
  // const router = useRouter();
  const [show, setShow] = useState(false);

  const handleLink = (id: string) => {
    setShow(false);
    handleMenuScroll(id);
    // router.push(link);
  };

  return (
    <>
      <button type="button" onClick={() => setShow(true)}>
        <IoMdMenu size={24} className="text-[#C9AA8E]" />
      </button>
      <menu
        data-show={show}
        className="fixed top-0 right-0 transition-all duration-500 ease-linear data-[show=false]:w-0 data-[show=false]:invisible visible w-3/4 overflow-x-hidden h-svh bg-slate-200 z-10 shadow-lg"
      >
        <div className="w-full flex justify-between items-center mb-12 mt-6 gap-4 px-6">
          <Image src={LogoLc} width={300} alt="RCB Advocacia" />
          <button type="button" onClick={() => setShow(false)}>
            <IoMdClose className="text-white" size={24} />
          </button>
        </div>
        <ul className="w-full flex flex-col gap-4 text-white font-bold ">
          {MenuValues.map((menu) => (
            <button
              key={menu.id}
              type="button"
              onClick={() => handleLink(menu.id)}
              className="w-full bg-slate-300 hover:bg-slate-400 hover:text-black transition-all duration-500 px-6 py-2"
            >
              <li className="transition-all ease-linear duration-200 ml-0 hover:ml-3 ">
                {menu.name}
              </li>
            </button>
          ))}
        </ul>
      </menu>
    </>
  );
}
