import Container from "@/components/Container";
import Header from "@/components/Header";
import Hero_Hotels from "@/components/Hero-hotels";
import Image from "next/image";
import Link from "next/link";

export default function page() {
  return (
    <div>
      <Container>
        <Header />
        <Hero_Hotels />
      </Container>

      {/**
      *  <div className="description pl-8  p-5 flex justify-between items-center">
        <div>
          <h3 className="font-roboto font-light text-4xl leading-normal">
            Hotels <span>10</span>
          </h3>
          <p className="  h-[26px] top-[56.34px] left-[47.38px] opacity-60">
            Lorem ipsum dolor sit amet consectetur
          </p>
        </div>

        <Link
          href="#"
          className="button border-2 border-inputColor h-[56px] flex justify-center rounded items-center text-center w-[250px] "
        >
          <span className="font-bold font-[90px]">+</span> Créer un nouveau
          hôtel
        </Link>
      </div>
      *  */}

      <div className="card justify-around bg-content_bg grid grid-cols-3 gap-4 p-4 ">
        <a href="#">
          <div className="  child  flex flex-col justify-around items-center   w-[300px] h-[409.43px] left-[411px] rounded-[14px] bg-white shadow-md">
            <img
              src="/image.png"
              alt="Card Image"
              className="w-[350.57px] rounded-t-[13.65px]"
            />
            <div className="inset-0 flex flex-col justify-center items-center">
              <p className="font-roboto font-normal text-sm leading-[15.35px]">
                Boulevard Martin Luther King Dakar, 11500
              </p>
              <p className="font-roboto font-semibold text-xl leading-[25.59px]">
                Hôtel Terrou-Bi
              </p>
              <p className="font-roboto font-normal text-sm leading-[15.35px]">
                25.000 XOF par nuit
              </p>
            </div>
          </div>
        </a>
        <a href="#">
          <div className="  child  flex flex-col justify-around items-center    h-[409.43px] left-[411px] rounded-[14px] bg-white shadow-md">
            <img
              src="/image2.png"
              alt="Card Image"
              className="w-[350.57px] rounded-t-[13.65px]"
            />
            <div className="inset-0 flex flex-col justify-center items-center">
              <p className="font-roboto font-normal text-sm leading-[15.35px]">
                Boulevard Martin Luther King Dakar, 11500
              </p>
              <p className="font-roboto font-semibold text-xl leading-[25.59px]">
                Hôtel Terrou-Bi
              </p>
              <p className="font-roboto font-normal text-sm leading-[15.35px]">
                25.000 XOF par nuit
              </p>
            </div>
          </div>
        </a>
        <a href="#">
          <div className="  child  flex flex-col justify-around items-center   w-[300px] h-[409.43px] left-[411px] rounded-[14px] bg-white shadow-md">
            <img
              src="/image3.png"
              alt="Card Image"
              className="w-[350.57px] rounded-t-[13.65px]"
            />
            <div className="inset-0 flex flex-col justify-center items-center">
              <p className="font-roboto font-normal text-sm leading-[15.35px]">
                Boulevard Martin Luther King Dakar, 11500
              </p>
              <p className="font-roboto font-semibold text-xl leading-[25.59px]">
                Hôtel Terrou-Bi
              </p>
              <p className="font-roboto font-normal text-sm leading-[15.35px]">
                25.000 XOF par nuit
              </p>
            </div>
          </div>
        </a>
        <a href="#">
          <div className="  child  flex flex-col justify-around items-center   w-[300px] h-[409.43px] left-[411px] rounded-[14px] bg-white shadow-md">
            <img
              src="/image4.png"
              alt="Card Image"
              className="w-[350.57px] rounded-t-[13.65px]"
            />
            <div className="inset-0 flex flex-col justify-center items-center">
              <p className="font-roboto font-normal text-sm leading-[15.35px]">
                Boulevard Martin Luther King Dakar, 11500
              </p>
              <p className="font-roboto font-semibold text-xl leading-[25.59px]">
                Hôtel Terrou-Bi
              </p>
              <p className="font-roboto font-normal text-sm leading-[15.35px]">
                25.000 XOF par nuit
              </p>
            </div>
          </div>
        </a>
        <a href="#">
          <div className="  child  flex flex-col justify-around items-center   w-[300px] h-[409.43px] left-[411px] rounded-[14px] bg-white shadow-md">
            <img
              src="/image5.png"
              alt="Card Image"
              className="w-[350.57px] rounded-t-[13.65px]"
            />
            <div className="inset-0 flex flex-col justify-center items-center">
              <p className="font-roboto font-normal text-sm leading-[15.35px]">
                Boulevard Martin Luther King Dakar, 11500
              </p>
              <p className="font-roboto font-semibold text-xl leading-[25.59px]">
                Hôtel Terrou-Bi
              </p>
              <p className="font-roboto font-normal text-sm leading-[15.35px]">
                25.000 XOF par nuit
              </p>
            </div>
          </div>
        </a>
        <a href="#">
          <div className="  child  flex flex-col justify-around items-center   w-[300px] h-[409.43px] left-[411px] rounded-[14px] bg-white shadow-md">
            <img
              src="/image6.png"
              alt="Card Image"
              className="w-[350.57px] rounded-t-[13.65px]"
            />
            <div className="inset-0 flex flex-col justify-center items-center">
              <p className="font-roboto font-normal text-sm leading-[15.35px]">
                Boulevard Martin Luther King Dakar, 11500
              </p>
              <p className="font-roboto font-semibold text-xl leading-[25.59px]">
                Hôtel Terrou-Bi
              </p>
              <p className="font-roboto font-normal text-sm leading-[15.35px]">
                25.000 XOF par nuit
              </p>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
}
