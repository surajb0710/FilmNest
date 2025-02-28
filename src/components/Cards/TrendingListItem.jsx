const TrendingListItem = () => {
  return (
    <div className="relative">
      <div className="absolute rounded-full bg-gray-800 w-[30px] h-[30px] flex justify-center items-center border border-orange-500 text-orange-500 top-1/2 translate-[-50%] left-[15px] font-bold">
        1
      </div>
      <div className="ml-[15px] pr-[15px] flex gap-4 bg-gray-800 items-center">
        <img src="" alt="" className="h-[75px] w-[50px]" />
        <div>
          <p className="text-base">THE GORGE</p>
          <p className="text-sm text-gray-400">
            Movie <span>127 min</span>
          </p>
        </div>
        <p className="text-sm text-gray-400 ml-auto">2025</p>
      </div>
    </div>
  );
};

export default TrendingListItem;
