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

  const handleKeyPress = (e: KeyboardEvent) => {
    if (e.key === " ") {
      setRotated(v => !v)
    }
  }

  useEffect(() => {
    window.addEventListener("keypress", handleKeyPress)

    return () => window.removeEventListener("keypress", handleKeyPress)
  }, [])


  return (
    <div className='max-w-[428px] mx-auto h-[200px]'>
      <FlipCard frontSideText={currentWord?.korean ?? ""} backSideText={currentWord?.english ?? ""} isRotated={rotated} onClick={() => setRotated(v => !v)} />
      <span className='text-xs text-gray-600'>*Click/Tap on the card to flip card.</span>
    </div>
  )
}

export default CardsTab