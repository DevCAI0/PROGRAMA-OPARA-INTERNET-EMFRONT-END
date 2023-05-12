// Seleciona os elementos da página
const recipes = document.querySelectorAll('.recipe');
const paginationItems = document.querySelectorAll('.page-link');

// Define os gradientes para cada receita
const gradients = ['linear-gradient(to right, #f6d365, #fda085)', 'linear-gradient(to right, #a1c4fd, #c2e9fb)', 'linear-gradient(to right, #bdc3c7, #2c3e50)'];

// Função para mostrar a receita selecionada
const showRecipe = (recipeNumber) => {
  // Oculta todas as receitas
  recipes.forEach(recipe => recipe.style.display = 'none');
  // Mostra apenas a receita selecionada
  document.querySelector(`#recipe${recipeNumber}`).style.display = 'block';
  // Define o gradiente da página selecionada
  document.body.style.backgroundImage = gradients[recipeNumber - 1];
  // Atualiza a classe 'active' da paginação
  paginationItems.forEach(item => {
    if (item.innerText == recipeNumber) {
      item.parentElement.classList.add('active');
    } else {
      item.parentElement.classList.remove('active');
    }
  });
}

// Adiciona os ouvintes de eventos para a paginação
paginationItems.forEach(item => {
  item.addEventListener('click', (event) => {
    event.preventDefault();
    showRecipe(parseInt(item.innerText));
  });
});

// Mostra a primeira receita por padrão
showRecipe(1);
