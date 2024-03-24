import userImg from '../../assets/images/user.png'
const Banner = () => {
    return (
        <div className="hero bg-gradient-to-r from-[#7E90FE0D] to-[#9873FF0D]">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={userImg} className="w-[50%]" />
                <div>
                    <h1 className="text-7xl font-extrabold">One Step Closer To Your <br /><span className='text-[#7E90FE]'>Dream Job</span></h1>
                    <p className="py-6">Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                    <button className="btn text-white bg-[#7E90FE]">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;