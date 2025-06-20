import TitleMain from "./components/TitleMain";
import TodoList from "./components/TodoList";

function App() {
  return (
    <>
      <header>
        <TitleMain text="TodoList" />
      </header>
      <main className="flex-1">
        <TodoList />
      </main>
    </>
  );
}

export default App;
