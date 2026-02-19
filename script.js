let questionsBank = [
{question:"¿Qué es un polímero?", options:["Una molécula pequeña","Una macromolécula formada por monómeros","Un metal","Un gas noble"], correct:1},
{question:"¿Cuál es un polímero natural?", options:["Polietileno","Celulosa","PVC","Nylon"], correct:1},
{question:"¿Cuál es un polímero sintético?", options:["ADN","Almidón","Poliestireno","Proteína"], correct:2},
{question:"El monómero del polietileno es:", options:["Eteno","Metano","Propano","Butano"], correct:0},
{question:"Los plásticos termoestables:", options:["Se pueden fundir varias veces","No se pueden volver a fundir","Son naturales","Son biodegradables"], correct:1},
{question:"Un ejemplo de termoplástico es:", options:["Baquelita","PVC","Resina epoxi","Melamina"], correct:1},
{question:"¿Qué propiedad tienen los polímeros?", options:["Alta conductividad eléctrica","Ligereza","Gran dureza metálica","Alta densidad"], correct:1},
{question:"La vulcanización mejora:", options:["La elasticidad del caucho","La conductividad","La densidad","La fragilidad"], correct:0},
{question:"¿Quién desarrolló la baquelita?", options:["Edison","Baekeland","Newton","Tesla"], correct:1},
{question:"El reciclaje del plástico reduce:", options:["Contaminación","Dureza","Peso","Color"], correct:0},
{question:"El PET se usa en:", options:["Botellas","Cables eléctricos","Ruedas","Cristales"], correct:0},
{question:"El nylon es:", options:["Natural","Sintético","Mineral","Metal"], correct:1},
{question:"Los elastómeros son:", options:["Rígidos","Elásticos","Metales","Cristales"], correct:1},
{question:"La celulosa se encuentra en:", options:["Plantas","Petróleo","Hierro","Vidrio"], correct:0},
{question:"El PVC significa:", options:["Policloruro de vinilo","Polivinilo corto","Policarbonato vinílico","Plástico variable compuesto"], correct:0},
{question:"Un polímero biodegradable es:", options:["PLA","PVC","Poliestireno","Nylon"], correct:0},
{question:"La extrusión sirve para:", options:["Moldear plásticos","Reciclar vidrio","Fundir acero","Pulir madera"], correct:0},
{question:"Los polímeros están formados por:", options:["Átomos aislados","Cadenas largas","Cristales metálicos","Sales"], correct:1},
{question:"El caucho natural proviene de:", options:["Árboles","Petróleo","Carbón","Arena"], correct:0},
{question:"Los plásticos son buenos aislantes:", options:["Eléctricos","Metálicos","Nucleares","Magnéticos"], correct:0},

// ---- 30 preguntas más similares nivel 3º ESO ----

{question:"El polipropileno se usa en:", options:["Envases","Ladrillos","Vidrio","Hormigón"], correct:0},
{question:"Los polímeros artificiales derivan de:", options:["Petróleo","Arena","Agua","Hierro"], correct:0},
{question:"La polimerización es:", options:["Un tipo de reciclaje","Unión de monómeros","Un enfriamiento","Un pulido"], correct:1},
{question:"Un ejemplo de termoestable:", options:["Baquelita","PET","PE","PP"], correct:0},
{question:"El poliestireno expandido es:", options:["Corcho blanco","Acero","Madera","Vidrio"], correct:0},
{question:"Los polímeros tienen baja:", options:["Densidad","Masa","Flexibilidad","Variedad"], correct:0},
{question:"El plástico más reciclado es:", options:["PET","PVC","Nylon","Epoxi"], correct:0},
{question:"La inyección es un proceso de:", options:["Moldeo","Pintura","Corte","Soldadura"], correct:0},
{question:"El ADN es un polímero:", options:["Natural","Sintético","Artificial","Metálico"], correct:0},
{question:"Los termoplásticos se pueden:", options:["Reutilizar","Romper siempre","Oxidar","Cristalizar"], correct:0},
{question:"Un polímero resistente al calor:", options:["Melamina","PE","PP","PET"], correct:0},
{question:"El almidón es:", options:["Natural","Sintético","Artificial","Plástico duro"], correct:0},
{question:"Los plásticos derivan de:", options:["Hidrocarburos","Sales","Oxígeno","Hierro"], correct:0},
{question:"La fibra sintética más conocida:", options:["Nylon","Lana","Algodón","Seda"], correct:0},
{question:"Un polímero conductor es:", options:["Grafeno plástico","PVC","PE","PP"], correct:0},
{question:"El policarbonato se usa en:", options:["CDs","Puertas","Ladrillos","Cemento"], correct:0},
{question:"Los polímeros pueden ser:", options:["Naturales y sintéticos","Solo naturales","Solo metálicos","Gases nobles"], correct:0},
{question:"El reciclaje mecánico consiste en:", options:["Triturar y fundir","Quemar","Enterrar","Pulir"], correct:0},
{question:"Un elastómero común:", options:["Caucho","Vidrio","Hierro","Cobre"], correct:0},
{question:"La resistencia química es una propiedad:", options:["De los polímeros","Del acero","Del vidrio","Del aluminio"], correct:0},
{question:"El PLA se obtiene de:", options:["Maíz","Petróleo","Carbón","Hierro"], correct:0},
{question:"Los polímeros se usan en:", options:["Medicina","Solo construcción","Solo coches","Solo ropa"], correct:0},
{question:"La baquelita fue el primer:", options:["Plástico sintético","Metal","Vidrio","Elastómero"], correct:0},
{question:"El teflón resiste:", options:["Altas temperaturas","Bajas temperaturas","Solo frío","Nada"], correct:0},
{question:"El polietileno es:", options:["Termoplástico","Metal","Vidrio","Gas"], correct:0},
{question:"Las resinas epoxi son:", options:["Termoestables","Metales","Vidrios","Elastómeros"], correct:0},
{question:"El reciclaje químico:", options:["Descompone polímeros","Los pinta","Los enfría","Los corta"], correct:0},
{question:"Un plástico transparente:", options:["PET","Caucho","Melamina","Baquelita"], correct:0},
{question:"Los polímeros mejoran:", options:["Peso y resistencia","Densidad metálica","Conductividad","Magnetismo"], correct:0},
{question:"Un polímero flexible:", options:["PE","Vidrio","Acero","Cerámica"], correct:0}
];

let selectedQuestions = [];
let currentQuestion = 0;
let score = 0;
let failures = 0;
let player = "";

function startGame(){
  player = document.getElementById("playerName").value;
  if(player === ""){
    alert("Introduce tu nombre");
    return;
  }

  selectedQuestions = questionsBank.sort(() => 0.5 - Math.random()).slice(0,20);

  document.getElementById("startScreen").classList.add("hidden");
  document.getElementById("gameScreen").classList.remove("hidden");

  currentQuestion = 0;
  score = 0;
  failures = 0;

  showQuestion();
}

function showQuestion(){
  if(currentQuestion >= 20){
    endGame();
    return;
  }

  let q = selectedQuestions[currentQuestion];
  document.getElementById("questionNumber").innerText = 
    "Pregunta " + (currentQuestion + 1) + " de 20";
  document.getElementById("questionText").innerText = q.question;

  let buttons = document.querySelectorAll(".answers button");
  buttons.forEach((btn, index) => {
    btn.innerText = String.fromCharCode(65+index) + ": " + q.options[index];
  });
}

function selectAnswer(index){
  let correct = selectedQuestions[currentQuestion].correct;

  if(index === correct){
    score++;
  } else {
    failures++;
  }

  if(failures > 5){
    alert("Has fallado más de 5 preguntas. El juego se reinicia.");
    restartGame();
    return;
  }

  currentQuestion++;
  showQuestion();
}

function endGame(){
  document.getElementById("gameScreen").classList.add("hidden");
  document.getElementById("endScreen").classList.remove("hidden");
  document.getElementById("finalResult").innerText =
    player + ", has acertado " + score + " de 20 preguntas.";
}

function restartGame(){
  document.getElementById("endScreen").classList.add("hidden");
  document.getElementById("startScreen").classList.remove("hidden");
}

function closeGame(){
  window.close();
}
