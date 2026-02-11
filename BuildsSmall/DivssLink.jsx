const DivssLink = ({Name, icoans , linsk}) => {
  return (
    <div>
        <div className="mx-auto  md:max-w-2xl lg:max-w-3xl">
        
        <div className="m-10 sm:m-14 md:m-16">
          <a
            href={linsk}
            target="_blank"
            rel="noopener noreferrer"
            className="
              bg-white/10 backdrop-blur-xl
              rounded-2xl
              w-full
              flex items-center justify-between
              px-4 py-4 sm:px-6 sm:py-5
              hover:bg-white/20
              transition duration-300
            "
          >
            <p className="text-[#CBDCEB] text-2xl text-shadow-blue-50 font-medium sm:text-xl">
              {Name}
            </p>

            <img
              src={icoans}
              alt="Download resume"
              className="w-7 h-7 sm:w-8 sm:h-8"
            />
          </a>
        </div>

      </div>
    </div>
  )
}

export default DivssLink