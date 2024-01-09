import { useQuiz } from "../contexts/QuizContext";

function Progress() {
  const { index, numQuestions, points, maxNumOfPoints, answer } = useQuiz();
  return (
    <header className="progress">
      <progress
        max={numQuestions}
        value={index + Number(answer !== null)}
      ></progress>
      <p>
        Question <strong>{index + 1}</strong> /{numQuestions}
      </p>
      <p>
        <strong>{points}</strong> / {maxNumOfPoints}
      </p>
    </header>
  );
}

export default Progress;
