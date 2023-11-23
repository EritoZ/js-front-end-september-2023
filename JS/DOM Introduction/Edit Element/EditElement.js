function editElement(ref, match, replacer) {
    const content = ref.textContent;
    ref.textContent = content.replace(new RegExp(match, 'g'), replacer);
}