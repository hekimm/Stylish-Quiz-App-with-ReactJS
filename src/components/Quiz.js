import React, { useState } from "react";
import styled from "styled-components";
import { useUserName } from "../context/userNameContext";

// Styled components
const QuizContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: auto;
  min-height: 100vh;
  font-family: "Arial", sans-serif;
  background-color: #282c34;
  color: white;
  padding: 20px;
  overflow-y: auto;
`;
const Progress = styled.div`
  width: 100%;
  height: 20px;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.2);
  margin-bottom: 20px;
  position: relative;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: ${(props) => (props.value / props.total) * 100}%;
    background: #007bff;
    border-radius: 10px;
    transition: width 0.3s ease-in-out;
  }
`;
const Question = styled.h2`
  margin-bottom: 20px;
  text-align: center;
  width: 80%;
  border-bottom: 2px solid #007bff;
  padding-bottom: 15px;
  font-size: 1.5rem;
`;

const AnswerButton = styled.button`
  background-color: #007bff;
  color: white;
  padding: 15px 30px;
  margin: 10px;
  border: none;
  border-radius: 25px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  font-size: 1rem;

  &:hover {
    background-color: #0056b3;
    transform: scale(1.05);
  }
`;

const Feedback = styled.div`
  margin-top: 20px;
  font-size: 24px;
  font-weight: bold;
`;

const WrongAnswer = styled.div`
  color: #ff6b6b;
  margin: 10px 0;
  border: 1px solid #ff6b6b;
  padding: 15px;
  border-radius: 10px;
  width: 80%;
  background: rgba(255, 107, 107, 0.1);
`;

// The Quiz component
const Quiz = () => {
  const { userName } = useUserName();

  const questions = [
    {
      questionText: "React ne tür bir kütüphanedir?",
      topic: "React Temelleri",
      answerOptions: [
        { answerText: "Kullanıcı arayüzü", isCorrect: true },
        { answerText: "Sanal gerçeklik", isCorrect: false },
        { answerText: "Sunucu tarafı", isCorrect: false },
        { answerText: "Yapay zeka", isCorrect: false }
      ]
    },
    {
      questionText: "React'ın yayıncısı kimdir?",
      topic: "React Yayıncı Bilgisi",
      answerOptions: [
        { answerText: "Google", isCorrect: false },
        { answerText: "Facebook", isCorrect: true },
        { answerText: "Apple", isCorrect: false },
        { answerText: "Microsoft", isCorrect: false }
      ]
    },
    {
      questionText: "React ile ilgili `JSX` neyi ifade eder?",
      topic: "React Temelleri",

      answerOptions: [
        { answerText: "JavaScript XML", isCorrect: true },
        { answerText: "JavaScript Extension", isCorrect: false },
        { answerText: "JavaScript X-Files", isCorrect: false },
        { answerText: "JavaScript Experience", isCorrect: false }
      ]
    },
    {
      questionText:
        "Hangi hook, bir bileşenin yaşam döngüsüne müdahale etmek için kullanılır?",
      topic: "React  Hooks",

      answerOptions: [
        { answerText: "useEffect", isCorrect: true },
        { answerText: "useLifeCycle", isCorrect: false },
        { answerText: "useCycle", isCorrect: false },
        { answerText: "useUpdate", isCorrect: false }
      ]
    },
    {
      questionText: "`useState` hook'u ne için kullanılır?",
      topic: "React  Hooks",

      answerOptions: [
        { answerText: "Durum yönetimi", isCorrect: true },
        { answerText: "Prop yönetimi", isCorrect: false },
        { answerText: "Ref yönetimi", isCorrect: false },
        { answerText: "Context yönetimi", isCorrect: false }
      ]
    },
    {
      questionText: "React bileşenleri hangi metodla oluşturulur?",
      topic: "React bileşenlerinin nasıl oluşturulduğu",

      answerOptions: [
        { answerText: "React.createComponent()", isCorrect: false },
        { answerText: "React.makeComponent()", isCorrect: false },
        { answerText: "React.component()", isCorrect: false },
        { answerText: "React.createElement()", isCorrect: true }
      ]
    },
    {
      questionText: "React'ta hangi metod state'i günceller?",
      topic: "React'ta state'in nasıl güncellendiği",

      answerOptions: [
        { answerText: "this.stateUpdate()", isCorrect: false },
        { answerText: "this.setState()", isCorrect: true },
        { answerText: "this.updateState()", isCorrect: false },
        { answerText: "this.modifyState()", isCorrect: false }
      ]
    },
    {
      questionText:
        "React'ta hangi hook API'da durum yönetimi için kullanılır?",
      topic: "React  Hooks",
      answerOptions: [
        { answerText: "useEffect()", isCorrect: false },
        { answerText: "useState()", isCorrect: true },
        { answerText: "useComponent()", isCorrect: false },
        { answerText: "useProps()", isCorrect: false }
      ]
    },
    {
      questionText: "`<div />` JSX kodu, hangi JavaScript koduna dönüştürülür?",
      topic: "JSX kodunun eşdeğer JavaScript koduna nasıl dönüştürüldüğü",

      answerOptions: [
        { answerText: "React.create('div')", isCorrect: false },
        { answerText: "React.createComponent('div')", isCorrect: false },
        { answerText: "React.createElement('div')", isCorrect: true },
        { answerText: "React.div()", isCorrect: false }
      ]
    },
    {
      questionText: "React Router ile hangi bileşen bir link oluşturur?",
      topic: "React Router'da hangi bileşenin bir link oluşturduğu",

      answerOptions: [
        { answerText: "<RouterLink />", isCorrect: false },
        { answerText: "<RouteLink />", isCorrect: false },
        { answerText: "<NavLink />", isCorrect: true },
        { answerText: "<LinkRoute />", isCorrect: false }
      ]
    }
    // Daha fazla soru ve kod blokları içeren sorular buraya eklenebilir...
  ];
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const [wrongAnswers, setWrongAnswers] = useState([]);

  const [studyAgainTopics, setStudyAgainTopics] = useState([]);

  const handleAnswerButtonClick = (
    isCorrect,
    questionText,
    answerText,
    topic
  ) => {
    if (isCorrect) {
      setScore(score + 1);
    } else {
      setWrongAnswers([
        ...wrongAnswers,
        {
          question: questionText,
          chosenAnswer: answerText,
          correctTopic: topic
        }
      ]);
      if (!studyAgainTopics.includes(topic)) {
        setStudyAgainTopics([...studyAgainTopics, topic]);
      }
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };
  return (
    <QuizContainer>
      {userName && <div>Hoşgeldin, {userName}!</div>}{" "}
      <Progress value={currentQuestion + 1} total={questions.length} />
      {showScore ? (
        <>
          <Feedback>
            Skorunuz: {score} / {questions.length}
          </Feedback>
          <div>
            Yanlış cevapladığınız sorular ve doğru cevaplar:
            {wrongAnswers.map((item, index) => (
              <WrongAnswer key={index}>
                <strong>Soru:</strong> {item.question}
                <br />
                <strong>Verdiğiniz Yanıt:</strong> {item.chosenAnswer}
                <br />
                <strong>Doğru Yanıt:</strong>{" "}
                {
                  questions
                    .find((q) => q.questionText === item.question)
                    .answerOptions.find((a) => a.isCorrect).answerText
                }
                <br />
                <strong>Yeniden Gözden Geçirmeniz Gereken Konu:</strong>{" "}
                {item.correctTopic}
              </WrongAnswer>
            ))}
          </div>
          {studyAgainTopics.length > 0 && (
            <div>
              <h3>Yeniden Gözden Geçirmeniz Gereken Konular:</h3>
              {studyAgainTopics.map((topic, index) => (
                <p key={index}>{topic}</p>
              ))}
            </div>
          )}
        </>
      ) : (
        <>
          <Question>
            Soru {currentQuestion + 1}/{questions.length}:{" "}
            {questions[currentQuestion].questionText}
          </Question>
          <div>
            {questions[currentQuestion].answerOptions.map(
              (answerOption, index) => (
                <AnswerButton
                  key={index}
                  onClick={() =>
                    handleAnswerButtonClick(
                      answerOption.isCorrect,
                      questions[currentQuestion].questionText,
                      answerOption.answerText,
                      questions[currentQuestion].topic // Konuyu da argüman olarak gönderiyoruz
                    )
                  }
                >
                  {answerOption.answerText}
                </AnswerButton>
              )
            )}
          </div>
        </>
      )}
    </QuizContainer>
  );
};

export default Quiz;
