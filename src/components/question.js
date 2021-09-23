import React, {useState, useEffect} from "react";
import { MDBContainer, MDBRow, MDBCol, MDBListGroupItem } from "mdbreact";
import star from '../star.png'
const questions = [
    {
        questionText: '1 What is the capital of France?',
        answerOptions: [
            { answerText: 'New York', isCorrect: false },
            { answerText: 'London', isCorrect: false },
            { answerText: 'Paris', isCorrect: true },
            { answerText: 'Dublin', isCorrect: false },
        ],
    },
    {
        questionText: '2 Who is CEO of Tesla?',
        answerOptions: [
            { answerText: 'Jeff Bezos', isCorrect: false },
            { answerText: 'Elon Musk', isCorrect: true },
            { answerText: 'Bill Gates', isCorrect: false },
            { answerText: 'Tony Stark', isCorrect: false },
        ],
    },
    {
        questionText: '3 The iPhone was created by which company?',
        answerOptions: [
            { answerText: 'Apple', isCorrect: true },
            { answerText: 'Intel', isCorrect: false },
            { answerText: 'Amazon', isCorrect: false },
            { answerText: 'Microsoft', isCorrect: false },
        ],
    },
    {
        questionText: '4 How many Harry Potter books are there?',
        answerOptions: [
            { answerText: '1', isCorrect: false },
            { answerText: '4', isCorrect: false },
            { answerText: '6', isCorrect: false },
            { answerText: '7', isCorrect: true },
        ],
    },
    {
        questionText: '5 What is the capital of France?',
        answerOptions: [
            { answerText: 'New York', isCorrect: false },
            { answerText: 'London', isCorrect: false },
            { answerText: 'Paris', isCorrect: true },
            { answerText: 'Dublin', isCorrect: false },
        ],
    },
    {
        questionText: '6 Who is CEO of Tesla?',
        answerOptions: [
            { answerText: 'Jeff Bezos', isCorrect: false },
            { answerText: 'Elon Musk', isCorrect: true },
            { answerText: 'Bill Gates', isCorrect: false },
            { answerText: 'Tony Stark', isCorrect: false },
        ],
    },
    {
        questionText: '7 The iPhone was created by which company?',
        answerOptions: [
            { answerText: 'Apple', isCorrect: true },
            { answerText: 'Intel', isCorrect: false },
            { answerText: 'Amazon', isCorrect: false },
            { answerText: 'Microsoft', isCorrect: false },
        ],
    },
    {
        questionText: '8 How many Harry Potter books are there?',
        answerOptions: [
            { answerText: '1', isCorrect: false },
            { answerText: '4', isCorrect: false },
            { answerText: '6', isCorrect: false },
            { answerText: '7', isCorrect: true },
        ],
    },
];



const Question = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);
    const [currentIndex, setCurrentIndex] = useState(-1)
    const [currentAns, setCurrentAns] = useState(false)
    const [showSubmit, setShowSubmit] = useState(false)
    const [checkAnswer, setCheckAnswer] = useState()
    const [selection, setSelection] = useState("")
    const [showNext, setNext] = useState(false)
    const [disable, setDisable] = useState(false)
    const [seconds, setSeconds] = useState(120);
    let lastNumber = 0 
    var Counter = 0

    const setActiveAns = (ans, index) => {
        setSelection("Active")
        setCurrentIndex(index)
        // setCurrentAns(ans)
        setDisable(true)
        setCheckAnswer(checkAnswer)
        checkAns(ans)
      }
 
      useEffect(() => {
        if (seconds > 0) {
          setTimeout(() => setSeconds(seconds - 1), 1000);
        } else {
          alert("times Up")
        }
      });

    const getRandNumber = () =>{
        var x = Math.floor((Math.random() * 2) + 1); // get new random number

        if (x === lastNumber) { // compare with last number
          return getRandNumber() // if they are the same, call the function again to repeat the process
        }
        return x // if they're not the same, return it
      }

      const handleQues = () => {
        setSelection("")
        setDisable(false)
        console.log(score)
        
        const nextQuestion = currentQuestion + 1;
            if (nextQuestion < questions.length) {
                setCurrentQuestion(nextQuestion);
            } else {
                alert(score)
            }
    }

    const checkAns = (ans) => {
        if(ans === true){
            setSelection("Right")
            setNext(true)
            setShowSubmit(true)
            setScore(score + 1);

        }
        if(ans === false){
            setSelection("Wrong")
            setShowSubmit(false)

        }
        setCheckAnswer(currentAns)
    }   

 const showStar = () =>{
    let starList = []
        for (var i = 0; i < score; i++) {
            starList.push( <img src={star} style={{width:'35px', padding:'2%'}}/>);
        }
        return starList;
 }

  return (
      <div className="centerQues">
      <MDBContainer>
      <MDBRow>
      <MDBCol sm="3">
      <div className="bg">
         {showStar()}
      </div>
      </MDBCol>
      <MDBCol sm="3">
       </MDBCol>
      <MDBCol sm="3">
       </MDBCol>
       <MDBCol sm="3">
       <div className="timer">
      Timer: {seconds}
      </div>
       </MDBCol>
       
      </MDBRow>
     
      </MDBContainer>
       
      <br/>
      
      <br/>
    
     
    <MDBContainer>
      <MDBRow>
        <MDBCol sm="12">
        <div className="question">
        
        {questions[currentQuestion].questionText}
        </div>
        </MDBCol>
      </MDBRow>
      <br />
      <br />
      <MDBRow>
     
      {questions[currentQuestion].answerOptions.map((answerOption, i) => (
        <MDBCol sm="6">
        <MDBListGroupItem  disabled={disable} key={i} className={
                    "answer" +
                    (i === currentIndex ? selection : "")  
                  }
                  onClick={() => setActiveAns(answerOption.isCorrect, i)}>
        {answerOption.answerText}
        </MDBListGroupItem>
        </MDBCol> ))}
    
      </MDBRow> 
      {showSubmit &&
      <button onClick={() => handleQues()} block style={{marginTop:'25px'}} className="button">
      Next
      </button>}
      {!showSubmit &&
      <button disabled  onClick={() => handleQues()} block style={{marginTop:'25px'}} className="disBtn">
      Next
      </button>}
    
    </MDBContainer>
    {/* <div className='app'>
			{showScore ? (
				<div className='score-section'>
					You scored {score} out of {questions.length}
				</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOption, i) => (
							<button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}
					</div>
				</>
			)}
		</div> */}
    </div>
  );
}

export default Question;
