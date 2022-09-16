const teachersData = [
  {
    id: 7,
    name: 'Nathan Gill',
    position: 'Berklee College of Music professor ',
    description: 'A board certified-music therapist, is the founder of Bay Area Music Therapy(Opens in a new window), an organization offering individualized music therapy programs.',
    image: 'teacher_7.png',
  },

  {
    id: 2,
    name: 'Yochai Benkler',
    position: 'CEO; Cofounder of BFM Jazz Records',
    description: 'When we caught wind that Steve Corn’s record label, BFM Jazz, had three releases that were nominated for five Grammys this year.',
    image: 'teacher_2.png',
  },
  {
    id: 3,
    name: 'Will Calhoun',
    position: 'Julliard Alumni',
    description: 'After graduating with honors from Julliard, Will Calhoun 86 went on to chart-topping success with rock band Living Colour and has played with jazz icons.',
    image: 'teacher_3.png',
  },
  {
    id: 4,
    name: 'Denise Barbar',
    position: 'Owner and Head Engineer, MONOLisa Studios',
    description: 'Grammy-winning engineer Denise Barbarita is the owner and head engineer of MONOLisa Studios in New York City. She works on album projects and audio post-production for film and television.',
    image: 'teacher_4.png',
  },
  {
    id: 5,
    name: 'Gary Burton',
    position: 'Pianist',
    description: 'His long career as a performer, teacher, improviser, recording artist, and mentor to generations of musicians has been entwined with Berklee since he first came to Boston to attend the college in the early 60s.',
    image: 'teacher_5.png',
  },

  {
    id: 6,
    name: 'Eugene Gearty',
    position: 'Sound Designer/Editor',
    description: 'Eugene Gearty 82 is an Oscar and Emmy-winning film sound designer and editor whose lengthy list of credits include Life of Pi, Eternal Sunshine of the Spotless Mind.',
    image: 'teacher_6.png',
  },
];

const teacherInformation = teachersData.map((teacher) => `
  <div class='teacher d-flex flex-row align-items-center'>
  <img class='teacher-img col-4' src='./Images/${teacher.image}' alt='Teacher ${teacher.id}'>
  <div class='teacher-name col-8'>
    <h3 class='teacher-name'>${teacher.name}</h3>
    <p class='teacher-position'>${teacher.position}</p>
    <hr class='teacher-div'>
    <p class='teacher-description'>${teacher.description}</p>
  </div>
  </div>
`);

const teacherGrid = document.querySelector('.teachers-grid');
const parser = new DOMParser();

teacherInformation.forEach((teacherString) => {
  const teacherHtml = parser.parseFromString(teacherString, 'text/html').body.firstChild;
  teacherGrid.append(teacherHtml);
});