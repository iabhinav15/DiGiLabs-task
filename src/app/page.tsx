import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="flex justify-around py-8  bg-[#111729] font-PlayfairDisplay  ">
        {/* sidebar */}
        <div className='flex items-center gap-24 justify-center flex-col '>
          <div className=''>
            <Image
              src="/assets/Frame.png"
              width={34}
              height={34}
              alt=""
            />
          </div>
          <div className="flex flex-col items-center gap-8">
            <div className='bg-[#2C3A58] h-[60px] w-[60px] rounded-[20px] flex items-center justify-center'>
              <Image
                src="/assets/Icon.png"
                width={18}
                height={18}
                alt=""
              />
            </div>
            <div className=''>
              <Image
                src="/assets/Icon (1).png"
                width={18}
                height={18}
                alt=""
              />
            </div>
            <div className=''>
              <Image
                src="/assets/Icon (3).png"
                width={18}
                height={18}
                alt=""
              /></div>
            <div className=''>
              <Image
                src="/assets/Icon (4).png"
                width={18}
                height={18}
                alt=""
              />
            </div>
            <div className=''>
              <Image
                src="/assets/Icon (5).png"
                width={18}
                height={18}
                alt=""
              />
            </div>
          </div>
          <div className="flex flex-col justify-center items-center gap-[40px]">
            <div className='rounded-[20px]'>
              <Image className="rounded-[20px]"
                src="/assets/profile.png"
                width={44}
                height={44}
                alt=""
              />
            </div>
            <div className=''>
              <Image
                src="/assets/Icon (6).png"
                width={20}
                height={18}
                alt=""
              />
            </div>
          </div>
        </div>
        {/* sidebar ends */}
        {/* main-setion */}
        <div className='bg-[#151C39] w-[85%] rounded-[40px] flex p-8 justify-between'>
          <div className="flex flex-col w-[800px] gap-5">
            <div className="flex justify-evenly">
              <div className="text-[#FFFFFF] font-[400] text-[28px] mr-[25px] "> Hello,<br /> <span className="font-[800] text-[28px] flex gap-[8px]">Dr. Colter<Image
                src="/assets/Vector.png"
                width={20}
                height={20}
                alt="" /></span>
              </div>
              <div className="relative  ml-[-35px]">
                <input type="text" placeholder="search" className=" bg-[#2C3A58] rounded-[20px] w-[30vw] h-[60px] outline-none pl-10 placeholder:text-[#CCCCCC] text-white " />
                <Image
                  src="/assets/Icon-MagnifyingGlass.png"
                  width={20}
                  height={20}
                  alt=""
                  className="absolute top-[21px] left-3"
                />
              </div>
              <div className="bg-[#409BEE] h-[60px] w-[60px] rounded-[20px] flex justify-center items-center relative ml-[-38px]">
                <Image
                  src="/assets/Icon (7).png"
                  width={18}
                  height={20}
                  alt=""
                />
                <div className="bg-[#E30000] h-[10px] w-[10px] rounded-[50%] absolute top-5 left-8"></div>
              </div>
            </div>
            <div className="flex justify-around ">
              <div className="flex flex-col gap-5 ">
                <div className="flex w-[290px] h-[145px] ">
                  <div className="bg-[#1B2C4F] rounded-s-[30px] w-[70%] pl-6 pt-2">
                    <h3 className="text-[#FFFFFF] font-[700] text-[28px]">42</h3>
                    <p className="text-[#FFFFFF] text-[14px]">patients visited</p>
                    <p className="text-[#DCDCDC] text-[10px]">this month</p>
                  </div>
                  <div className="bg-[#2C3A58] rounded-e-[30px] w-[30%] flex justify-center items-center flex-col">
                    <div className="bg-[#409BEE80] opacity-[50%] w-[50px] h-[25px] rounded-t-[30px]">
                    </div>
                    <div className="bg-[#409BEE] w-[50px] h-[54px] rounded-b-[30px] text-[#FFFFFF] font-[700] text-[14px] flex justify-center items-center flex-col">
                      <div>
                        <Image
                          src="/assets/Icon (8).png"
                          width={14}
                          height={7}
                          alt=""
                        />
                      </div>
                      <p className="text-[12px]">70%</p>
                    </div>
                  </div>
                </div>
                <div className="bg-[#1B2C4F] w-[290px] h-[145px] rounded-[30px] flex flex-col justify-center pl-6 gap-2">
                  <div className="flex gap-2">
                    <div className="bg-[#409BEE] w-[24px] h-[16px] rounded-[15px] flex justify-center items-center">
                      <Image
                        src="/assets/Icon (9).png"
                        width={10}
                        height={8}
                        alt=""
                      />
                    </div>
                    <div className="text-[#CCCCCC] font-[600] text-[14px] ">Upcoming Events</div>
                  </div>
                  <div className="flex gap-4">
                    <div className="h-[70px] w-[70px] rounded-[50%] flex justify-center items-center border-[#ABEFEB] border-2 ">
                      <Image
                        src="/assets/Maskgroup.png"
                        width={50}
                        height={50}
                        alt=""
                        className="bg-[#ABEFEB] rounded-[50%] border-[1px] border-[#000000] "
                      />
                    </div>
                    <div className="">
                      <h3 className="text-[#FFFFFF] font-[700] text-[16px]">Aliza Shah</h3>
                      <div className="flex gap-2">
                        <Image
                          src="/assets/Icon (10).png"
                          width={14}
                          height={12}
                          alt=""
                        />
                        <p className="text-[#CCCCCC] font-[500] text-[12px]">08:00-09:00 am</p>
                      </div>
                      <div className="bg-[#2C3A58] text-[#DCDCDC] font-[500] text-[12px] h-[25px] rounded-[10px] flex justify-center items-center">
                        Visited 7 days ago
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[385px] h-[325] bg-[#1B2C4F] rounded-[40px] pt-6 px-6 ">
                <div className="flex justify-between ">
                  <div className="text-[12px] font-[500] ">
                    <div className="text-[#FFFFFF] text-[24px] font-[600] ">Statistics</div>
                    <div className="text-[#DCDCDC] ">November 2023</div>
                  </div>
                  <div className="flex items-center gap-2 border-[1px] border-[#409BEE] rounded-[15px] px-3  ">
                    <div className="text-[#FFFFFF] text-[12px] font-[500] ">Weekly </div>
                    <div className="">
                      <Image
                        src="/assets/Icon (11).png"
                        width={14}
                        height={12}
                        alt=""
                        className="text-[#CCCCCC] "
                      />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col justify-center items-center  ">
                  <div className="bg-[#111729] w-[74px] h-[40px] rounded-[10px] flex justify-center items-center gap-1 mt-[35px] z-10 ">
                    <div className="text-[#FFFFFF] font-[700] text-[14px] ">82%</div>
                    <div className="">
                      <Image
                        src="/assets/Icon (12).png"
                        width={14}
                        height={7}
                        alt="" />
                    </div>
                  </div>
                  <div className="w-[25px] h-[25px] bg-[#D9D9D9] rounded-[50%] border-[#000000] border-[5px] z-10 mb-[-65px] ">
                  </div>
                  <div className=" ">
                    <Image
                      src="/assets/Vector (1).png"
                      width={300}
                      height={10}
                      alt=""
                      className=" "
                    />
                    <Image
                      src="/assets/Vector (2).png"
                      width={320}
                      height={10}
                      alt=""
                      className="mt-[-150px] "
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* third section */}
            <div className="flex flex-row justify-around">
              <div className="flex flex-col gap-1 ">
                <div className="text-[#FFFFFF] font-[600] text-[20px] ">Active Patients</div>
                <div className="bg-[#1B2C4F] w-[385px] h-[382px] rounded-[40px] p-8 flex flex-col justify-between ">
                  <div className="flex items-center gap-10">
                    <div className="text-[#CCCCCC] font-[600] text-[12px] ">08:00 am</div>
                    <div className="w-[190px] h-[50px] bg-[#F5E5E5] rounded-[20px] flex items-center pl-4 ">
                      <div className="h-[36px] w-[36px] ">
                        <Image
                          src="/assets/image-removebg-prev.png"
                          width={23}
                          height={30}
                          alt=""
                          className="bg-[#E8BBF8] rounded-[50%] border-[#000000] border-[1px] " />
                      </div>
                      <div className="ml-3">
                        <h3 className="text-[#000000] font-[700] text-[14px] ">Mark jaxon</h3>
                        <div className="flex gap-1">
                          <Image
                            src="/assets/Icon (13).png"
                            width={9}
                            height={9}
                            alt=""
                            className="text-[#CCCCCC] "
                          />
                          <p className="text-[#000000] font-[500] text-[9px]">08:00-9:00am</p></div>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-10">
                    <div className="text-[#CCCCCC] font-[600] text-[12px] ">09:00 am</div>
                    <div className="w-[190px] h-[50px] bg-[#E5F5E6] rounded-[20px] flex items-center pl-4 ">
                      <div className="h-[36] w-[36] ">
                        <Image
                          src="/assets/Mask group.png"
                          width={23}
                          height={30}
                          alt=""
                          className="bg-[#BBF8F1] rounded-[50%] border-[#000000] border-[1px] " />
                      </div>
                      <div className="ml-3">
                        <h3 className="text-[#000000] font-[700] text-[14px] ">Maira khan</h3>
                        <div className="flex gap-1">
                          <Image
                            src="/assets/Icon (13).png"
                            width={9}
                            height={9}
                            alt=""
                            className="text-[#CCCCCC] "
                          />
                          <p className="text-[#000000] font-[500] text-[9px]">09:00-10:00 am</p></div>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-10">
                    <div className="text-[#CCCCCC] font-[600] text-[12px] ">10:00 am</div>
                    <div className="w-[190px] h-[50px] bg-[#C9F3EC] rounded-[20px] flex items-center pl-4 ">
                      <div className="h-[36] w-[36] ">
                        <Image
                          src="/assets/img-removebg1.png"
                          width={23}
                          height={28}
                          alt=""
                          className="bg-[#CBF8BB] rounded-[50%] border-[#000000] border-[1px] " />
                      </div>
                      <div className="ml-3">
                        <h3 className="text-[#000000] font-[700] text-[14px] ">Brick Zon</h3>
                        <div className="flex gap-1">
                          <Image
                            src="/assets/Icon (13).png"
                            width={9}
                            height={9}
                            alt=""
                            className="text-[#CCCCCC] "
                          />
                          <p className="text-[#000000] font-[500] text-[9px]">10:00-11:00 am</p></div>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-10">
                    <div className="text-[#CCCCCC] font-[600] text-[12px] ">11:00 am</div>
                    <div className="w-[105px] h-[29px] bg-[#000000] rounded-[30px] flex items-center text-[#CCCCCC] text-[12px] font-[600] justify-center ">
                      Break Time
                    </div>
                  </div>
                  <div className="flex items-center gap-10">
                    <div className="text-[#CCCCCC] font-[600] text-[12px] ">12:00 am</div>
                    <div className="w-[190px] h-[50px] bg-[#C1E2F4] rounded-[20px] flex items-center pl-4 ">
                      <div className="h-[36] w-[36] ">
                        <Image
                          src="/assets/Mask group (1).png"
                          width={23}
                          height={30}
                          alt=""
                          className="bg-[#E8F8BB] rounded-[50%] border-[#000000] border-[1px] " />
                      </div>
                      <div className="ml-3">
                        <h3 className="text-[#000000] font-[700] text-[14px] ">Alexa Max</h3>
                        <div className="flex gap-1">
                          <Image
                            src="/assets/Icon (13).png"
                            width={9}
                            height={9}
                            alt=""
                            className="text-[#CCCCCC] "
                          />
                          <p className="text-[#000000] font-[500] text-[9px]">12:00-13:00 am</p></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <div className="text-[#FFFFFF] font-[600] text-[20px] ">Upcoming Events</div>
                <div className="w-[290px] h-[180px] bg-[#1B2C4F] rounded-[40px] p-6 flex flex-col justify-between">
                  <div className="flex justify-between">
                    <div className="">
                      <div className="text-[#FFFFFF] text-[18px] font-[600px] ">Team Meeting</div>
                      <div className="flex gap-1">
                        <Image
                          src="/assets/Icon (14).png"
                          width={12}
                          height={12}
                          alt=""
                          className="text-[#CCCCCC] "
                        />
                        <div className="text-[#DCDCDC] text-[12px] font-[500]">05:00-06:00</div>
                      </div>
                    </div>
                    <div className="bg-[#2C3A58] w-[60px] h-[60px] rounded-[20px] flex justify-center items-center">
                      <Image
                        src="/assets/Icon (15).png"
                        width={20}
                        height={20}
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="flex justify-between pl-3">
                    <div className="flex ">
                      <div className="ml-[-10px] ">
                        <Image
                          src="/assets/image-removebg-prev.png"
                          width={30}
                          height={30}
                          alt=""
                          className="bg-[#E8BBF8] rounded-[50%] border-[#000000] border-[1px] " />
                      </div>
                      <div className="h-[36] w-[36] ml-[-8px] ">
                        <Image
                          src="/assets/Mask group.png"
                          width={36}
                          height={36}
                          alt=""
                          className="bg-[#BBF8F1] rounded-[50%] border-[#000000] border-[1px] " />
                      </div>
                      <div className="h-[36] w-[36] ml-[-8px]">
                        <Image
                          src="/assets/img-removebg1.png"
                          width={30}
                          height={30}
                          alt=""
                          className="bg-[#CBF8BB] rounded-[50%] border-[#000000] border-[1px] " />
                      </div>
                      <div className="relative ml-[-8px]">
                        <Image
                          src="/assets/Ellipse 8.png"
                          width={36}
                          height={36}
                          alt=""
                          className="bg-[#CBF8BB] rounded-[50%] border-[#000000] border-[1px] "
                        />
                        <p className="text-[#000000] absolute top-2 left-2 text-[14px] ">4+</p>
                      </div>
                    </div>
                    <div className="bg-[#409BEE] w-[54px] h-[40px] rounded-[15px] flex justify-center items-center ">
                      <Image
                        src="/assets/Icon (16).png"
                        width={20}
                        height={20}
                        alt="" />
                    </div>
                  </div>
                </div>
                <div className="w-[290px] h-[180px] bg-[#1B2C4F] rounded-[40px] p-6 mt-5 flex flex-col justify-between">
                  <div className="flex justify-between">
                    <div className="">
                      <div className="text-[#FFFFFF] text-[14px] font-[500px] ">Consultation</div>
                      <div className="text-[#DCDCDC] text-[24px] font-[700]">82/100</div>
                    </div>
                    <div className="flex gap-1">
                      <div className="bg-[#000000] w-[6px] h-[6px] rounded-[50%] "></div>
                      <div className="bg-[#000000] w-[6px] h-[6px] rounded-[50%] "></div>
                      <div className="bg-[#000000] w-[6px] h-[6px] rounded-[50%] "></div>

                    </div>
                  </div>
                  <div className="flex justify-between ">
                    <div className="bg-[#2C3A58] w-[100px] h-[34px] rounded-[10px] flex justify-center items-center gap-1 self-end ">
                      <div className="text-[#FFFFFF] font-[700] text-[16px] ">82%</div>
                      <div className="">
                        <Image
                          src="/assets/Icon (12).png"
                          width={14}
                          height={7}
                          alt="" />
                      </div>
                    </div>
                    <div className="relative">
                    <div className="w-[80px] h-[80px] border-[#FFFFFF] border-[15px] rounded-[50%]  "></div>
                      <Image
                        src="/assets/Ellipse 24.png"
                        width={80}
                        height={80}
                        alt=""
                        className="bg-[#FCD5D8] rounded-[50%] bg-transparent absolute top-0 left-0 " />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* third section */}
          </div>

          {/* right */}
          <div className="bg-[#111729] w-[400px] rounded-[40px] flex  flex-col items-center pt-20 gap-4">
            <div className="w-[110px] flex flex-col justify-center items-center mb-5">
              <div className="border-[#409BEE] border-[5px] rounded-[50%] p-2  ">
                <Image
                  src="/assets/Profile(2).png"
                  width={150}
                  height={150}
                  alt=""
                  className="bg-[#FCD5D8] rounded-[50%]"
                />
              </div>
              <h3 className="text-white font-[700] text-[16px] font-PlayfairDisplay ">Aliam Colter</h3>
              <p className="text-white font-[500] text-[12px]">Physician</p>
            </div>
            <div className="flex w-[350px] bg-[#1C2A4E] h-[60px] rounded-[30px] p-4 justify-between items-center px-4">
              <div className="text-white font-[500] text-[14px]">Active Patients</div>
              <div className="flex">
                <div className="">
                  <Image
                    src="/assets/Group 11.png"
                    width={30}
                    height={30}
                    alt=""
                    className="bg-[#FCD5D8] rounded-[50%] " />
                </div>
                <div className="ml-[-5px]">
                  <Image
                    src="/assets/Group 12.png"
                    width={30}
                    height={30}
                    alt=""
                    className="bg-[#FCD5D8] rounded-[50%] " /></div>
                <div className="ml-[-5px]">
                  <Image
                    src="/assets/Group 13.png"
                    width={30}
                    height={30}
                    alt=""
                    className="bg-[#FCD5D8] rounded-[50%]" /></div>
                <div className="ml-[-5px] relative">
                  <Image
                    src="/assets/Ellipse 8.png"
                    width={30}
                    height={30}
                    alt=""
                    className="bg-[#FCD5D8] rounded-[50%]" />
                  <p className="absolute text-black top-[5px] left-2 text-[14px]">8+</p>
                </div>
              </div>
            </div>
            <div className=" bg-[#1C2A4E] w-[350px] my-5 rounded-[40px] pb-2 ">
              <div className="flex justify-between p-4">
                <Image
                  src="/assets/image-removebg-preview.png"
                  width={30}
                  height={30}
                  alt=""
                  className="bg-[#E8F8BB] rounded-[50%]"
                />
                <div className=" ml-[-140px]">
                  <h3 className="font-[700] text-[13px] text-[#FFFFFF]">Alexa Max</h3>
                  <p className="font-[400] text-[10px] text-[#CCCCCC]">Active 5 min ago</p>
                </div>
                <div className="bg-[#2C3A58] rounded-[50%] flex justify-center items-center h-[40px] w-[40px]">
                  <Image
                    src="/assets/phone.png"
                    width={12}
                    height={12}
                    alt=""
                  />
                </div>
              </div>
              <div className="h-[1px] bg-white w-[310px] ml-[20px] opacity-[20%]"></div>
              <div className="flex p-3">
                <div className="mt-0.5">
                  <Image
                    src="/assets/image-removebg-preview.png"
                    width={30}
                    height={30}
                    alt=""
                    className="bg-[#E8F8BB] rounded-[50%]"
                  />
                </div>
                <div className="flex flex-col gap-1 px-4">
                  <div className="mb-3">
                    <div className="bg-[#F1F1F1] rounded-[14px] p-1.5 font-[500] text-[12px] text-[#000000] mb-2">Hi, Doctor.</div>
                    <div className="bg-[#F1F1F1] rounded-[14px] p-1.5 font-[500] text-[12px] text-[#000000]">I got knee jerk. What
                      should i do right now?</div>
                    <div className="text-[#CCCCCC] font-[500] text-[10px] mt-1 text-left">tue 02:32pm</div>
                  </div>
                  <div className="">
                    <div className="bg-[#F1F1F1] rounded-[14px] p-1.5 font-[500] text-[12px] text-[#000000] my-2">Hi, Alexa.</div>
                    <div className="bg-[#F1F1F1] rounded-[14px] p-1.5 font-[500] text-[12px] text-[#000000]">This help maintain balance and posture. dont worry.</div>
                    <div className="text-[#CCCCCC] font-[500] text-[10px] mt-1 text-right">tue 02:32pm</div>
                  </div>
                </div>
                <div className="flex self-center mt-14">
                  <Image
                    src="/assets/Profile(2).png"
                    width={30}
                    height={30}
                    alt=""
                    className="bg-[#FCD5D8] rounded-[50%]"
                  />
                </div>
              </div>
            </div>
            <div className="bg-[#2C3A58] w-[330px] flex justify-between items-center pl-4 pr-2 py-2 rounded-[20px] ">
              <div className="">
                <Image
                  src="/assets/Icon (17).png"
                  width={14}
                  height={20}
                  alt=""
                  className=""
                />
              </div>
              <input type="text" placeholder="Type your text......"  className="outline-none text-[#FFFFFF] bg-transparent font-[600] text-[16px] "/>
              
              <div className="bg-[#409BEE] w-[50px] h-[50px] rounded-[20px] flex justify-center items-center ">
                <Image
                  src="/assets/Icon (18).png"
                  width={20}
                  height={20}
                  alt=""/>
              </div>
            </div>
          </div>
          {/* right ends */}

        </div>
        {/* main-section */}
      </div>
    </>
  );
}
