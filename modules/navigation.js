export default () => {
  const nav1 = document.querySelector('#list');
  const nav2 = document.querySelector('#addNew');
  const nav3 = document.querySelector('#contact');

  const bookDisplaySection = document.querySelector('#bookSection');
  const formDisplaySection = document.querySelector('#formSection');
  const contactDisplaySection = document.querySelector('#contactSection');

  nav1.addEventListener('click', () => {
    if (bookDisplaySection.classList.contains('hidden')) {
      bookDisplaySection.classList.remove('hidden');
    }

    if (!formDisplaySection.classList.contains('hidden')) {
      formDisplaySection.classList.add('hidden');
    }

    if (!contactDisplaySection.classList.contains('hidden')) {
      contactDisplaySection.classList.add('hidden');
    }
  });

  nav2.addEventListener('click', () => {
    if (formDisplaySection.classList.contains('hidden')) {
      formDisplaySection.classList.remove('hidden');
    }

    if (!bookDisplaySection.classList.contains('hidden')) {
      bookDisplaySection.classList.add('hidden');
    }

    if (!contactDisplaySection.classList.contains('hidden')) {
      contactDisplaySection.classList.add('hidden');
    }
  });

  nav3.addEventListener('click', () => {
    if (contactDisplaySection.classList.contains('hidden')) {
      contactDisplaySection.classList.remove('hidden');
    }
    if (!bookDisplaySection.classList.contains('hidden')) {
      bookDisplaySection.classList.add('hidden');
    }
    if (!formDisplaySection.classList.contains('hidden')) {
      formDisplaySection.classList.add('hidden');
    }
  });
};
