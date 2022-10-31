const text = [
    "Até cortar os próprios defeitos pode ser perigoso. Nunca se sabe qual é o defeito que sustenta nosso edifício inteiro.",
    "Renda-se, como eu me rendi. Mergulhe no que você não conhece como eu mergulhei. Não se preocupe em entender, viver ultrapassa qualquer entendimento.",
    "Sim, minha força está na solidão. Não tenho medo nem de chuvas tempestivas nem das grandes ventanias soltas, pois eu também sou o escuro da noite.",
    "Que ninguém se engane, só se consegue a simplicidade através de muito trabalho.",
    "Saudade é um pouco como fome. Só passa quando se come a presença. Mas às vezes a saudade é tão profunda que a presença é pouco: quer-se absorver a outra pessoa toda. Essa vontade de um ser o outro para uma unificação inteira é um dos sentimentos mais urgentes que se tem na vida.",
    "Não quero ter a terrível limitação de quem vive apenas do que é passível de fazer sentido. Eu não: quero é uma verdade inventada.",
    "Suponho que me entender não é uma questão de inteligência e sim de sentir, de entrar em contato. Ou toca, ou não toca.",
    "É curioso como não sei dizer quem sou. Quer dizer, sei-o bem, mas não posso dizer. Sobretudo tenho medo de dizer, porque no momento em que tento falar não só não exprimo o que sinto como o que sinto se transforma lentamente no que eu digo.",
    "Olhe, tenho uma alma muito prolixa e uso poucas palavras. Sou irritável e firo facilmente. Também sou muito calmo e perdoo logo. Não esqueço nunca. Mas há poucas coisas de que eu me lembre.",
    "Porque eu fazia do amor um cálculo matemático errado: pensava que, somando as compreensões, eu amava. Não sabia que, somando as incompreensões é que se ama verdadeiramente. Porque eu, só por ter tido carinho, pensei que amar é fácil."
]

const form = document.querySelector('.lorem-form');
let amount = document.getElementById('amount');
const lorenText = document.querySelector('.lorem-text');
const reset = document.querySelector('.reset')


form.addEventListener('submit', (e) => {
    e.preventDefault();
    const value = parseInt(amount.value);

    const random = Math.floor(Math.random() * text.length)
    
//cases: empty; >lenght; -1
    if(isNaN(value) || value <= 0 || value > text.length){
        lorenText.innerHTML = `<p>"${text[random]}"</p>`
    }
    else{
        let tempText = text.slice(0,value);
        tempText = tempText.map(function(item){
            return `<p class="text-conj">"${item}"</p>`
            
        })
        .join("")
        lorenText.innerHTML = tempText
    } 

    reset.addEventListener('click', () => {
        let tempText = lorenText
        if(tempText != ""){
            tempText.innerHTML = ""
        }
    })
})

