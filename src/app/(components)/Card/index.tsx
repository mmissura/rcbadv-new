import Image from 'next/image';
import { CardProps } from './card';

export const Card = ({ image, title, subtitle, description }: CardProps) => {
  return (
    <div className="w-full sm:w-[90%] md:w-[45%] xl:w-[30%] flex flex-col items-center bg-slate-200 p-4 rounded-lg overflow-hidden shadow-md">
      <div className="flex-shrink-0">
        <Image
          src={image}
          alt="RCB Advocacia"
          placeholder="blur"
          width={300}
          height={300}
          className="rounded-md object-cover"
        />
      </div>
      <div className="w-full">
        <h2 className="font-bold text-xl text-center xl:text-left mt-6">
          {title}
        </h2>
        <h4 className="font-light 2xl:text-lg xl:text-lg text-sm text-center xl:text-left mb-4">
          {subtitle}
        </h4>
        <p className="text-slate-600 font-light text-sm text-center xl:text-left">
          {description}
        </p>
      </div>
    </div>
  );
};
