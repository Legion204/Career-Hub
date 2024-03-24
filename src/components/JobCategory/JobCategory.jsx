import accounts from '../../assets/icons/accounts.png'
const JobCategory = ({jobCategory}) => {

    const {category_name,availability}=jobCategory;

    return (
        <div className="max-w-xs p-6 rounded-md shadow-md bg-[#7E90FE0D] dark:text-gray-900">
            <img src={accounts} alt=""/>
            <div className="mt-6 mb-2">
                <h2 className="text-xl font-semibold tracking-wide">{category_name}</h2>
            </div>
            <p className="dark:text-gray-800">{availability}</p>
        </div>
    );
};

export default JobCategory;