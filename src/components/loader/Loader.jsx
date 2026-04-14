import React from 'react';

const Loader = () => {
    return (
        <div className='max-w-325  w-[95%] sm:w-10/12 mx-auto flex justify-center items-center py-20 px-5'>
            <span className="loading loading-spinner loading-xl"></span>
            
        </div>
    );
};

export default Loader;