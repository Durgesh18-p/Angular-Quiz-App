import { CommonModule } from '@angular/common';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-gamepage',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gamepage.component.html',
  styleUrls: ['./gamepage.component.css']
})
export class GamepageComponent implements OnInit, OnDestroy {
  mcq = [
    {
      "id": 1,
      "question": "What does HTML stand for?",
      "answers": {
        "ans1": "Hyperlinks and Text Markup Language",
        "ans2": "Home Tool Markup Language",
        "ans3": "Hyper Text Markup Language",
        "ans4": "Hyperlinking Text Mark Language"
      },
      "correctAnswer": "ans3"
    },
    {
      "id": 2,
      "question": "Which of the following is used to style a web page?",
      "answers": {
        "ans1": "HTML",
        "ans2": "CSS",
        "ans3": "JavaScript",
        "ans4": "PHP"
      },
      "correctAnswer": "ans2"
    },
    {
      "id": 3,
      "question": "Which HTML tag is used to define an internal style sheet?",
      "answers": {
        "ans1": "<style>",
        "ans2": "<script>",
        "ans3": "<css>",
        "ans4": "<link>"
      },
      "correctAnswer": "ans1"
    },
    {
      "id": 4,
      "question": "What is the correct syntax for referring to an external script called 'app.js'?",
      "answers": {
        "ans1": "<script src='app.js'>",
        "ans2": "<script href='app.js'>",
        "ans3": "<script ref='app.js'>",
        "ans4": "<script link='app.js'>"
      },
      "correctAnswer": "ans1"
    },
    {
      "id": 5,
      "question": "Which of the following is not a JavaScript framework?",
      "answers": {
        "ans1": "React",
        "ans2": "Angular",
        "ans3": "Vue.js",
        "ans4": "Django"
      },
      "correctAnswer": "ans4"
    }
  ];

  currentQuestionIndex = 0;
  score = 0;
  selectedAnswer = '';
  quizCompleted = false;
  resultMessage = '';
  timer: any;
  timeLeft = 30;

  ngOnInit() {
    this.startTimer();
  }

  ngOnDestroy() {
    clearInterval(this.timer);
  }

  startTimer() {
    this.timeLeft = 30;
    this.timer = setInterval(() => {
      this.timeLeft -= 1;
      if (this.timeLeft === 0) {
        this.onSubmit();
      }
    }, 1000);
  }

  onSubmit() {
    if (!this.selectedAnswer) {
      alert("Please select an answer before proceeding.");
      return;
    }

    if (this.selectedAnswer === this.mcq[this.currentQuestionIndex].correctAnswer) {
      this.score += 1;
    }

    this.currentQuestionIndex += 1;
    this.selectedAnswer = '';
    clearInterval(this.timer);

    if (this.currentQuestionIndex >= this.mcq.length) {
      this.quizCompleted = true;
      this.resultMessage = this.score >= 3 ? 'Congratulations, you win!' : 'Sorry, you lose.';
    } else {
      this.startTimer();
    }
  }

  onAnswerSelect(answer: string) {
    this.selectedAnswer = answer;
  }

  resetQuiz() {
    this.currentQuestionIndex = 0;
    this.score = 0;
    this.selectedAnswer = '';
    this.quizCompleted = false;
    this.resultMessage = '';
    this.startTimer();
  }
}
