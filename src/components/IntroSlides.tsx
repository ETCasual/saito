/* eslint-disable @next/next/no-img-element */
import { useRouter } from "next/router";
import {
  useEffect,
  useRef,
  type Dispatch,
  type FunctionComponent,
  type SetStateAction,
} from "react";
import { IoClose } from "react-icons/io5";

interface IntroSlidesProps {
  onClose: () => void;
  variant: string;
  selection: string;
  slide: number;
  setSlide: Dispatch<SetStateAction<number>>;
  max: number;
}

export const IntroSlides: FunctionComponent<IntroSlidesProps> = ({
  onClose,
  selection,
  slide,
  variant,
  setSlide,
  max,
}) => {
  const left = useRef<HTMLButtonElement>(null);
  const right = useRef<HTMLButtonElement>(null);
  const close = useRef<HTMLButtonElement>(null);

  const router = useRouter();
  const locale = router.locale;
  console.log(locale);

  useEffect(() => {
    const keyPressEvent = (e: KeyboardEvent) => {
      if (e.code === "ArrowLeft") {
        left.current?.click();
      } else if (e.code === "ArrowRight") {
        right.current?.click();
      } else if (e.code === "Escape") {
        close.current?.click();
      }
    };
    window.addEventListener("keydown", keyPressEvent);

    return () => {
      window.removeEventListener("keydown", keyPressEvent);
    };
  }, [onClose]);

  return (
    <div className="fixed left-0 top-0 !z-[9999] flex h-screen w-screen flex-col items-center justify-center bg-black">
      <button
        ref={close}
        className="fixed right-5 top-5 !z-[9000] opacity-50 transition-opacity focus-within:outline-none hover:opacity-100"
        onClick={() => {
          onClose();
        }}
      >
        <IoClose size={35} className="text-gray-300" />
      </button>
      <button
        ref={left}
        className="fixed left-0 !z-[8000] h-screen w-1/2 focus-within:outline-none"
        onClick={() => setSlide((prev) => (prev !== 1 ? prev - 1 : prev))}
      />
      <button
        ref={right}
        className="fixed right-0 !z-[8000] h-screen w-1/2 focus-within:outline-none"
        onClick={() => setSlide((prev) => (prev !== max ? prev + 1 : prev))}
      />
      <img
        src={`/assets/intro/k2/${variant}_${selection}_slides/${locale}/${slide}-100.jpg`}
        alt={`Slide ${slide}`}
        className="aspect-video max-w-full"
      />
    </div>
  );
};
