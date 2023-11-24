function search() {
   const input = document.getElementById('searchText');

   if (!input.value) {
      return;
   }

   const towns = Array.from(document.getElementById('towns').children);
   const result = document.getElementById('result');

   let itemsFound = 0;
   towns.map(town => {
      if (town.textContent.includes(input.value)) {
         town.style.fontWeight = 'bold';
         town.style.textDecoration = 'underline';
         itemsFound++;
      } else {
         town.style.fontWeight = 'normal';
         town.style.textDecoration = 'none';
      }
   })

   result.textContent = `${itemsFound} matches found`;
}
