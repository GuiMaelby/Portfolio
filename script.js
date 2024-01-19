document.addEventListener("DOMContentLoaded", function () {
    const textoOriginal = "Sou um graduado pela Faculdade de Informática e Administração Paulista (FIAP) com formação em Análise e Desenvolvimento de Sistemas. Minha base educacional abrange uma variedade de disciplinas, incluindo Java, HTML, CSS, JavaScript, Inteligência Artificial, Machine Learning, Chatbot e Quality Assurance, além disso, tive a oportunidade de vivenciar experiências colaborativas com diversas empresas, onde desenvolvemos e executamos projetos significativos. Ao longo do curso concentrei-me e desenvolvi expertise em SQL, PL/SQL e Python. Esta especialização fortaleceu meu interesse na área de Data Science, onde almejo aplicar meus conhecimentos e competências técnicas para contribuir de forma significativa nesse campo.";

    let index = 0;
    const intervalo = 30; 

    function adicionarCaractere() {
        document.getElementById('textoDigitado').textContent += textoOriginal[index];
        index++;

        if (index < textoOriginal.length) {
            setTimeout(adicionarCaractere, intervalo);
        }
    }

    adicionarCaractere();
});

document.addEventListener("DOMContentLoaded", function () {
    const hamburguerMenu = document.querySelector('.hamburguer-menu');
    const navList = document.querySelector('.nav-list');

    hamburguerMenu.addEventListener('click', function () {
        navList.classList.toggle('active');
    });
});