import Cikk from "./components/Cikk"
function App() {
  const cikkek = [
    { id: 1, title: "első", content: "ez az első cikk" },
    { id: 2, title: "második", content: "ez a második cikk" },
    { id: 3, title: "harmadik", content: "ez a harmadik cikk" },
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
