export default function Leftside() {
  return (
    <div className="col-span-1">
      <div className="bg-white rounded-md shadow-[0_0_0_1px_rgba(0,0,0,0.15),0_0_0_rgba(0,0,0,0.20)] text-center overflow-hidden mb-2">
        <div className="border-b border-black/15 px-3 pb-4 pt-3">
          <div
            className="bg-[url('/card-bg.svg')] bg-center bg-[length:462px_54px] h-[54px] -mx-3 -mt-3"
          ></div>

          <div
            className="bg-[url('/photo.svg')] bg-white bg-center bg-no-repeat bg-[length:60%] w-[72px] h-[72px] border-2 border-white rounded-full mx-auto mt-[-38px] mb-3"
          ></div>

          <p className="text-[16px] font-semibold text-black/90 leading-[1.5]">
            Welcome, there!
          </p>

          <p className="text-[#0a66c2] mt-1 text-[12px] leading-[1.33]">
            Add a photo
          </p>
        </div>

        <div className="border-b border-black/15 py-3 font-semibold">
          <a
            href="#"
            className="flex justify-between items-center px-3 py-1 hover:bg-black/10 no-underline"
          >
            <div className="flex flex-col text-left">
              <span className="text-[12px] text-black/60 leading-[1.333]">
                Connections
              </span>
              <span className="text-[12px] text-black leading-[1.333]">
                Grow your network
              </span>
            </div>
            <img src="/widget-icon.svg" alt="Widget icon" />
          </a>
        </div>

        <a
          href="#"
          className="block text-left px-3 py-3 font-semibold text-[12px] hover:bg-black/10"
        >
          <span className="flex items-center gap-1 text-black">
            <img src="/item-icon.svg" alt="Item icon" />
            My Items
          </span>
        </a>
      </div>

      <div className="bg-white rounded-md shadow-[0_0_0_1px_rgba(0,0,0,0.15),0_0_0_rgba(0,0,0,0.20)] font-semibold text-left flex flex-col pt-2">
        <a
          href="#"
          className="text-black text-[12px] px-3 py-1 hover:text-[#0a66c2] no-underline"
        >
          <span>Groups</span>
        </a>
        <a
          href="#"
          className="text-black text-[12px] px-3 py-1 hover:text-[#0a66c2] no-underline flex items-center justify-between"
        >
          <span>Events</span>
          <img src="/plus-icon.svg" alt="Plus" />
        </a>
        <a
          href="#"
          className="text-black text-[12px] px-3 py-1 hover:text-[#0a66c2] no-underline"
        >
          <span>Follows Hashtags</span>
        </a>
        <a
          href="#"
          className="text-black/60 text-[12px] px-3 py-3 border-t border-[#d6cec2] hover:bg-black/10 no-underline"
        >
          <span>Discover more</span>
        </a>
      </div>
    </div>
  );
}
