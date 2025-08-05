import { LuBrain } from 'react-icons/lu';
import { BannerPageProps } from './banner-pages';
export function BannerPages({ title }: BannerPageProps) {
  return (
    <section className="w-full bg-[#C9AA8E] h-14 py-3 mb-12">
      <div className="w-4/5 m-auto flex items-center gap-2">
        <LuBrain className="text-white" size={20} />
        <h2 className="text-white text-xl">{title}</h2>
      </div>
    </section>
  );
}
