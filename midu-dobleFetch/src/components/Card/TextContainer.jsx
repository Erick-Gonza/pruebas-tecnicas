const TextContainer = ({ fact }) => {
  return (
    <div className='h-full w-full'>
      {fact
        ? <p className='text-2xl font-bold'>The fact is: {fact}</p>
        : <p className='text-2xl font-bold'>Loading fact...</p>}
    </div>

  )
}

export default TextContainer
