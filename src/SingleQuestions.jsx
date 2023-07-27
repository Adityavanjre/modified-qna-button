import { AiFillMinusCircle, AiFillPlusCircle } from 'react-icons/ai'

const SingleQuestions = ({ id, title, info, actId, toggle }) => {
  const isActive = id === actId
  return (
    <article className="question">
      <header>
        <h5> {title} </h5>
        <button className="question-btn" onClick={() => toggle(id)}>
          {isActive ? <AiFillMinusCircle /> : <AiFillPlusCircle />}
        </button>
      </header>
      {isActive && <p> {info} </p>}
    </article>
  )
}
export default SingleQuestions
