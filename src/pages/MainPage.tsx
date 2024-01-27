import CardComponent from '../components/CardComponent'


const MainPage = () => {

    const object = {
        1: true,
        2: true,
        3: true,
        4: true,
        5: true,
        6: true,
        7: true,
        8: true,
        9: true,
        10: true,
        11: true,
        12: true,
    
    };

    return (
        <div>
            <div>
                <CardComponent flexBool={true} showDesc={true}/>
            </div>
            <div className='flex justify-between'>
                <p className="font-semibold text-2xl">Latest Posts</p>
                <p className="font-semibold text-red-800 hover:cursor-pointer hover:opacity-50">View All</p>
            </div>
            <div className="grid grid-cols-3">
                {Object.keys(object).map(key => (
                <div key={key} className='col-span-1 mt-4 mr-4 mb-4'>
                    <CardComponent flexBool={false} showDesc={true}/>
                </div>
                ))}
            </div>
        </div>
    );
}

export default MainPage