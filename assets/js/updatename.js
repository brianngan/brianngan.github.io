const para = document.querySelector('button.updatename');

para.addEventListener('click', updateName);

function updateName() {
  let name = prompt('Rename to what?');
  para.textContent = name;
}