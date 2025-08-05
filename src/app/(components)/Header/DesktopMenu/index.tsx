'use client';
// import Link from 'next/link';
import MenuValues from '../menu.json';
import { handleMenuScroll } from '../../../(utils)/MenuScroll';

export function DesktopMenu() {
  return (
    <menu className="w-full h-20">
      <ul className="w-full h-full flex gap-4 font-bold ">
        {MenuValues.map((menu) => (
          <button
            type="button"
            key={menu.id}
            onClick={() => handleMenuScroll(menu.id)}
            // href={menu.link}
            className="transition-all ease-linear duration-200 border-t-8 border-t-white hover:border-t-[#eaf4f4] hover:text-slate-500 min-w-24 flex justify-center items-center "
          >
            <li>{menu.name}</li>
          </button>
        ))}
      </ul>
    </menu>
  );
}
