const EduTimeline = ({details}) => {
  return (
      <div className="flex items-center gap-10">
        <div className="relative">
            <div className="w-px h-[50px] border border-stroke ms-1"></div>
            <div className="w-4 h-4 rounded-full bg-priamry outline-4 outline-priamry/50 absolute left-0"></div>
            <div className="w-px h-[50px] border border-stroke ms-1"></div>
        </div>
        <div>
            <p>{details.period}</p>
            <h5 className="text-priamry font-semibold">{details.title}</h5>
            <small className="!text-[12px] text-font-light">{details.place}</small>
        </div>
      </div>
  );
};

export default EduTimeline;
