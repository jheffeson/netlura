# Netlura

Netlura é um projeto web que apresenta uma estrutura modular para exibição de conteúdo, incluindo um catálogo com componentes reutilizáveis. Este projeto utiliza HTML, CSS e JavaScript para criar uma interface interativa.

## Estrutura do Projeto

A estrutura do projeto está organizada da seguinte forma:

```
index.html
style.css
theme.js
assets/
catalogo/
	catalogo.css
	catalogo.html
	js/
		data.js
		main.js
		utils.js
		components/
			Card.js
			Carousel.js
js/
	index.js
```

### Descrição das Pastas e Arquivos

- **index.html**: Página principal do projeto.
- **style.css**: Estilos globais aplicados ao projeto.
- **theme.js**: Configurações e temas dinâmicos para o projeto.
- **assets/**: Diretório para armazenar recursos estáticos como imagens, fontes, etc.
- **catalogo/**: Contém os arquivos relacionados ao catálogo de itens.
  - **catalogo.css**: Estilos específicos para o catálogo.
  - **catalogo.html**: Página HTML do catálogo.
  - **js/**: Scripts JavaScript do catálogo.
    - **data.js**: Dados utilizados no catálogo.
    - **main.js**: Script principal para funcionalidades do catálogo.
    - **utils.js**: Funções utilitárias para suporte ao catálogo.
    - **components/**: Componentes reutilizáveis do catálogo.
      - **Card.js**: Componente para exibição de cartões.
      - **Carousel.js**: Componente para exibição de carrosséis.
- **js/**: Scripts JavaScript globais.
  - **index.js**: Script principal para funcionalidades gerais.

## Funcionalidades

- **Catálogo de Itens**: Uma interface modular para exibir itens em formato de cartões e carrosséis.
- **Componentes Reutilizáveis**: Scripts organizados em componentes para facilitar a manutenção e reutilização.
- **Estilos Responsivos**: CSS estruturado para garantir uma boa experiência em diferentes dispositivos.

## Tecnologias Utilizadas

- **HTML5**
- **CSS3**
- **JavaScript (ES6)**
