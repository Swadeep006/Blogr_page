export default function Navigation() {
  return (
    <>
      <div className="big_container relative h-[75vh] bg-gvlightred bg-[url('/images/bg-pattern-intro-mobile.svg')] bg-no-repeat bg-[position:0%_50%] bg-[length:150%] rounded-bl-[150px] flex flex-col border-[5px] border-x-orange-950">
        <div className="nav flex w-full fixed top-0 left-0 p-16 justify-between border-[5px] border-black ">
          <div className="Fb1 flex gap-4 ">
            <div className="logo">
              <img
                src="/public/images/logo.svg"
                alt="logo"
                className="object-contain flex-grow-0 flex-shrink-0"
              />
            </div>
            <div className="tags1 gap-5 flex ml-5">
              <div className="tag_1 flex gap-2 ">
                <a
                  href="#"
                  className="pt-2 font-Overpass text-white font-medium text-xl "
                >
                  Product
                </a>
                <img
                  src="/public/images/icon-arrow-light.svg"
                  alt="arrowd"
                  className="object-contain"
                />
              </div>
              <div className="tag_1 flex gap-2 ">
                <a
                  href="#"
                  className="pt-2 font-Overpass text-white font-medium text-xl "
                >
                  Company
                </a>
                <img
                  src="/public/images/icon-arrow-light.svg"
                  alt="arrowd"
                  className="object-contain"
                />
              </div>
              <div className="tag_1 flex gap-2 ">
                <a
                  href="#"
                  className="pt-2 font-Overpass text-white font-medium text-xl "
                >
                  Connect
                </a>
                <img
                  src="/public/images/icon-arrow-light.svg"
                  alt="arrowd"
                  className="object-contain"
                />
              </div>
            </div>
          </div>
          <div className="Fb2 flex">
            <div className="tags2 flex gap-10 text-center items-center ">
              <div>
                <a
                  href="#"
                  className="font-Overpass text-white font-medium text-xl"
                >
                  Login
                </a>
              </div>
              <div>
                <a
                  href="#"
                  className="font-Overpass text-Lightred font-medium text-xl p-2 px-6 rounded-full bg-white"
                >
                  Sign up
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 mt-8 h-full w-full items-center justify-center">
          <h1 className="text-5xl font-Overpass font-medium">
            A modern publishing platform
          </h1>
          <p className="text-xl text-white font-Overpass ">
            Grow your audience and build your online brand
          </p>
        </div>
        <div className="flex flex-row gap-8  relative top-16">
          <div>
            <a
              href="#"
              className="font-Ubuntu text-Lightred font-medium text-xl p-2 px-6 rounded-full bg-white"
            >
              Start For Free
            </a>
          </div>
          <div>
            <a
              href="#"
              className="font-Ubuntu text-center text-white font-medium text-xl p-2 px-6 rounded-full  border-white border-[2px]"
            >
              Learn more
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
