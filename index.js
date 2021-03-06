function openNav() {
  document.getElementById('myNav').style.width = '100%';
}

function closeNav() {
  document.getElementById('myNav').style.width = '0%';
}

openNav();
closeNav();

const speakers = [
  {
    id: 1,
    name: 'Haruki Murakami',
    description: 'A Japanese writer, his work has been translated to over 50 languages',
    info: 'His novels, essays, and short stories have been bestsellers in Japan as well as internationally.',
    image: './Assets/harukimukarami.jpg',
  },
  {
    id: 2,
    name: 'J. K. Rowling',
    description: 'A British author, She is best known for writing the Harry Potter fantasy series',
    info: 'Harry potter series has won multiple awards and sold more than 500 million copies, making it the best selling series in history',
    image: './Assets/JKRowling.jpg',
  },
  {
    id: 3,
    name: 'Stephen King',
    description: 'An American author of horror, supernatural fiction, suspense, crime, science-fiction, and fantasy novels',
    info: 'His books have sold more than 350 million copies, and many have been adapted into films, television series, miniseries, and comic books.',
    image: './Assets/Stephenking.jpg',
  },
  {
    id: 4,
    name: 'Chimamanda Ngozi Adichie',
    description: 'A Nigerian writer whose works range from novels to short stories to nonfiction',
    info: 'Adichie, a feminist, has written three best seller novels: Purple Hibiscus, Half of a Yellow Sun and Americanah',
    image: './Assets/Chimamanda.jpg',
  },
  {
    id: 5,
    name: 'Khaled Hosseini',
    description: 'An Afghan-American novelist, physician, activist, humanitarian, and UNHCR goodwill ambassador.',
    info: 'His debut novel The Kite Runner was a critical and commercial success; the book, as well as his subsequent novels, have all been best sellers.',
    image: './Assets/KhaledHosseini.jpg',
  },
  {
    id: 6,
    name: 'Tayari Jones',
    description: 'An American writer of non-fiction',
    info: 'Her most recently  novel An American Marriage, was a 2018 Oprah Book Club Selection and won the 2019 Womens Prize for Fiction',
    image: './Assets/TayariJones.jpg',
  },
];

const sectionContainer = document.querySelector('.featured-speakers');

function loadSpeakers() {
  const headerElement = document.createElement('h3');
  headerElement.classList.add('featured-speakers-header');
  headerElement.textContent = 'Featured Speakers';

  const line = document.createElement('hr');

  const speakersList = document.createElement('ul');
  speakersList.classList.add('featured-speakers-ul');

  sectionContainer.appendChild(headerElement);
  sectionContainer.appendChild(line);
  sectionContainer.appendChild(speakersList);

  const getSpeakers = speakers.map((item) => {
    const {
      name, description, info, image,
    } = item;
    return (
      `<li class="featured-speakers-list">
                <img src=${image} alt=${name}>
                <div class="speaker-container">
                    <h3 class="speaker-name">${name}</h3>
                    <h4 class="speaker-description">${description}</h4>
                    <p class="speaker-text">${info}</p>
                </div>      
            </li>`
    );
  });

  speakersList.innerHTML = getSpeakers.join('');
}

loadSpeakers();