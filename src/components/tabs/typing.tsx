import { useEffect, useState } from 'react'
import { Input } from '../ui/input'

// import dict from "@/data/topik1.json"
import { useCategory } from '../category'
import Line from '../ui/line'

const TypingTab = () => {
  const {data} = useCategory()

  const [currentWord, setCurrentWord] = useState<{korean:string, english: string}>()

  useEffect(() => {
    const arrLength = data.length

    setCurrentWord(data[Math.floor(Math.random() * arrLength)])
  }, [data])

  const [value, setValue] = useState("")

  useEffect(() => {
    if (value && value[value.length-1] === " " && value.trim() === currentWord?.korean) {
      
      const arrLength = data.length

      setCurrentWord(data[Math.floor(Math.random() * arrLength)])
      setValue("")
    } else {
      setValue(value.trim())
    }
  }, [currentWord?.korean, data, value])

  return (
    <div className='max-w-[428px] w-full mx-auto'>
      
      <Line leftText={currentWord?.korean} rightText={currentWord?.english} />
      {/* <div className='w-full group flex justify-between border-b hover:border-black hover:dark:border-white mb-5 hover:cursor-default'>
        <p className='group-hover:font-semibold break-keep mr-3'>{currentWord?.korean}</p>
        <p className='group-hover:font-semibold'>{currentWord?.english}</p>
      </div> */}

      <Input name='word' autoComplete='off' autoFocus value={value} onChange={(e) => setValue(e.target.value)} className={` my-5 ${value.trim() === currentWord?.korean ? "border-green-400" : "border-red-400"}`} />

      <span className='text-xs text-gray-600'>*Type the correct korean word and press <span className="font-bold">Space</span></span>
    </div>
  )
}

export default TypingTab