type Props = {
  flexBool: boolean
}

const ContentComponent = ({flexBool}: Props) => {

  return (
    <div>
        <div className="grid grid-cols-10">
          <div className="col-span-6  mr-4">
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
            
          </div>
          <div className="col-span-4 bg-red-500">
              Hey There
          </div>
        </div>
    </div>
  )
}


export default ContentComponent