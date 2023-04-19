const ImageContainer = ({ cat }) => {
  return (
    <>
      {cat
        ? <img src={cat?.data[0]?.images?.downsized?.url} className='rounded-md h-full w-full max-h-[550px] object-contain' />
        : <p>Loading cat...</p>}
    </>
  )
}

export default ImageContainer
