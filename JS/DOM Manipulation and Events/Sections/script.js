function create(words) {
   const content = document.getElementById('content');

   for (const word of words) {
      const sectionElement = document.createElement('div');
      const paragraphElement = document.createElement('p');

      paragraphElement.textContent = word;
      paragraphElement.style.display = 'none';

      sectionElement.addEventListener('click', () => {
         paragraphElement.style.display = 'block';
      })

      sectionElement.appendChild(paragraphElement);

      content.appendChild(sectionElement);
   }
}