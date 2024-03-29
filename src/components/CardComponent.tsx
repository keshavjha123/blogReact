import { useNavigate } from "react-router";

type Props = {
    flexBool: boolean,
    showDesc: boolean  // Required boolean prop
  };

const CardComponent = ({flexBool, showDesc}: Props) => {
    const navigate = useNavigate();
    return (
        <div className={`${flexBool? 'flex mt-9': ""}`}>
            <div className={`${flexBool? 'mb-7 mr-6': ""}`}>
                <img className="object-cover rounded-lg hover:opacity-80 hover: cursor-pointer" src="card.jpg" alt="" onClick={()=>{navigate("/post")}} />
            </div>
            <div className={`${flexBool?"flex flex-col justify-center":""}`}>
                <div className="flex content-start mt-1 hover: cursor-pointer" onClick={()=>{navigate("/post")}}>
                    <p className="mt-2 text-red-700">Editor's Picks</p>
                </div>
                <div className="font-bold flex hover:text-red-700 sm:text-left mt-1 hover: cursor-pointer" onClick={()=>{navigate("/post")}}>
                    <p>Google Assistant Can Now Speak Multiple Languages Interchangeably</p>
                </div>
                <div className="flex text-left mt-2">
                    {showDesc?<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry…</p>:null}
                </div>
                <div className="flex text-left mt-1">
                    <p className='font-bold'>John Doe-</p>
                    <p className="text-slate-600">April 12,2022</p>
                </div>
            </div>
        </div>
    )
}

export default CardComponent