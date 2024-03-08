import ImageProfile from '../../assets/image-profile.jpeg'

export default function AboutMe(){
    return(
        <div className="flex wå-full items-center justify-center">
            <div className="flex justify-center bg-[#151515] rounded-md m-20 border-2 border-[#1f1f1f]">
                <img className='h-[32rem] my-8 rounded-md' src={ImageProfile} alt='profile-leandro' />
                <div className='ml-8 w-2/4 '>
                    <h2 className='text-primary font-semibold text-lg mt-12 '> Quem sou </h2>
                    <h1 className='text-white font-semibold mt-6 text-2xl'> Leandro Silva </h1>
                    <h2 className='text-white  mt-4 text-lg'> Desenvolvedor Frontend </h2>
                    <p className='mt-6 text-[#9ca3af]'>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. 
                    </p>

                    <div className='flex justify-center'>
                        <button className="mt-20 border-2 border-primary py-4 px-20 rounded-md font-semibold text-primary">
                            Baixar Curriculo
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}