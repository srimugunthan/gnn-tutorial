/* Reusable quiz widget for GNN tutorial lessons */

function initQuizzes() {
  document.querySelectorAll('.quiz').forEach(quiz => {
    const options = quiz.querySelectorAll('.quiz-options li');
    const explanation = quiz.querySelector('.quiz-explanation');

    options.forEach(option => {
      option.addEventListener('click', () => {
        // Disable all options
        options.forEach(o => o.classList.add('disabled'));

        const isCorrect = option.dataset.correct === 'true';
        option.classList.add(isCorrect ? 'correct' : 'wrong');

        // Highlight correct answer if wrong was selected
        if (!isCorrect) {
          options.forEach(o => {
            if (o.dataset.correct === 'true') o.classList.add('correct');
          });
        }

        // Show explanation
        if (explanation) {
          explanation.style.display = 'block';
          explanation.style.background = isCorrect ? 'var(--quiz-correct)' : 'var(--quiz-wrong)';
        }
      });
    });
  });
}

document.addEventListener('DOMContentLoaded', initQuizzes);
