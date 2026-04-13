
const BannerCard = ({num, text}) => {
    return (
        <div className="flex justify-center items-center p-10 w-full shadow-sm bg-white rounded-xl text-center">
            <div>
                <h2 className="text-2xl font-semibold text-[#244D3F] mb-2">
                    {num}
                </h2>
                <p className="text-gray-500">
                    {text}
                </p>
            </div>
        </div>
    );
};

export default BannerCard;