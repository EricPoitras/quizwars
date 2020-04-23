# Quiz Wars
A Star Wars themed quiz app for EDPS 6447 summer 2020

# Function Flowchart
List of Events, functions, and invocations
_____________________________________________________________

| document "DOMContentLoaded" | --> viewRouter("landing")
| button Start "click" |        --> viewRouter("quiz")
| button Hint "click" |         --> openHint()
| button Submit "click" |       -->
endTimer()                      -->
getAnswer()                     -->
evaluateAnswer()                --> setAnswer() --> setAgentDialogue() --> 
setQuestionPrevious()                                                  -->
setQuestionNext()                                                      --> initializeQuestion(counter) -->
                                                                                                       --> getQuestion(current_question)
                                                                                                       --> setQuestionId()
                                                                                                       --> setQuestionTotal()
                                                                                                       --> setAnswerCorrect()
                                                                                                       --> setAnswerIncorrect()
                                                                                                       --> disableButtons()
                                                                                                       --> setFeedback()
____________________________________________________________

#getAnswer()
#evaluateAnswer()
#setAnswer()
#setFeedback()
#getQuestion()
#setQuestionId()
#setQuestionTotal()
#setAnswerCorrect()
#setAnswerIncorrect()
#setQuestionPrevious()
#setQuestionNext()
#disableButtons()
#initializeQuestion()
#openHint()
#startTimer()
#endTimer()
#setAgentDialogue()
#viewRouter()
             
