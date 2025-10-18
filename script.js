function mudarCor() {
  const cores = ["#f2f2f2", "#ffb3b3", "#cce5ff", "#d4edda", "#fff3cd", "#f8d7da"];
  const corAtual = document.body.style.backgroundColor;
  let novaCor;

  do {
    novaCor = cores[Math.floor(Math.random() * cores.length)];
  } while (novaCor === corAtual);

  document.body.style.backgroundColor = novaCor;
}


