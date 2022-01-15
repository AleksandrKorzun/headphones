const refs = {
    btnSubmit: document.querySelector('.modal-btn'),
    orderForm: document.forms.contact_form,
    modal: document.querySelector('[data-modal]'),
};
// const token =bot5032458974:AAHLLeh-EuUpDd-BandAvRzU7DWoiZb2FkU;
const chat_id = 291340498;
console.log(refs.btnSubmit)
refs.btnSubmit.addEventListener('click', onHandleSubmit);

function onHandleSubmit (e) {
    e.preventDefault()
    const name = `ФИО: ${refs.orderForm[0].value}`
    const tel = `ФИО: ${refs.orderForm[1].value}`
    const delName = `ФИО: ${refs.orderForm[2].value}`
    const city = `ФИО: ${refs.orderForm[3].value}`
    const department = `ФИО: ${refs.orderForm[4].value}`
    const model = `ФИО: ${refs.orderForm[5].value}`
    const messageOrder = `
        ФИО: ${refs.orderForm[0].value},
        Телефон: ${refs.orderForm[1].value},
        Перевозчик: ${refs.orderForm[2].value},
        Город: ${refs.orderForm[3].value},
        Отделение: ${refs.orderForm[4].value},
        Модель: ${refs.orderForm[5].value},
    `
    fetch(`https://api.telegram.org/bot5032458974:AAHLLeh-EuUpDd-BandAvRzU7DWoiZb2FkU/sendMessage?chat_id=${chat_id}&parse_mode=html&text=${name}%0A${tel}%0A${delName}%0A${city}%0A${department}%0A${model}`, {
        method: 'POST'
    }).then(refs.modal.classList.add('is-hidden'));
}
console.dir(refs.orderForm)