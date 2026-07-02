const searchForm = document.querySelector('.search-form');
const searchInput = document.querySelector('#search-input');
const modeCards = document.querySelectorAll('.mode-card');

function pulseCard(card) {
  card.animate([
    { transform: 'scale(1)' },
    { transform: 'scale(0.985)' },
    { transform: 'scale(1)' }
  ], {
    duration: 260,
    easing: 'ease-out'
  });
}

searchForm.addEventListener('submit', event => {
  event.preventDefault();
  const query = searchInput.value.trim();
  const preferredCard = /food|ramen|pizza|burger|coffee|meal|delivery/i.test(query)
    ? document.querySelector('.food-card')
    : document.querySelector('.shopping-card');

  if (query) {
    pulseCard(preferredCard);
    preferredCard.focus();
  }
});

modeCards.forEach(card => {
  card.addEventListener('click', () => pulseCard(card));
});
