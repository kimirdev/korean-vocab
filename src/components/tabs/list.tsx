import { useEffect, useState } from 'react'

// import dict from "@/data/topik1.json"
import shuffle from '@/lib/arrayShuffle'
import { Button } from '../ui/button'
import { useCategory } from '../category'
import Line from '../ui/line'

const ListTab = () => {
  const {data: jsonData} = useCategory()

  const [data, setData] = useState<{english: string, korean: string}[]>()

  useEffect(() => {
    setData(jsonData)
  }, [jsonData])

  const onRandomClick = () => {
    setData(shuffle(jsonData))
  }

  return (
    <div className='w-full max-w-[428px] mx-auto space-y-4 hover:cursor-default'>
      <Button type='button' onClick={onRandomClick} className='ml-auto mr-0 block'>Randomize</Button>
      {data?.map((elem, idx) => (
        <Line key={elem.korean !== '' ? elem.korean : idx} leftText={elem.korean} rightText={elem.english} />
      ))}
    </div>
  )
}

export default ListTab