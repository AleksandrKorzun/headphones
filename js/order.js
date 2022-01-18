const refs = {
    btnSubmit: document.querySelector('.modal-btn'),
    orderForm: document.forms.contact_form,
    modal: document.querySelector('[data-modal]'),
    btnOrder: document.querySelector('.infoCard-btn'),
    spanPrice: document.querySelector('.price'),
    
};
// const token =bot5032458974:AAHLLeh-EuUpDd-BandAvRzU7DWoiZb2FkU;
const chat_id = 291340498;

refs.btnSubmit.addEventListener('click', onHandleSubmit);
refs.orderForm.headphones.addEventListener('change', onHandelChangePrice)
// refs.btnOrder.addEventListener('click', onHandleOrderCard)


function clearForm () {
    refs.orderForm[0].value = "";
    refs.orderForm[1].value = "";
    refs.orderForm[2].value = "";
    refs.orderForm[3].value = "";
    refs.orderForm[4].value = "";
    refs.orderForm[5].value = "";

}
function onHandelChangePrice(e) {
    refs.spanPrice.textContent = e.target.value.split(">")[1];
}
function onHandleSubmit (e) {
    e.preventDefault()
    const name = `ФИО: ${refs.orderForm[0].value}`
    const tel = `Тел: ${refs.orderForm[1].value}`
    const delName = `СД: ${refs.orderForm[2].value}`
    const city = `Город: ${refs.orderForm[3].value}`
    const department = `Отд: ${refs.orderForm[4].value}`
    const model = `Модель: ${refs.orderForm[5].value}`
    const price = `Цена: ${refs.spanPrice.textContent}`
    
    fetch(`https://api.telegram.org/bot5032458974:AAHLLeh-EuUpDd-BandAvRzU7DWoiZb2FkU/sendMessage?chat_id=${chat_id}&parse_mode=html&text=${name}%0A${tel}%0A${delName}%0A${city}%0A${department}%0A${model}%0A${price}`, {
        method: 'POST'
    }).then(clearForm()).then(refs.modal.classList.add('is-hidden'));
    // fetch(`https://api.telegram.org/bot5032458974:AAHLLeh-EuUpDd-BandAvRzU7DWoiZb2FkU/sendMessage?chat_id=1157878236&parse_mode=html&text=${name}%0A${tel}%0A${delName}%0A${city}%0A${department}%0A${model}`, {
    //     method: 'POST'
    // }).then(refs.modal.classList.add('is-hidden'));
}
