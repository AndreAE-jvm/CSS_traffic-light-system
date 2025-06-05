/*Задание 4
Создать html-страницу со светофором и кнопкой, которая
переключает светофор на следующий цвет*/


const lights = ['red', 'yellow', 'green'];
let currentLight = 0;
const goMessage = document.getElementById('go-message');


function switchLight() {
    // Скрываем сообщение GO! при любом переключении
    goMessage.classList.remove('show');

    // Выключаем текущий свет
    document.getElementById(lights[currentLight]).classList.remove('active');

    // Переключаем на следующий свет
    currentLight = (currentLight + 1) % lights.length;

    // Включаем новый свет
    const newLight = document.getElementById(lights[currentLight]);
    newLight.classList.add('active');

    // Если включился зелёный - показываем GO!
    if (lights[currentLight] === 'green') {
        setTimeout(() => {
            goMessage.classList.add('show');
        }, 400);
    }
}

// Назначаем обработчик клика на кнопку
document.getElementById('switch-btn').addEventListener('click', switchLight);





// автоматическое переключение каждые 3 секунды 
setInterval(switchLight, 3000);