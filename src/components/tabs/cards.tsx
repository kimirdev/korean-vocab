import { useEffect, useState } from "react"
import FlipCard from "../ui/flip-card"
import { useCategory } from "../category"

const CardsTab = () => {
  const [rotated, setRotated] = useState(false)

  const {data} = useCategory()

  const [currentWord, setCurrentWord] = useState<{korean:string, english: string}>()
  // const [nextWord, setNextWord] = useState<{korean:string, english: string}>()
  
  useEffect(() => {
    if (!rotated) {
      const arrLength = data.length

      setCurrentWord(data[Math.floor(Math.random() * arrLength)])
    }
  }, [data, rotated])


  return (
    <div className='max-w-[428px] mx-auto h-[200px]'>
      <FlipCard frontSideText={currentWord?.korean ?? ""} backSideText={currentWord?.english ?? ""} isRotated={rotated} onClick={() => setRotated(v => !v)} />
    </div>
  )
}

export default CardsTab