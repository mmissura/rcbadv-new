import { TitlePageProps } from './titlePage';

export const TitlePage = ({ title, className }: TitlePageProps) => {
  return (
    <h2
      className={`${
        className ?? 'text-black'
      } font-bold 2xl:text-4xl xl:text-4xl text-2xl text-center 2xl:mb-10 xl:mb-10 mb-4`}
    >
      {title}
    </h2>
  );
};
