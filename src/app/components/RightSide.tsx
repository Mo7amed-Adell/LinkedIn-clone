export default function Right() {
  return (
    <div className="col-span-1">
      <div className="bg-white rounded-md shadow-[0_0_0_1px_rgba(0,0,0,0.15),0_0_0_rgba(0,0,0,0.20)] text-center overflow-hidden mb-2 p-3">
        <div className="flex items-center justify-between text-[16px] text-black/60">
          <h2 className="font-medium">Add to your feed</h2>
          <img src="/feed-icon.svg" alt="Feed icon" />
        </div>

        <ul className="mt-4">
          <li className="flex items-center my-3">
            <a href="#" className="mr-2">
              <div
                className="w-12 h-12 bg-[url('https://static-exp1.licdn.com/sc/h/1b4vl1r54ijmrmcyxzoidwmxs')] bg-contain bg-center bg-no-repeat"
              ></div>
            </a>
            <div className="flex flex-col text-left">
              <span className="text-[14px] text-black font-normal">#Linkedin</span>
              <button
                className="bg-transparent text-black/60 border border-black/60 px-4 py-1 rounded-full font-semibold text-[14px] leading-none hover:bg-black/10 transition"
              >
                Follow
              </button>
            </div>
          </li>

          <li className="flex items-center my-3">
            <a href="#" className="mr-2">
              <div
                className="w-12 h-12 bg-[url('https://static-exp1.licdn.com/sc/h/1b4vl1r54ijmrmcyxzoidwmxs')] bg-contain bg-center bg-no-repeat"
              ></div>
            </a>
            <div className="flex flex-col text-left">
              <span className="text-[14px] text-black font-normal">#Video</span>
              <button
                className="bg-transparent text-black/60 border border-black/60 px-4 py-1 rounded-full font-semibold text-[14px] leading-none hover:bg-black/10 transition"
              >
                Follow
              </button>
            </div>
          </li>
        </ul>

        <a
          href="#"
          className="text-[#0a66c2] text-[14px] flex items-center gap-1 justify-start hover:underline mt-2"
        >
          View all recommendations
          <img src="/right-icon.svg" alt="Right arrow" />
        </a>
      </div>

      <div className="bg-white rounded-md shadow-[0_0_0_1px_rgba(0,0,0,0.15),0_0_0_rgba(0,0,0,0.20)] overflow-hidden">
        <img
          src="/banner-image.jpg"
          alt="Banner"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}
