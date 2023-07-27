import { useState } from 'react'
import questions from './data'
import Questions from './Questions'
const App = () => {
  const [qna, setQna] = useState(questions)
  console.log(qna)
  const [activeId, setActiveId] = useState(null)

  const toggleQna = (id) => {
    const newActiveId = id === activeId ? null : id
    setActiveId(newActiveId)
  }

  return (
    <main>
      <Questions questions={qna} actId={activeId} toggle={toggleQna} />
    </main>
  )
}
export default App
