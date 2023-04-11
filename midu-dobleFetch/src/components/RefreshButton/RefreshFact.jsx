const RefreshFact = ({ handleNewFact }) => {
  return (
    <div className='h-full w-full '>
      <button
        className='px-3 py-4 bg-black text-white font-bold rounded-md'
        onClick={handleNewFact}
      >
        Get new Fact
      </button>
    </div>

  )
}

export default RefreshFact
