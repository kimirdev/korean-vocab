// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

import ListTab from "./components/tabs/list"
import TypingTab from "./components/tabs/typing"
import { ThemeToggler } from "./components/theme"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./components/ui/tabs"
// import dict from "./data/topik1.json"

function App() {

  return (
    <section className="relative font-mono w-full max-w-[428px] xl:max-w-[1024px] mx-auto mt-10 p-10 border rounded-xl shadow-2xl">
      
      <ThemeToggler />

      <h1 className="text-2xl font-semibold text-center">Korean Vocab Practice</h1>

      <Tabs defaultValue="typing" className="flex flex-col w-full">
        <TabsList className="mx-auto my-10">
          <TabsTrigger value="typing">Typing</TabsTrigger>
          <TabsTrigger value="list">List</TabsTrigger>
        </TabsList>
        <TabsContent value="typing">
          <TypingTab />
        </TabsContent>
        <TabsContent value="list">
          <ListTab />
        </TabsContent>
      </Tabs>
      {/* {dict?.map(elem => (
        <div className='flex'>
          <p>{elem.korean}</p>
          <p>{elem.english}</p>
        </div>
      ))} */}
    </section>
  )
}

export default App
