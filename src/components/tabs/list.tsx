import { useState } from 'react'

import dict from "@/data/topik1.json"
import shuffle from '@/lib/arrayShuffle'
import { Button } from '../ui/button'

const ListTab = () => {
  const [data, setData] = useState(dict)

  const onRandomClick = () => {
    setData(shuffle(data))
  }

  return (
    <div className='max-w-[428px] mx-auto space-y-4 hover:cursor-default'>
      <Button type='button' onClick={onRandomClick} className='ml-auto mr-0 w-[100px] block'>Randomize</Button>
      {data?.map(elem => (
        <div className='group flex justify-between border-b hover:border-black hover:dark:border-white'>
          <p className='group-hover:font-semibold break-keep mr-3'>{elem.korean}</p>
          <p className='group-hover:font-semibold'>{elem.english}</p>
        </div>
      ))}
    </div>
  )
}

export default ListTab