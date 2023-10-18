<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Recetas Culinarias</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <header>
        <nav>
            <ul>
                <li><a href="#inicio">Inicio</a></li>
                <li><a href="#recetas">Recetas</a></li>
                <li><a href="#nosotros">Sobre Nosotros</a></li>
            </ul>
        </nav>
    </header>
    
    <main>
        <section id="inicio">
            <h1>Bienvenido a Recetas Culinarias</h1>
            <p>Encuentra las mejores recetas para deleitar tu paladar.</p>
        </section>
        
        <section id="recetas">
            <h2>Recetas</h2>
            <input type="text" id="search" placeholder="Buscar recetas por nombre">
            <div id="recipes-list">
                <!-- Aquí se mostrarán las recetas dinámicamente -->
            </div>
        </section>
        
        <section id="nosotros">
            <h2>Sobre Nosotros</h2>
            <p>Somos amantes de la cocina y nos encanta compartir nuestras mejores recetas contigo.</p>
        </section>
    </main>

    <footer>
        <p>&copy; 2023 Recetas Culinarias</p>
    </footer>

    <button id="add-recipe-button">Añadir Receta</button>

    <div id="recipe-modal" class="modal">
        <div class="modal-content">
            <span class="close">&times;</span>
            <h2>Añadir Receta</h2>
            <form id="recipe-form">
                <label for="recipe-name">Nombre de la receta:</label>
                <input type="text" id="recipe-name" required>
                <label for="ingredients">Ingredientes:</label>
                <textarea id="ingredients" required></textarea>
                <label for="instructions">Instrucciones:</label>
                <textarea id="instructions" required></textarea>
                <button type="submit">Guardar</button>
            </form>
        </div>
    </div>

    <script src="script.js"></script>
</body>
</html>