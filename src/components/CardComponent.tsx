
type Props = {
    flexBool: boolean,  // Required boolean prop
  };

const CardComponent = ({flexBool}: Props) => {
    return (
        <div className={`${flexBool? 'flex mt-9': ""}`}>
            <div className={`${flexBool? 'mb-7 mr-6': ""}`}>
                <img className="object-cover rounded-lg hover:opacity-80" src="./public/card.jpg" alt="" />
            </div>
            <div className={`${flexBool?"flex flex-col justify-center":""}`}>
                <div className="flex content-start mt-1">
                    <p className="mt-2 text-red-700">Editor's Picks</p>
                </div>
                <div className="font-bold flex hover:text-red-700 sm:text-left mt-1">
                    <p>Google Assistant Can Now Speak Multiple Languages Interchangeably</p>
                </div>
                <div className="flex text-left mt-2">
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry…</p>
                </div>
                <div className="flex text-left mt-1">
                    <p  className='font-bold'>John Doe-</p>
                    <p className="text-slate-600">April 12,2022</p>
                </div>
            </div>
        </div>
    )
}

export default CardComponent