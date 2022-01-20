const refs = {
    callMeBtn: document.querySelector('.call-me__btn'),
    callblock: document.querySelector('.callFormWrapper'),
    callSendBtn: document.querySelector('.call-me__btnform'),
    btnCloseCallForm: document.querySelector('.btn-close-callForm '),
    
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
            console.log(this.targetDate)
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

refs.callMeBtn.addEventListener('click', onToogleCallMeBtn);
refs.callSendBtn.addEventListener('click', onSendPhone);
refs.btnCloseCallForm.addEventListener('click', onCloseCallForm);

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
    const phoneClient = e.target.form.elements.call_phone.value;
    if (!phoneClient) return
    fetch(`https://api.telegram.org/bot5032458974:AAHLLeh-EuUpDd-BandAvRzU7DWoiZb2FkU/sendMessage?chat_id=1157878236&parse_mode=html&text=${phoneClient}`, {
        method: 'POST'
    });
    e.target.form.elements.call_phone.textContent = ""
    fetch(`https://api.telegram.org/bot5032458974:AAHLLeh-EuUpDd-BandAvRzU7DWoiZb2FkU/sendMessage?chat_id=${chat_id}&parse_mode=html&text=${phoneClient}`, {
        method: 'POST'
    }).then(clearForm()).then(newTimer1.start());
}