const refs = {
    btnSubmit: document.querySelector('.modal-btn'),
    orderForm: document.forms.contact_form,
    btnOrder: document.querySelector('.infoCard-btn'),
    spanPrice: document.querySelector('.price'),
    btnOrder: document.querySelectorAll('.infoCard-btn'),
    
};
// const token =bot5032458974:AAHLLeh-EuUpDd-BandAvRzU7DWoiZb2FkU;
const chat_id = 291340498;
const {
    first_name,
    second_name, 
    phone_number,
    city_name, 
    delivery_name,
    depart_name,
    headphones,
} = refs.orderForm.elements
refs.btnSubmit.addEventListener('click', onHandleSubmit);
refs.orderForm.headphones.addEventListener('change', onHandelChangePrice);
refs.btnOrder.forEach(btn => {
    btn.addEventListener('click', onHandleClick)
  })

function clearForm () {
    refs.orderForm.elements.first_name.value = "";
    refs.orderForm.elements.second_name.value = "";
    refs.orderForm.elements.phone_number.value = "";
    refs.orderForm.elements.city_name.value = "";
    refs.orderForm.elements.delivery_name.value = "";
    refs.orderForm.elements.depart_name.value = "";
    refs.orderForm.elements.headphones.value = "";
    refs.spanPrice.textContent = "0";

}
function onHandelChangePrice(e) {
    refs.spanPrice.textContent = e.target.value.split(">")[1];
}
function onHandleClick(e) {
    headphones.value = headphones.children[e.target.id].value
    refs.spanPrice.textContent = headphones.children[e.target.id].dataset.price
}
function onHandleSubmit (e) {
    e.preventDefault()
    
    console.log(e.target.id)
    const name = `ФИО: ${first_name.value} ${second_name.value}`
    const tel = `Тел: ${phone_number.value}`
    const delName = `СД: ${delivery_name.value}`
    const city = `Город: ${city_name.value}`
    const department = `Отд: ${depart_name.value}`
    const model = `Модель: ${headphones.value}`
    const price = `Цена: ${refs.spanPrice.textContent}`
    
    // fetch(`https://api.telegram.org/bot5032458974:AAHLLeh-EuUpDd-BandAvRzU7DWoiZb2FkU/sendMessage?chat_id=1157878236&parse_mode=html&text=${name}%0A${tel}%0A${delName}%0A${city}%0A${department}%0A${model}%0A${price}`, {
    //     method: 'POST'
    // });
    fetch(`https://api.telegram.org/bot5032458974:AAHLLeh-EuUpDd-BandAvRzU7DWoiZb2FkU/sendMessage?chat_id=${chat_id}&parse_mode=html&text=${name}%0A${tel}%0A${delName}%0A${city}%0A${department}%0A${model}%0A${price}`, {
        method: 'POST'
    }).then(clearForm()).then(console.log("done"));
}
