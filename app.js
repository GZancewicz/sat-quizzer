class SATQuizApp {
    constructor() {
        this.currentQuiz = null;
        this.currentQuestionIndex = 0;
        this.score = 0;
        this.streak = 0;
        this.bestStreak = 0;
        this.totalPoints = parseInt(localStorage.getItem('totalPoints') || '0');
        this.selectedAnswer = null;
        this.quizStartTime = null;
        this.questionStartTime = null;
        this.userAnswers = [];
        
        this.stats = {
            math: { correct: 0, total: 0 },
            reading: { correct: 0, total: 0 },
            writing: { correct: 0, total: 0 }
        };
        
        this.loadStats();
        this.initializeEventListeners();
        this.updateUI();
        this.checkAchievements();
    }
    
    initializeEventListeners() {
        document.querySelectorAll('.subject-card').forEach(card => {
            card.addEventListener('click', (e) => {
                const subject = e.currentTarget.dataset.subject;
                this.selectedSubject = subject;
                this.showDifficultySelector();
            });
        });
        
        document.querySelectorAll('.difficulty-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const difficulty = e.currentTarget.dataset.difficulty;
                this.startQuiz(this.selectedSubject, difficulty, 5);
            });
        });
        
        document.getElementById('cancel-difficulty').addEventListener('click', () => {
            this.hideDifficultySelector();
        });
        
        document.getElementById('back-btn').addEventListener('click', () => {
            this.showScreen('home-screen');
        });
        
        document.getElementById('submit-btn').addEventListener('click', () => {
            this.submitAnswer();
        });
        
        document.getElementById('next-btn').addEventListener('click', () => {
            this.nextQuestion();
        });
        
        document.getElementById('retry-btn').addEventListener('click', () => {
            this.startQuiz(this.currentQuiz.subject, this.currentQuiz.difficulty);
        });
        
        document.getElementById('home-btn').addEventListener('click', () => {
            this.showScreen('home-screen');
        });
    }
    
    startQuiz(subject, difficulty = 'easy', questionCount = 5) {
        this.currentQuiz = {
            subject: subject,
            difficulty: difficulty,
            questions: getQuestionsByDifficulty(subject, difficulty, questionCount)
        };
        this.currentQuestionIndex = 0;
        this.score = 0;
        this.streak = 0;
        this.bestStreak = 0;
        this.userAnswers = [];
        this.quizStartTime = Date.now();
        this.selectedAnswer = null;
        
        const subjectLabel = subject === 'mixed' ? 'Mixed Practice' : 
            subject.charAt(0).toUpperCase() + subject.slice(1);
        document.getElementById('subject-label').textContent = 
            `${subjectLabel} - ${difficulty.charAt(0).toUpperCase() + difficulty.slice(1)}`;
        document.getElementById('total-questions').textContent = 
            this.currentQuiz.questions.length;
        
        this.showScreen('quiz-screen');
        this.displayQuestion();
    }
    
    displayQuestion() {
        const question = this.currentQuiz.questions[this.currentQuestionIndex];
        this.questionStartTime = Date.now();
        this.selectedAnswer = null;
        
        document.getElementById('question-num').textContent = this.currentQuestionIndex + 1;
        document.getElementById('question-text').textContent = question.question;
        
        const answersContainer = document.getElementById('answers');
        answersContainer.innerHTML = '';
        
        question.answers.forEach((answer, index) => {
            const button = document.createElement('button');
            button.className = 'answer-btn';
            button.innerHTML = `
                <span class="answer-letter">${String.fromCharCode(65 + index)}</span>
                <span class="answer-text">${answer}</span>
            `;
            button.addEventListener('click', () => this.selectAnswer(index));
            answersContainer.appendChild(button);
        });
        
        document.getElementById('submit-btn').disabled = true;
        document.getElementById('submit-btn').style.display = 'block';
        document.getElementById('next-btn').style.display = 'none';
        document.getElementById('explanation-box').style.display = 'none';
        
        this.startTimer();
    }
    
    selectAnswer(index) {
        this.selectedAnswer = index;
        
        document.querySelectorAll('.answer-btn').forEach((btn, i) => {
            btn.classList.toggle('selected', i === index);
        });
        
        document.getElementById('submit-btn').disabled = false;
    }
    
    submitAnswer() {
        if (this.selectedAnswer === null) return;
        
        const question = this.currentQuiz.questions[this.currentQuestionIndex];
        const correct = this.selectedAnswer === question.correct;
        
        this.userAnswers.push({
            question: question.question,
            userAnswer: question.answers[this.selectedAnswer],
            correctAnswer: question.answers[question.correct],
            correct: correct
        });
        
        document.querySelectorAll('.answer-btn').forEach((btn, i) => {
            btn.disabled = true;
            if (i === question.correct) {
                btn.classList.add('correct');
            } else if (i === this.selectedAnswer && !correct) {
                btn.classList.add('incorrect');
            }
        });
        
        if (correct) {
            this.score++;
            this.streak++;
            this.bestStreak = Math.max(this.bestStreak, this.streak);
            const points = this.calculatePoints();
            this.totalPoints += points;
            
            const encouragements = [
                'Excellent work! 🌟',
                'You\'re on fire! 🔥',
                'Amazing job! 💪',
                'Keep it up! 🚀',
                'Brilliant! ✨',
                'You\'ve got this! 🎯',
                'Fantastic! 🎉',
                'Super! ⭐'
            ];
            const message = encouragements[Math.floor(Math.random() * encouragements.length)];
            this.showNotification(`${message} +${points} points`, 'success');
            
            const subjectKey = this.currentQuiz.subject === 'mixed' ? 'math' : this.currentQuiz.subject;
            this.stats[subjectKey].correct++;
        } else {
            this.streak = 0;
            const encouragements = [
                'No worries, you\'ll get the next one!',
                'Keep trying, you\'re learning!',
                'That\'s okay, check the explanation!',
                'Learning from mistakes makes you stronger!'
            ];
            const message = encouragements[Math.floor(Math.random() * encouragements.length)];
            this.showNotification(message, 'info');
        }
        
        const subjectKey = this.currentQuiz.subject === 'mixed' ? 'math' : this.currentQuiz.subject;
        this.stats[subjectKey].total++;
        
        document.getElementById('explanation-box').style.display = 'block';
        document.getElementById('explanation-text').textContent = question.explanation;
        
        document.getElementById('submit-btn').style.display = 'none';
        document.getElementById('next-btn').style.display = 'block';
        
        this.updateUI();
        this.saveStats();
    }
    
    nextQuestion() {
        this.currentQuestionIndex++;
        
        if (this.currentQuestionIndex < this.currentQuiz.questions.length) {
            this.displayQuestion();
        } else {
            this.showResults();
        }
    }
    
    showResults() {
        const timeTaken = Math.floor((Date.now() - this.quizStartTime) / 1000);
        const minutes = Math.floor(timeTaken / 60);
        const seconds = timeTaken % 60;
        const percentage = Math.round((this.score / this.currentQuiz.questions.length) * 100);
        
        document.getElementById('score-percent').textContent = percentage + '%';
        document.getElementById('correct-count').textContent = this.score;
        document.getElementById('total-count').textContent = this.currentQuiz.questions.length;
        document.getElementById('time-taken').textContent = 
            `${minutes}:${seconds.toString().padStart(2, '0')}`;
        document.getElementById('points-earned').textContent = 
            this.calculateTotalQuizPoints();
        document.getElementById('best-streak').textContent = this.bestStreak;
        
        // Add personalized feedback based on performance
        let feedbackMessage = '';
        if (percentage === 100) {
            feedbackMessage = '🏆 PERFECT SCORE! You\'re a SAT Master!';
        } else if (percentage >= 80) {
            feedbackMessage = '🌟 Excellent work! You\'re almost there!';
        } else if (percentage >= 60) {
            feedbackMessage = '💪 Good job! Keep practicing to improve!';
        } else if (percentage >= 40) {
            feedbackMessage = '📚 Nice effort! Review the explanations to learn more!';
        } else {
            feedbackMessage = '🎯 Keep going! Every practice makes you better!';
        }
        
        const feedbackElement = document.createElement('div');
        feedbackElement.className = 'feedback-message';
        feedbackElement.textContent = feedbackMessage;
        document.querySelector('.result-score').appendChild(feedbackElement);
        
        // Check if ready for next difficulty
        this.checkProgressionStatus();
        
        const reviewContainer = document.getElementById('answer-review');
        reviewContainer.innerHTML = '';
        
        this.userAnswers.forEach((answer, index) => {
            const reviewItem = document.createElement('div');
            reviewItem.className = `review-item ${answer.correct ? 'correct' : 'incorrect'}`;
            reviewItem.innerHTML = `
                <div class="review-header">
                    <span>Question ${index + 1}</span>
                    <span class="review-status">${answer.correct ? '✓' : '✗'}</span>
                </div>
                <p class="review-question">${answer.question}</p>
                <p class="review-answer">Your answer: ${answer.userAnswer}</p>
                ${!answer.correct ? `<p class="review-correct">Correct answer: ${answer.correctAnswer}</p>` : ''}
            `;
            reviewContainer.appendChild(reviewItem);
        });
        
        this.checkAchievements();
        this.showScreen('result-screen');
    }
    
    showDifficultySelector() {
        document.getElementById('subject-cards').style.display = 'none';
        document.getElementById('difficulty-selector').style.display = 'block';
        
        // Check which difficulties are unlocked
        ['easy', 'medium', 'hard'].forEach(diff => {
            const btn = document.querySelector(`[data-difficulty="${diff}"]`);
            if (diff === 'easy') {
                btn.disabled = false;
            } else if (diff === 'medium') {
                const easyPassed = localStorage.getItem(`${this.selectedSubject}_easy_passed`);
                btn.disabled = !easyPassed;
                if (!easyPassed) {
                    btn.classList.add('locked');
                    btn.querySelector('.diff-desc').textContent = '🔒 Complete Easy first';
                }
            } else if (diff === 'hard') {
                const mediumPassed = localStorage.getItem(`${this.selectedSubject}_medium_passed`);
                btn.disabled = !mediumPassed;
                if (!mediumPassed) {
                    btn.classList.add('locked');
                    btn.querySelector('.diff-desc').textContent = '🔒 Complete Medium first';
                }
            }
        });
    }
    
    hideDifficultySelector() {
        document.getElementById('difficulty-selector').style.display = 'none';
        document.getElementById('subject-cards').style.display = 'grid';
    }
    
    checkProgressionStatus() {
        const subject = this.currentQuiz.subject;
        const difficulty = this.currentQuiz.difficulty;
        const percentage = (this.score / this.currentQuiz.questions.length) * 100;
        
        if (percentage >= 80) {
            const progressKey = `${subject}_${difficulty}_passed`;
            if (!localStorage.getItem(progressKey)) {
                localStorage.setItem(progressKey, 'true');
                
                if (difficulty === 'easy') {
                    this.showNotification('🎉 Medium difficulty unlocked!', 'success');
                } else if (difficulty === 'medium') {
                    this.showNotification('🏆 Hard difficulty unlocked!', 'success');
                } else if (difficulty === 'hard') {
                    this.showNotification('⭐ You mastered this topic!', 'success');
                }
            }
        }
    }
    
    calculatePoints() {
        const basePoints = 10;
        const streakBonus = this.streak > 1 ? (this.streak - 1) * 5 : 0;
        const timeBonus = Math.max(0, 5 - Math.floor((Date.now() - this.questionStartTime) / 10000));
        return basePoints + streakBonus + timeBonus;
    }
    
    calculateTotalQuizPoints() {
        return this.score * 10 + this.bestStreak * 20;
    }
    
    startTimer() {
        const timerFill = document.getElementById('timer-fill');
        timerFill.style.width = '100%';
        timerFill.style.transition = 'width 30s linear';
        setTimeout(() => {
            timerFill.style.width = '0%';
        }, 50);
    }
    
    showScreen(screenId) {
        document.querySelectorAll('.screen').forEach(screen => {
            screen.classList.remove('active');
        });
        document.getElementById(screenId).classList.add('active');
    }
    
    showNotification(message, type) {
        const notification = document.getElementById('notification');
        notification.textContent = message;
        notification.className = `notification ${type} show`;
        
        setTimeout(() => {
            notification.classList.remove('show');
        }, 3000);
    }
    
    updateUI() {
        document.getElementById('points').textContent = this.totalPoints;
        document.getElementById('streak').textContent = this.streak;
        
        ['math', 'reading', 'writing'].forEach(subject => {
            const percent = this.stats[subject].total > 0 
                ? Math.round((this.stats[subject].correct / this.stats[subject].total) * 100)
                : 0;
            
            document.getElementById(`${subject}-progress`).style.width = `${percent}%`;
            document.getElementById(`${subject}-percent`).textContent = `${percent}%`;
        });
    }
    
    loadStats() {
        const saved = localStorage.getItem('satQuizStats');
        if (saved) {
            this.stats = JSON.parse(saved);
        }
    }
    
    saveStats() {
        localStorage.setItem('satQuizStats', JSON.stringify(this.stats));
        localStorage.setItem('totalPoints', this.totalPoints.toString());
    }
    
    checkAchievements() {
        const achievements = [];
        
        if (this.totalPoints >= 100 && !localStorage.getItem('achievement_first100')) {
            achievements.push('First 100 Points!');
            localStorage.setItem('achievement_first100', 'true');
        }
        
        if (this.streak >= 5 && !localStorage.getItem('achievement_streak5')) {
            achievements.push('5 Question Streak!');
            localStorage.setItem('achievement_streak5', 'true');
        }
        
        if (this.score === 10 && this.currentQuiz && !localStorage.getItem('achievement_perfect')) {
            achievements.push('Perfect Score!');
            localStorage.setItem('achievement_perfect', 'true');
        }
        
        const totalQuestions = Object.values(this.stats).reduce((sum, stat) => sum + stat.total, 0);
        if (totalQuestions >= 50 && !localStorage.getItem('achievement_50questions')) {
            achievements.push('50 Questions Completed!');
            localStorage.setItem('achievement_50questions', 'true');
        }
        
        if (achievements.length > 0) {
            const achievementList = document.getElementById('achievement-list');
            achievements.forEach(achievement => {
                const badge = document.createElement('div');
                badge.className = 'achievement-badge';
                badge.textContent = achievement;
                achievementList.insertBefore(badge, achievementList.firstChild);
            });
            
            if (document.getElementById('result-screen').classList.contains('active')) {
                document.getElementById('achievement-unlocked').style.display = 'block';
                document.getElementById('achievement-name').textContent = achievements[0];
            }
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new SATQuizApp();
});