import CardComponent from "./CardComponent";

type Props = {
  flexBool: boolean
}

type SocialMediaProps = {
  icon: string,
  color: string,
  title: string
}




function SocialMedia({icon, color, title}: SocialMediaProps) {
  return (
      <div className="col-span-1 grid-rows-1 mt-3 p-1 hover:cursor-pointer">
        <div className= {`${color} content-center flex items-center justify-items-center rounded-md`}>
          <img src={`${icon}`} className="ml-5 mt-1 mb-1" alt="" />
          <p className="text-2xl text-white ml-4">{`${title}`}</p>
        </div>
      </div>
  );
}

const ContentComponent = ({flexBool}: Props) => {
  const rightSideIcons: Record<string, { icon: string; color: string; title: string; }> = {
    facebook: {icon:"facebook.svg" , color: "bg-blue-900", title:"Facebook"},
    twitter: {icon:"twitter.svg" , color: "bg-gray-400", title:"Twitter"},
    linkedin: {icon:"youtube.svg" , color: "bg-red-900", title:"Youtube"},
    instagram: {icon:"instagram.svg" , color: "bg-pink-900", title:"Instagram"},
   }
  return (
    <div>
        <div className="grid grid-cols-10">
          <div className="col-span-6  mr-4">
            <div>
              <p className="text-4xl font-bold text-left mb-6">Google Correlate: The Best SEO Research Tool You Aren’t Using</p>
              <div className="flex text-center items-center justify-items-center">
                <img className="rounded-full h-10 w-10 border-black border-20 border-double mb-4 mr-4" src="bro.jpg" alt="" />
                <p className="text-left text-gray-500 mr-2">by-</p>   
                <p className="text-gray-500 font-bold">John Doe</p>
                <p className="text-gray-500">-April 12, 2022</p>            

              </div>
            </div>
            <div className={`${flexBool? 'mb-7 mr-6': ""}`}>
                <img className="object-cover rounded-lg hover:opacity-80" src="card.jpg" alt="" />
            </div>
            <p className='flex text-left'>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
            </p>
            <p className='flex text-left'>
                It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

                Lorem Ipsum has been the industry's
                The generated Lorem Ipsum is therefore always
                Making this the first true generator

                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.

                It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.

                There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.
            </p>


            <div className="mt-3">
              <p className=" text-left font-bold text-2xl">You might like</p>
              <div className="grid grid-cols-3 mt-2">
                <CardComponent flexBool = {false} showDesc = {false}/>
                <CardComponent flexBool = {false} showDesc = {false}/>
                <CardComponent flexBool = {false} showDesc = {false}/>
              </div>
            </div>
          </div>
          <div className="col-span-4">
              <p className="font-bold text-3xl text-left">Follow Us</p>
              <div className="grid grid-cols-2 grid-rows-2">
                {
                  Object.keys((rightSideIcons)).map((key) =>{
                  return <SocialMedia key={key} icon={rightSideIcons[key].icon} color={rightSideIcons[key].color} title={rightSideIcons[key].title}/>
                  })
                }
              </div>
              <div>
                <p className="font-bold text-left mt-2 text-2xl">Popular Articles</p>
                <div>
                  <CardComponent flexBool = {true} showDesc = {false}/>
                  <CardComponent flexBool = {true} showDesc = {false}/>
                  <CardComponent flexBool = {true} showDesc = {false}/>
                </div>
                <p className="text-2xl font-bold text-left">Main Tags</p>
                <div className="grid grid-cols-2 grid-rows-3">
                  <div className="col-span-1 row-span-1  border border-gray-100 p-3 hover:text-red-800 hover:cursor-pointer">Content Marketing</div>
                  <div className="col-span-1 row-span-1  border border-gray-100 p-3 hover:text-red-800 hover:cursor-pointer">Editor's Picks</div>
                  <div className="col-span-1 row-span-1  border border-gray-100 p-3 hover:text-red-800 hover:cursor-pointer">Mobile Search</div>
                  <div className="col-span-1 row-span-1  border border-gray-100 p-3 hover:text-red-800 hover:cursor-pointer">SEO News</div>
                  <div className="col-span-1 row-span-1  border border-gray-100 p-3 hover:text-red-800 hover:cursor-pointer">SEO Tools</div>
                  <div className="col-span-1 row-span-1  border border-gray-100 p-3 hover:text-red-800 hover:cursor-pointer">Social Media</div>
                </div>
              </div>
          </div>
        </div>
    </div>
  )
}


export default ContentComponent