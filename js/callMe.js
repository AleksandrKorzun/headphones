const refs = {
    callMeBtn: document.querySelector('.call-me__btn'),
    callblock: document.querySelector('.callFormWrapper'),
    callSendBtn: document.querySelector('.call-me__btnform'),
    btnCloseCallForm: document.querySelector('.btn-close-callForm'),
    footerFormBtn: document.querySelector('.footer-form__btn'),
    footerFormInput: document.querySelector('.footer-form__input')
    
}
const chat_id = 291340498;
class CountdownTimer {
    constructor({selector, targetDate}) {
        this.targetDate = targetDate;
        this.secs = document.querySelector(`${selector} span[data-value="secs"]`);
    };

    start(){
        const timerid = setInterval(() => {
            this.targetDate -= 1;
            if (this.targetDate > 0) {
                this.secs.textContent = this.targetDate
            } else {
                this.secs.textContent = "0";
                clearInterval(timerid)
            }
            
        }, 1000);
            
    };
};

const newTimer1 = new CountdownTimer({
    selector: '#timer-1',
    targetDate: 30,
});
const newTimer2 = new CountdownTimer({
    selector: '#timer-2',
    targetDate: 30,
});

refs.callMeBtn.addEventListener('click', onToogleCallMeBtn);
refs.callSendBtn.addEventListener('click', onSendPhone);
refs.btnCloseCallForm.addEventListener('click', onCloseCallForm);
refs.footerFormBtn.addEventListener('click', onSendPhone)

function onCloseCallForm(e){
    refs.callblock.classList.add('call-me__hidden');
}
function onToogleCallMeBtn (e) {
    refs.callblock.classList.toggle('call-me__hidden');
}
function clearForm(){
    document.querySelector('.call-me__form').elements.call_phone.value = "";

}
function onSendPhone(e) {
    e.preventDefault();
    const phoneClient = e.currentTarget.form.elements.call_phone.value;
    if (!phoneClient) return
    // fetch(`https://api.telegram.org/bot5032458974:AAHLLeh-EuUpDd-BandAvRzU7DWoiZb2FkU/sendMessage?chat_id=1157878236&parse_mode=html&text=${phoneClient}`, {
    //     method: 'POST'
    // });
    e.currentTarget.form.elements.call_phone.textContent = ""
    fetch(`https://api.telegram.org/bot5032458974:AAHLLeh-EuUpDd-BandAvRzU7DWoiZb2FkU/sendMessage?chat_id=${chat_id}&parse_mode=html&text=${phoneClient}`, {
        method: 'POST'
    }).then(clearForm()).then(e.currentTarget.classList.contains('footer-form__btn') ? newTimer2.start() : newTimer1.start());
}