import Cikk from "./components/Cikk"
function App() {
  const cikkek = [
    { id: 1, title: "első", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
    { id: 2, title: "második", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
    { id: 3, title: "harmadik", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
  ]
  return (
    <>
      {cikkek.map(cikk => (
        <Cikk key={cikk.id} title={cikk.title} content={cikk.content} />
      ))}
    </>
  )
}

export default App
