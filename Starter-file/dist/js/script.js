const questionsList = [
	{
		text: 'Pensez-vous avoir eu de la fièvre ces derniers jours (frissons, sueurs) ?',
		choices: `<label for="oui">Oui</label>
        <input type="radio" value="oui" id="oui" name="choice"><br>
        <label for="non">Non</label>
        <input type="radio" id="non" value="non" name="choice"><br>`,
		number: 1,
		type:1,
	},
	{
		text: 'quelle est votre température ?',
		choices: `<label for="numerique">degrée</label>
        <input type="number" id="numerique">`,
		number: 2,
		type:2
	},
	{
		text: 'Avez-vous une toux ou une augmentation de votre toux habituelle ces derniers jours ?',
		choices: `<label for="oui">Oui</label>
        <input type="radio" value="oui" id="oui" name="choice"><br>
        <label for="non">Non</label>
        <input type="radio" id="non" value="non" name="choice"><br>`,
		number: 3,
		type:1,
	},
	{
		text: 'Avez-vous des douleurs musculaires ou des courbatures inhabituelles ces derniers jours ? ',
		choices: `<label for="oui">Oui</label>
        <input type="radio" value="oui" id="oui" name="choice"><br>
        <label for="non">Non</label>
        <input type="radio" id="non" value="non" name="choice"><br>`,
		number: 4,
		type:1	

	},
	{
		text: 'Avez-vous un mal de gorge apparu ces derniers jours ? ',
		choices: `<label for="oui">Oui</label>
        <input type="radio" value="oui" id="oui" name="choice"><br>
        <label for="non">Non</label>
        <input type="radio" id="non" value="non" name="choice"><br>`,
		number: 5,
		type:1

	},
	{
		text: 'Avez-vous de la diarrhée ces dernières 24 heures (au moins 3 selles molles) ?',
		choices: `<label for="oui">Oui</label>
        <input type="radio" value="oui" id="oui" name="choice"><br>
        <label for="non">Non</label>
        <input type="radio" id="non" value="non" name="choice"><br>`,
		number: 6,
		type:1
	},
	{
		text: 'Avez-vous une fatigue inhabituelle ces derniers jours ?',
		choices: `<label for="oui">Oui</label>
        <input type="radio" value="oui" id="oui" name="choice"><br>
        <label for="non">Non</label>
        <input type="radio" id="non" value="non" name="choice"><br>`,
		number: 7,
		type:1
	},
	{
		text: 'Cette fatigue vous oblige-t-elle à vous reposer plus de la moitié de la journée ?',
		choices: `<label for="oui">Oui</label>
        <input type="radio" value="oui" id="oui" name="choice"><br>
        <label for="non">Non</label>
        <input type="radio" id="non" value="non" name="choice"><br>`,
		number: 8,
		type:1
	},
	{
		text: 'Avez-vous des difficultés importantes pour vous alimenter ou boire depuis plus de 24h ? ',
		choices: `<label for="oui">Oui</label>
        <input type="radio" value="oui" id="oui" name="choice"><br>
        <label for="non">Non</label>
        <input type="radio" id="non" value="non" name="choice"><br>`,
		number: 9,
		type:1
	},
	{
		text:
			'Avez-vous vu apparaître une gêne respiratoire ou une augmentation de votre gêne respiratoire habituelle ? ',
		choices: `<label for="oui">Oui</label>
        <input type="radio" value="oui" id="oui" name="choice"><br>
        <label for="non">Non</label>
        <input type="radio" id="non" value="non" name="choice"><br>`,
		number: 10,
		type:1
	},
	{
		text: 'Comment vous sentez-vous ? ',
		choices: `<div class="flex-radio">
		<div class="mini">
		<label for="fatigue">Fatigué</label>
		<input type="radio" value="fatigué" id="fatigue" name="choice"><br>
		</div>
		<div class="mini">
		<label for="bien">Bien</label>
		<input type="radio" id="bien" value="bien" name="choice"><br>
		</div>
	</div>
	<div class="flex-radio">
		<div class="mini">
		<label for="trop-fatigue">Trop fatigué</label>
		<input type="radio" value="trop-fatigué" id="trop-fatigue" name="choice"><br>
	</div>
		<div class="mini">
		<label for="moyen">Moyen</label>
		<input type="radio" id="moyen" value="moyen" name="choice"><br>
	</div>
	</div>`,
		number: 11,
		type:1
	},
	{
		text: `Quel est votre âge ? 
        Ceci, afin de calculer un facteur de risque spécifique.`,
		choices: `<label for="numerique">ans</label>
        <input type="number" id="numerique" name="choice">`,
		number: 12,
		type:2
	},
	{
		text: `Quel est votre taille ? 
        Afin de calculer l’indice de masse corporelle qui est un facteur influençant le risque de complications de l’infection.`,
		choices: `<label for="numerique">cm</label>
        <input type="number" id="numerique" name="choice">`,
		number: 13,
		type:2
	},
	{
		text: `Quel est votre poids ?
        Afin de calculer l’indice de masse corporelle qui est un facteur influençant le risque de complications de l’infection.`,
		choices: `<label for="numerique">kg</label>
        <input type="number" id="numerique" name="choice">`,
		number: 14,
		type:2
	},
	{
		text: `Avez-vous de l’hypertension artérielle ? Ou avez-vous une maladie cardiaque ou vasculaire ? Ou prenez-vous un traitement à visée cardiologique ?`,
		choices: `<label for="oui">Oui</label>
        <input type="radio" value="oui" id="oui" name="choice"><br>
        <label for="non">Non</label>
        <input type="radio" id="non" value="non" name="choice"><br>
        <label for="sspas">Ne sait pas</label>
        <input type="radio" id="sspas" value="oui" name="choice" >`,
		number: 15,
		type:1
	},
	{
		text: `Êtes-vous diabétique ?`,
		choices: `<label for="oui">Oui</label>
        <input type="radio" value="oui" id="oui" name="choice"><br>
        <label for="non">Non</label>
        <input type="radio" id="non" value="non" name="choice"><br>`,
		number: 16,
		type:1
	},
	{
		text: `Avez-vous ou avez-vous eu un cancer ?`,
		choices: `<label for="oui">Oui</label>
        <input type="radio" value="oui" id="oui" name="choice"><br>
        <label for="non">Non</label>
        <input type="radio" id="non" value="non" name="choice"><br>`,
		number: 17,
		type:1
	},
	{
		text: `Avez-vous une maladie respiratoire ? Ou êtes-vous suivi par un pneumologue ? `,
		choices: `<label for="oui">Oui</label>
        <input type="radio" value="oui" id="oui" name="choice"><br>
        <label for="non">Non</label>
        <input type="radio" id="non" value="non" name="choice"><br>`,
		number: 18,
		type:1
	},
	{
		text: `Avez-vous une insuffisance rénale chronique dialysée ?`,
		choices: `<label for="oui">Oui</label>
        <input type="radio" value="oui" id="oui" name="choice"><br>
        <label for="non">Non</label>
        <input type="radio" id="non" value="non" name="choice"><br>`,
		number: 19,
		type:1
	},
	{
		text: `Avez-vous une maladie chronique du foie ?`,
		choices: `<label for="oui">Oui</label>
        <input type="radio" value="oui" id="oui" name="choice"><br>
        <label for="non">Non</label>
        <input type="radio" id="non" value="non" name="choice"><br>`,
		number: 20,
		type:1
	},
	{
		text: `Êtes-vous enceinte ?`,
		choices: `<label for="oui">Oui</label>
        <input type="radio" value="oui" id="oui" name="choice"><br>
        <label for="non">Non</label>
        <input type="radio" id="non" value="non" name="choice"><br>
        <label for="sspas">Non applicable</label>
        <input type="radio" id="sspas" value="non" name="choice" >`,
		number: 21,
		type:1
	},
	{
		text: `Avez-vous une maladie connue pour diminuer vos défenses immunitaires ?`,
		choices: `<label for="oui">Oui</label>
        <input type="radio" value="oui" id="oui" name="choice"><br>
        <label for="non">Non</label>
        <input type="radio" id="non" value="non" name="choice"><br>
        <label for="sspas">Ne sait pas</label>
        <input type="radio" id="sspas" value="non" name="choice" >`,
		number: 22,
		type:1
	},
	{
		text: `Prenez-vous un traitement immunosuppresseur ?
        C’est un traitement qui diminue vos défenses contre les infections.
        Voici quelques exemples : corticoïdes, méthotrexate, ciclosporine, tacrolimus, azathioprine, cyclophosphamide (liste non exhaustive).`,
		choices: `<label for="oui">Oui</label>
        <input type="radio" value="oui" id="oui" name="choice"><br>
        <label for="non">Non</label>
        <input type="radio" id="non" value="non" name="choice"><br>
        <label for="sspas">Ne sait pas</label>
        <input type="radio" id="sspas" value="non" name="choice">`,
		number: 23,
		type:1
	}
];

const cerclebar = document.getElementById("cerclebar");
const préambule = document.getElementById("préambule");
const progression = document.getElementById("prog");
const questionnaire = document.getElementById("global");
const questionTo = document.getElementById("questionnaire");
const question_1 = document.getElementById("question_1");
const answer = document.getElementById("answer");
const resultat = document.getElementById("resultat");
const précédent = document.getElementById("précédent");
const suivant = document.getElementById("suivant");
const reprend = document.getElementById("reprend");
const demarer = document.getElementById("demarer");
const cercle = document.getElementsByClassName("cercle__item");
const conteur = document.getElementById("conteur");

// passer a l'etape suivant
function barre(progres){
    progression.style.width =`${(100/23)*(progres)}%`;
    progression.style.backgroundColor='$ #1078AD';
    conteur.textContent=(progres)+ `/`+ questionsList.length;

}

demarer.addEventListener('click', nextStep); 
function nextStep(){
    préambule.style.display='none';
    questionnaire.style.display='block';
    cercle[0].classList.remove('cercle__item--active');
    cercle[1].classList.add('cercle__item--active');
    showQuestion (cont)
    barre(cont)
   
}
reprend.addEventListener('click',()=>{
    newArray =[];
    cercle[1].classList.add('cercle__item--active');
    cercle[2].classList.remove('cercle__item--active');
    questionnaire.style.display='block';
    resultat.style.display='none';
    progression.style.display='block';
    window.location.reload();   
})
     // afficher la question
function showQuestion (questionIndex){
    let question = questionsList[questionIndex];
    questionTo.textContent = question.text;
    answer.innerHTML=question.choices   
}
     //afficher la question suivant
var cont = 0;
var newArray = [];
suivant.addEventListener('click',nextQuestion);
function nextQuestion(){

  const récup = document.getElementById("numerique"); 
   if(answer.children[1].id === "numerique"){
        if(!récup.value){
           alert("enter une valeur");
           return;

       }else if (cont === 1 && (récup.value<34 || récup.value>42)){
            alert("la temperature doit etre entre 34 et 42");
            return;

       }else if (cont === 10 && (récup.value<15 || récup.value>110)){
           alert("l'age doit etre entre 15 et 110");
           return;

       }else if (cont === 12 && (récup.value<20 || récup.value>250)){
           alert("le poids doit etre entre 20 et 250");
           return;

       }else if (cont === 11 && (récup.value<80 || récup.value>250)){
           alert("le taille doit etre entre 80 et 250");
            return;

       }else{
           newArray.push(récup.value);
           console.log(newArray); }
      
    }else{
        let select = document.querySelector('input[name=choice]:checked');
        if(!select){
            alert('svp choisir une reponse');
            return;
        }else {
            newArray.push(select.value);
            console.log(newArray);

        }

    }   
    cont +=1;   
    if(cont > 0){
        précédent.style.display="block"
        question_1.style.display="none"  
   }
    if(cont===22){
  // if(cont===21){
       suivant.textContent="terminer";     
   } 
  if(cont===23){
   //if(cont===22){
    cercle[1].classList.remove('list__item--active');
    cercle[2].classList.add('list__item--active');
    questionnaire.style.display='none';
    resultat.style.display='block';//PAS ENCORE
    progression.style.display='none';
    consulResultat();
   } 
   showQuestion(cont);
    barre(cont)  ; 
}showQuestion(cont);

//afficher la question précedent//précedant
précédent.addEventListener('click',lastQuestion);
function lastQuestion(){
    cont -= 1
    showQuestion (cont)
    console.log(cont);
    if(cont = 0){
       précédent.style.display="none"
    }
    if(cont <1){
        question_1.style.display="block"
    }
    barre(cont)
}

//********************************************************************************************************** *
const consultationR = document.getElementById('consultation-Résultat');


function consulResultat (){
        let facteurGmin ;
        let facteurGmaj;
        let facteurProno;

        // determiner les facteurs de gravités :
        // 1 : mineur
        if((newArray[0] === 'oui' && newArray[1] >= 39) || newArray[6] === 'oui' || (newArray[9] === 'Fatigué(e)' || newArray[9] === 'Très fatigué(e)')){ 

            facteurGmin = true; // au moins un seul facteur de gravité mineur est validé ou plus

        }else {
            facteurGmin = false; // aucun facteur de gravité mineur 
        }
        if (
            ((newArray[0] === 'oui' && newArray[1] >= 39) && newArray[6] === 'oui')||
            ((newArray[0] === 'oui' && newArray[1] >= 39) && (newArray[9] === 'Fatigué(e)' || newArray[9] === 'Très fatigué(e)'))||
            (newArray[6] === 'oui' && (newArray[9] === 'Fatigué(e)' || newArray[9] === 'Très fatigué(e)'))){
            
                facteurGmin = 2; // deux facteurs de gravité mineur sont validés
        }else if (
            ((newArray[0] === 'oui' && newArray[1] >= 39) && newArray[6] === 'non' && (newArray[9] === 'Bien' || newArray[9] === 'Assez bien'))||
            ((newArray[0] === 'non' && newArray[1] < 39) && newArray[6] === 'oui' && (newArray[9] === 'Bien' || newArray[9] === 'Assez bien'))||
            ((newArray[0] === 'non' && newArray[1] >= 39) && newArray[6] === 'non' && (newArray[9] === 'Fatigué(e)' || newArray[9] === 'Très fatigué(e)'))){

              facteurGmin = 1;  // un seul facteurs de gravité mineur est validé

        }

        // 2 : majeur
        if((newArray[0] === 'oui' && newArray[1] <= 35) || newArray[7] === 'oui' || newArray[8] === 'oui'){

            facteurGmaj = true; // au moins un facteur de gravité majeur est validé
        }else {

            facteurGmaj = false; // aucun facteur de gravité majeur
        }

        // determiner les facteurs pronostiques :
        if (newArray[10] >= 70 || newArray[13] === 'oui' || newArray[14] === 'oui' ||
        newArray[15] === 'oui' || newArray[16] === 'oui' || newArray[17] === 'oui' ||
        newArray[18] === 'oui' || newArray[19] === 'oui' || newArray[20] === 'oui' || newArray[21] === 'oui'){

                facteurProno = true; // au moins un facteur prono est validé
            }else{
                facteurProno = false; // aucun facteur prono
            }


        //  analyser les cas selon les symptomes:
        // cas 1 : Patient avec fièvre, ou toux + mal de gorge, ou toux + courbatures ou fièvre + diarrhée :

        if  (newArray[0] === 'oui'  || 
            (newArray[2] === 'oui' && newArray[3] === 'oui' )||
            (newArray[2] === 'oui' && newArray[4] === 'oui' )||
            (newArray[0] === 'oui' && newArray[5] === 'oui' )) {

            if(facteurProno == false && facteurGmaj == false && facteurGmin == false &&  newArray[10] < 50){
                consultationR.textContent = `Nous vous conseillons de rester à votre domicile et
                de contacter votre médecin en cas d’apparition de nouveaux symptômes. Vous pourrez
                aussi utiliser à nouveau l’application pour réévaluer vos symptômes.`;

            }else if (facteurProno == false && facteurGmaj == false &&  (newArray[10] > 50 || newArray[10] < 69 )){
                consultationR.textContent =`Téléconsultation ou médecin généraliste ou visite à domicile`;

            }else if (facteurProno == true && facteurGmaj == false && facteurGmin == false){
                consultationR.textContent =`Téléconsultation ou médecin généraliste ou visite à domicile`;

            }else if (facteurProno == true && facteurGmaj == false && facteurGmin === 1){
                consultationR.textContent =`Svp Appeler 141`;

            }else if (facteurProno == true && facteurGmaj == false && facteurGmin === 2){
                consultationR.textContent =`Svp Appeler 141`;

            }else if (facteurGmaj == true){
                consultationR.textContent =`Svp Appeler 141`;
            }
        } // cas 2 : Patient avec fièvre + toux  :

        else if (newArray[0] === 'oui' && newArray[2] === 'oui'){
            if(facteurProno == false && facteurGmaj == false && (facteurGmin == false || facteurGmin == true)){

                consultationR.textContent=`téléconsultation ou médecin généraliste ou visite à domicile`;

            }else if (facteurProno == true && facteurGmaj == false && (facteurGmin == false || facteurGmin === 1)){
                consultationR.textContent=`téléconsultation ou médecin généraliste ou visite à domicile`;

            }else if (facteurProno == true && facteurGmaj == false && facteurGmin === 2){
                consultationR.textContent =`Svp Appeler 141`;

            }else if (facteurGmaj == true){
                consultationR.textContent =`Svp Appeler 141`;
            }

        }// cas 3 : Patient avec un seul sympthome : fièvre ou toux ou mal de gorge ou courbatures  (note: il faut eliminer la fievre ici ,sinon le test va analyser le cas 1)

        else if ((newArray[0] === 'oui' &&  newArray[2] === 'non' && newArray[3] === 'non' &&  newArray[4] === 'non')||
                (newArray[0] === 'non' &&  newArray[2] === 'oui' && newArray[3] === 'non' &&  newArray[4] === 'non') ||
                (newArray[0] === 'non' &&  newArray[2] === 'non' && newArray[3] === 'oui' &&  newArray[4] === 'non')||
                (newArray[0] === 'non' &&  newArray[2] === 'non' && newArray[3] === 'non' &&  newArray[4] === 'oui')){
                    
            if ( facteurProno == false && facteurGmaj == false && facteurGmin == false){
                consultationR.textContent =`Votre situation ne relève probablement pas du Covid-19. Consultez votre médecin au moindre doute`;

            }else if(facteurProno == true || facteurGmaj == true ||  facteurGmin == true ) {
                consultationR.textContent = 'Votre situation ne relève probablement pas du Covid-19. Un avis médical est recommandé. Au moindre doute, appelez le 141.';

            }

        }//cas 4 :Tout patient avec aucun symptôme :
        else if ((newArray[0] === 'non' &&  newArray[2] === 'non' && newArray[3] === 'non' && newArray[4] === 'non')){
            consultationR.textContent=`Votre situation ne relève probablement pas du Covid-19. N’hésitez pas à contacter votre médecin en cas de doute. Vous pouvez refaire le test en cas de nouveau symptôme pour réévaluer la situation. Pour toute information concernant le Covid-19 allez vers la page d’accueil.`;

        }else{
            consultationR.textContent= `ERROR`;
        }

}