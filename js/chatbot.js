// import { data } from "../data/data";
export const refs = {
    chatbotBtnOpen: document.querySelector(".chatbot__btn"),
    chatbotBtnClose: document.querySelector(".chatbot__close"),
    chatbotBtnCleare: document.querySelector(".chatbot__reset"),
    chatbot: document.querySelector(".chatbot"),
    form: document.forms.form,
    chatListMessage: document.querySelector(".chatbot__items"),
    callMeBtn: document.querySelector('.call-me__btn'),
    callForm: document.querySelector('.callFormWrapper'),
    // sendBtnChat: document.querySelector(".chatbot__submit"),

}

function openChatbot (e) {
    refs.chatbot.classList.toggle("chatbot_hidden")
    refs.chatbotBtnOpen.classList.toggle("d-none");
    refs.callMeBtn.classList.toggle('call-me__hidden');
    if (refs.callForm.classList.contains('call-me__hidden')) return
    refs.callForm.classList.add('call-me__hidden');
}
function closeChatbot(e) {
    refs.chatbot.classList.toggle("chatbot_hidden");
    refs.chatbotBtnOpen.classList.toggle("d-none");
    refs.callMeBtn.classList.toggle('call-me__hidden');
   
}
function cleareChatbot(e) {
    refs.chatListMessage.innerHTML = "";
}
function sendMessageClients(message){
    const item = `<li class="chatbot__item chatbot__item_human" data-humanindex="0">
    <span class="chatbot__content chatbot__content_human-disabled">${message}</span>
  </li>`
    if (!message) return
    refs.chatListMessage.insertAdjacentHTML('beforeend', item);
    refs.form.reset()
}

function onBtnSubmitSend(e) {
    e.preventDefault()

    const message = e.target.elements.inputMessage.value
    // humanIndex +=1;
    sendMessageClients(message);
    // botAnswer()
    chooseAnswer()
    console.log(botIndex);
    console.log(humanIndex);
    
};
function botAnswer(index, message) {
    const item = `
    <li class="chatbot__item chatbot__item_bot" data-botindex="${index+1}">
    <span class="chatbot__content chatbot__content_bot">${message}</span>
    </li>`;
    refs.chatListMessage.insertAdjacentHTML('beforeend', item);
    chooseAnswer()
}
function humanAnswer (index, message) {
    const item = `
    <li class="chatbot__item chatbot__item_human" data-humanindex="${index}">
    <span class="chatbot__content chatbot__content_human">${message}</span>
    </li>`;
    refs.chatListMessage.insertAdjacentHTML('beforeend', item);
};

let humanIndex;
const currentMessage = refs.chatListMessage.children.length
console.log('currentMessage :>> ', currentMessage);
let botIndex = Number(refs.chatListMessage.children[currentMessage-1].dataset.botindex);
function chooseAnswer (){
    let messageBot;
    let messageHuman;
    
        // botIndex = Number(refs.chatListMessage.children[currentMessage-1].dataset.botindex);
        
        
    
    if(botIndex === humanIndex) {
        console.log("bot");
        messageBot = data.bot[botIndex]
        botAnswer(botIndex, messageBot)
        botIndex +=1;
    } else {
        console.log("human");
        messageHuman = data.human[humanIndex]
        humanAnswer(humanIndex, messageHuman)
        humanIndex = Number(refs.chatListMessage.children[currentMessage].dataset.humanindex);
            humanIndex +=1;

        }
    
    console.log(currentMessage);
    console.dir(refs.chatListMessage);
    // console.dir(currentMessage);
    
}

refs.chatbotBtnOpen.addEventListener('click', openChatbot)
refs.chatbotBtnClose.addEventListener('click', closeChatbot)
refs.chatbotBtnCleare.addEventListener('click', cleareChatbot)

refs.form.addEventListener('submit', onBtnSubmitSend)


