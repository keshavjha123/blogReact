

const FooterComponent = () => {
  return (
    <div className="bg-pink-950 flex justify-center mt-10 text-center content-center p-10">
        <p className="font-serif text-white content-center text-center text-5xl">Casper</p>
        <div className='text-white flex flex-col text-left ml-5'>
            <p className="mb-2">About Us</p>
            <p className="text-gray-400">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.</p>
        </div>
        <div className="flex justify-center ml-3">
            <img className="hover:opacity-100" src='./public/facebook.svg'/>
            <img src='./public/twitter.svg'/>
            <img src='./public/youtube.svg'/>
            <img src='./public/instagram.svg'/>
        </div>
    </div>
  )
}

export default FooterComponent


