const refs = {
    btnAirpods2: document.getElementById('airPods2-btn'),
    btnAirpodsPro: document.getElementById('airPodsPro-btn'),
    btnAirpods3: document.getElementById('airPods3-btn'),
    infoCardAirPods2: document.getElementById('airPods2'),
    infoCardAirPodsPro: document.getElementById('airPods-Pro'),
    infoCardAirPods3: document.getElementById('airPods3'),
}
refs.btnAirpodsPro.addEventListener('click', infoCardChange)
refs.btnAirpods3.addEventListener('click', infoCardChange)
function infoCardChange (e) {
    const {id} = e.target;
    switch (id) {
        case "airPodsPro-btn":
            refs.btnAirpods2.addEventListener('click', infoCardChange);
            refs.btnAirpods3.addEventListener('click', infoCardChange);
            refs.btnAirpodsPro.removeEventListener('click', infoCardChange)
            refs.btnAirpods2.classList.remove('active');
            refs.btnAirpods3.classList.remove('active');
            refs.btnAirpodsPro.classList.add('active');
            refs.infoCardAirPods2.classList.add('is-hidden')
            refs.infoCardAirPods3.classList.add('is-hidden')
            refs.infoCardAirPodsPro.classList.remove('is-hidden')
            break;
        case "airPods3-btn":
            refs.btnAirpods2.addEventListener('click', infoCardChange);
            refs.btnAirpodsPro.addEventListener('click', infoCardChange);
            refs.btnAirpods3.removeEventListener('click', infoCardChange)
            refs.btnAirpods2.classList.remove('active');
            refs.btnAirpods3.classList.add('active');
            refs.btnAirpodsPro.classList.remove('active');
            refs.infoCardAirPods2.classList.add('is-hidden')
            refs.infoCardAirPods3.classList.remove('is-hidden')
            refs.infoCardAirPodsPro.classList.add('is-hidden')
            break;
        case "airPods2-btn":
            refs.btnAirpods2.removeEventListener('click', infoCardChange);
            refs.btnAirpods3.addEventListener('click', infoCardChange);
            refs.btnAirpodsPro.addEventListener('click', infoCardChange)
            refs.btnAirpods2.classList.add('active');
            refs.btnAirpods3.classList.remove('active');
            refs.btnAirpodsPro.classList.remove('active');
            refs.infoCardAirPods2.classList.remove('is-hidden')
            refs.infoCardAirPods3.classList.add('is-hidden')
            refs.infoCardAirPodsPro.classList.add('is-hidden')
            break;
    
        default:
            break;
    }
}
