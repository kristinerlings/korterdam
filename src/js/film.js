console.log('film js works');

const $btnNext = document.querySelector('.next');
const $btnPrev = document.querySelector('.prev');

const showNextBatch = () => {
  let $currentBatch = document.querySelector('.show');
  $currentBatch.classList.remove('show');

  let $nextBatch = $currentBatch.nextElementSibling;
  if ($nextBatch) {
    $nextBatch.classList.add('show');
    $btnPrev.disabled = false;
  } else {
    let $firstBatch = document.querySelector('.carousel__reel:first-child');
    $firstBatch.classList.add('show');
  }
};

const showPreviousBatch = () => {
  let $currentBatch = document.querySelector('.show');
  $currentBatch.classList.remove('show');

  let $prevBatch = $currentBatch.previousElementSibling;
  if ($prevBatch) {
    $prevBatch.classList.add('show');
  } else {
    let $lastBatch = document.querySelector('.carousel__reel:last-child');

    $lastBatch.classList.add('show');
  }
};

const init = () => {
  $btnNext.addEventListener('click', showNextBatch);
  $btnPrev.addEventListener('click', showPreviousBatch);
};

init();
