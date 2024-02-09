import React, { useEffect, useState } from 'react'
import { Input } from '../ui/input'

import dict from "@/data/topik1.json"

const TypingTab = () => {
  const [data] = useState(dict)

  const [currentWord, setCurrentWord] = useState<{korean:string, english: string}>()

  useEffect(() => {
    const arrLength = data.length

    setCurrentWord(data[Math.floor(Math.random() * arrLength)])
  }, [])

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
    <div className='max-w-[428px] mx-auto'>
      
      <div className='group flex justify-between border-b hover:border-black hover:dark:border-white mb-5 hover:cursor-default'>
        <p className='group-hover:font-semibold break-keep mr-3'>{currentWord?.korean}</p>
        <p className='group-hover:font-semibold'>{currentWord?.english}</p>
      </div>

      <Input name='word' autoComplete='off' autoFocus value={value} onChange={(e) => setValue(e.target.value)} className={`${value.trim() === currentWord?.korean ? "border-green-400" : "border-red-400"}`} />
    </div>
  )
}

export default TypingTab