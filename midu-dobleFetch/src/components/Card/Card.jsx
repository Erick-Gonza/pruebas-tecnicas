import { useContext } from 'react'
import { catFactContext } from '../../context/CatContext'
import RefreshFact from '../RefreshButton/RefreshFact'
import ImageContainer from './ImageContainer'
import TextContainer from './TextContainer'

const Card = () => {
  const { fact, cat, handleNewFact } = useContext(catFactContext)

  return (
    <div className='h-[75%] w-[50%] py-6 px-4 bg-slate-800 shadow-md rounded-md border border-white flex flex-col space-y-4 text-center'>
      <div>
        <TextContainer fact={fact} />
      </div>

      <div className='flex-1'>
        <ImageContainer cat={cat} />
      </div>

      <div>
        <RefreshFact handleNewFact={handleNewFact} />
      </div>

    </div>

  )
}

export default Card
