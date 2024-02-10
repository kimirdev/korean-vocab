import { CategorySelect } from "./components/category";
import CardsTab from "./components/tabs/cards";
import ListTab from "./components/tabs/list";
import TypingTab from "./components/tabs/typing";
import { ThemeToggler } from "./components/theme";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./components/ui/tabs";

function App() {
  return (
    <section className="relative font-mono w-full max-w-[428px] md:max-w-[768px] mx-auto mt-10 py-20 px-10 border rounded-xl shadow-2xl">
      <ThemeToggler />
      <CategorySelect />

      <h1 className="text-2xl font-semibold text-center">
        Korean Vocab Practice
      </h1>


      <Tabs defaultValue="typing" className="flex flex-col w-full">
        <TabsList className="mx-auto my-10">
          <TabsTrigger value="typing">Typing</TabsTrigger>
          <TabsTrigger value="list">List</TabsTrigger>
          <TabsTrigger value="cards">Cards</TabsTrigger>
        </TabsList>
        <TabsContent value="typing">
          <TypingTab />
        </TabsContent>
        <TabsContent value="list">
          <ListTab />
        </TabsContent>
        <TabsContent value="cards">
          <CardsTab />
        </TabsContent>
      </Tabs>

    </section>
  );
}

export default App;
