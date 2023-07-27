import SingleQuestions from './SingleQuestions'

const Questions = ({ questions, actId, toggle }) => {
  return (
    <section className="container">
      <h1>Questions</h1>
      {questions.map((question) => {
        return (
          <SingleQuestions
            key={question.id}
            {...question}
            actId={actId}
            toggle={toggle}
          />
        )
      })}
    </section>
  )
}
export default Questions
