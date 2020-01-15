'use strict'

const WEATHER_IMAGE = {
    sunny: `<svg class="widget__icon" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 483.512 483.512" style="enable-background:new 0 0 483.512 483.512;" xml:space="preserve" width="70px" height="70px"><polygon style="fill:#FCB641;" points="483.512,241.752 428.928,291.688 450.944,362.328 378.6,377.952 362.328,450.152 291.824,427.664 241.752,482.144 191.688,427.664 121.184,450.152 104.912,377.952 32.56,362.328 54.584,291.688 0,241.752 54.584,191.824 32.568,121.184 104.912,105.552 121.184,33.36 191.688,55.848 241.752,1.368 291.824,55.848 362.328,33.36 378.6,105.56 450.944,121.184 428.928,191.824 "/><circle style="fill:#FDC567;" cx="241.752" cy="244.504" r="138.736"/></svg>`,
    cloud: `<svg class="widget__icon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 481.306 481.306" style="enable-background:new 0 0 481.306 481.306;" xml:space="preserve"  width="70px" height="70px"><g><ellipse style="fill:#FCB641;" cx="341.632" cy="233.229" rx="136" ry="133.456"/>
      <path style="fill:#FCB641;" d="M336,65.453c-4.416,0-8-3.584-8-8v-48c0-4.416,3.584-8,8-8s8,3.584,8,8v48   C344,61.869,340.416,65.453,336,65.453z"/><path style="fill:#FCB641;" d="M439.36,98.757c-2.048,0-4.096-0.784-5.656-2.344c-3.128-3.128-3.128-8.184,0-11.312l33.944-33.944   c3.128-3.128,8.184-3.128,11.312,0s3.128,8.184,0,11.312l-33.944,33.944C443.456,97.973,441.408,98.757,439.36,98.757z"/><path style="fill:#FCB641;" d="M208.968,122.421c-2.048,0-4.096-0.784-5.656-2.344l-33.936-33.936   c-3.128-3.128-3.128-8.184,0-11.312s8.184-3.128,11.312,0l33.936,33.936c3.128,3.128,3.128,8.184,0,11.312   C213.064,121.637,211.016,122.421,208.968,122.421z"/></g><path style="fill:#92C7D3;" d="M426.208,361.453c-1.12,0-42.648,0-42.648,0c0.744-8,1.24-8.688,1.256-13.472  c0.128-42.672-28.36-79.952-70.032-89.136c-23.752-5.232-46.424-1.368-65.184,8.76c-22.888-34.064-60.808-57.04-104.272-59.696 c-5.592-0.768-11.256-1.224-17.056-1.224C57.432,206.685,0,265.949,0,339.005c0,38.072,15.688,72.304,40.648,96.44  c22.072,24.488,52.72,40.312,89.008,42.944c0,0,295.432,1.464,296.552,1.464c29.712,0,53.792-27.208,53.792-59.208  C480,388.661,455.912,361.453,426.208,361.453z"/></svg>`,
    rain: `<svg class="widget__icon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 480 480" style="enable-background:new 0 0 480 480;" xml:space="preserve" width="70px" height="70px"><path style="fill:#77B9C8;" d="M426.208,168.036c-1.12,0-42.648,0-42.648,0c0.744-8,1.24-13.624,1.256-18.408  c0.128-42.672-28.36-82.424-70.032-91.6c-23.752-5.232-46.424-2.6-65.184,7.528C226.712,31.492,188.792,7.9,145.328,5.244  c-5.592-0.768-11.256-1.528-17.056-1.528C57.432,3.708,0,62.82,0,135.876c0,38.072,15.688,72.232,40.648,96.368  c22.072,24.488,52.72,40.272,89.008,42.904c0,0,295.432,1.448,296.552,1.448c29.712,0,53.792-22.288,53.792-54.28  S455.912,168.036,426.208,168.036z"/><path style="fill:#92C7D3;" d="M392.48,288.036c-0.992,0-37.672,0-37.672,0c0.656-8,1.096-7.976,1.104-12.2  c0.112-37.696-25.048-70.776-61.856-78.888c-20.984-4.624-41.008-1.28-57.584,7.664c-20.216-30.088-53.72-50.424-92.104-52.768  c-4.944-0.68-9.944-1.096-15.064-1.096C66.728,150.74,16,203.084,16,267.62c0,33.632,13.856,63.864,35.904,85.184  c19.496,21.632,46.568,35.608,78.624,37.936c0,0,260.968,1.296,261.96,1.296c26.24,0,47.52-23.736,47.52-52  C440,311.772,418.728,288.036,392.48,288.036z"/><path id="SVGCleanerId_0" style="fill:#92C7D3;" d="M129.992,476.284c-1.36,0-2.736-0.344-3.992-1.072  c-3.832-2.208-5.144-7.104-2.928-10.928l28-48.496c2.208-3.832,7.112-5.144,10.928-2.928c3.832,2.208,5.144,7.104,2.928,10.928  l-28,48.496C135.448,474.852,132.76,476.284,129.992,476.284z"/><path id="SVGCleanerId_1" style="fill:#92C7D3;" d="M177.992,476.284c-1.36,0-2.736-0.344-3.992-1.072  c-3.832-2.208-5.144-7.104-2.928-10.928l28-48.496c2.208-3.832,7.112-5.144,10.928-2.928c3.832,2.208,5.144,7.104,2.928,10.928  l-28,48.496C183.448,474.852,180.76,476.284,177.992,476.284z"/><path id="SVGCleanerId_2" style="fill:#92C7D3;" d="M33.992,476.284c-1.36,0-2.736-0.344-3.992-1.072  c-3.832-2.208-5.144-7.104-2.928-10.928l28-48.496c2.208-3.832,7.104-5.144,10.928-2.928c3.832,2.208,5.144,7.104,2.928,10.928  l-28,48.496C39.448,474.852,36.76,476.284,33.992,476.284z"/><path id="SVGCleanerId_3" style="fill:#92C7D3;" d="M81.992,476.284c-1.36,0-2.736-0.344-3.992-1.072  c-3.832-2.208-5.144-7.104-2.928-10.928l28-48.496c2.208-3.832,7.112-5.144,10.928-2.928c3.832,2.208,5.144,7.104,2.928,10.928  l-28,48.496C87.448,474.852,84.76,476.284,81.992,476.284z"/><path id="SVGCleanerId_4" style="fill:#92C7D3;" d="M225.992,476.284c-1.36,0-2.736-0.344-3.992-1.072  c-3.832-2.208-5.144-7.104-2.928-10.928l28-48.496c2.208-3.832,7.112-5.144,10.928-2.928c3.832,2.208,5.144,7.104,2.928,10.928  l-28,48.496C231.448,474.852,228.76,476.284,225.992,476.284z"/>
    <path id="SVGCleanerId_5" style="fill:#92C7D3;" d="M273.992,476.284c-1.36,0-2.736-0.344-3.992-1.072  c-3.832-2.208-5.144-7.104-2.928-10.928l28-48.496c2.208-3.832,7.104-5.144,10.928-2.928c3.832,2.208,5.144,7.104,2.928,10.928  l-28,48.496C279.448,474.852,276.76,476.284,273.992,476.284z"/><path id="SVGCleanerId_6" style="fill:#92C7D3;" d="M321.992,476.284c-1.36,0-2.736-0.344-3.992-1.072  c-3.832-2.208-5.144-7.104-2.928-10.928l28-48.496c2.208-3.832,7.112-5.144,10.928-2.928c3.832,2.208,5.144,7.104,2.928,10.928  l-28,48.496C327.448,474.852,324.76,476.284,321.992,476.284z"/><path id="SVGCleanerId_7" style="fill:#92C7D3;" d="M369.992,476.284c-1.36,0-2.736-0.344-3.992-1.072  c-3.832-2.208-5.144-7.104-2.928-10.928l28-48.496c2.208-3.832,7.104-5.144,10.928-2.928c3.832,2.208,5.144,7.104,2.928,10.928  l-28,48.496C375.448,474.852,372.76,476.284,369.992,476.284z"/><path id="SVGCleanerId_8" style="fill:#92C7D3;" d="M417.992,476.284c-1.36,0-2.736-0.344-3.992-1.072  c-3.832-2.208-5.144-7.104-2.928-10.928l28-48.496c2.2-3.832,7.112-5.144,10.928-2.928c3.832,2.208,5.144,7.104,2.928,10.928  l-28,48.496C423.448,474.852,420.76,476.284,417.992,476.284z"/><g><path id="SVGCleanerId_0_1_" style="fill:#92C7D3;" d="M129.992,476.284c-1.36,0-2.736-0.344-3.992-1.072   c-3.832-2.208-5.144-7.104-2.928-10.928l28-48.496c2.208-3.832,7.112-5.144,10.928-2.928c3.832,2.208,5.144,7.104,2.928,10.928   l-28,48.496C135.448,474.852,132.76,476.284,129.992,476.284z"/></g><g><path id="SVGCleanerId_1_1_" style="fill:#92C7D3;" d="M177.992,476.284c-1.36,0-2.736-0.344-3.992-1.072   c-3.832-2.208-5.144-7.104-2.928-10.928l28-48.496c2.208-3.832,7.112-5.144,10.928-2.928c3.832,2.208,5.144,7.104,2.928,10.928   l-28,48.496C183.448,474.852,180.76,476.284,177.992,476.284z"/></g><g><path id="SVGCleanerId_2_1_" style="fill:#92C7D3;" d="M33.992,476.284c-1.36,0-2.736-0.344-3.992-1.072   c-3.832-2.208-5.144-7.104-2.928-10.928l28-48.496c2.208-3.832,7.104-5.144,10.928-2.928c3.832,2.208,5.144,7.104,2.928,10.928   l-28,48.496C39.448,474.852,36.76,476.284,33.992,476.284z"/></g><g><path id="SVGCleanerId_3_1_" style="fill:#92C7D3;" d="M81.992,476.284c-1.36,0-2.736-0.344-3.992-1.072   c-3.832-2.208-5.144-7.104-2.928-10.928l28-48.496c2.208-3.832,7.112-5.144,10.928-2.928c3.832,2.208,5.144,7.104,2.928,10.928   l-28,48.496C87.448,474.852,84.76,476.284,81.992,476.284z"/></g><g><path id="SVGCleanerId_4_1_" style="fill:#92C7D3;" d="M225.992,476.284c-1.36,0-2.736-0.344-3.992-1.072   c-3.832-2.208-5.144-7.104-2.928-10.928l28-48.496c2.208-3.832,7.112-5.144,10.928-2.928c3.832,2.208,5.144,7.104,2.928,10.928   l-28,48.496C231.448,474.852,228.76,476.284,225.992,476.284z"/></g><g><path id="SVGCleanerId_5_1_" style="fill:#92C7D3;" d="M273.992,476.284c-1.36,0-2.736-0.344-3.992-1.072   c-3.832-2.208-5.144-7.104-2.928-10.928l28-48.496c2.208-3.832,7.104-5.144,10.928-2.928c3.832,2.208,5.144,7.104,2.928,10.928   l-28,48.496C279.448,474.852,276.76,476.284,273.992,476.284z"/></g><g><path id="SVGCleanerId_6_1_" style="fill:#92C7D3;" d="M321.992,476.284c-1.36,0-2.736-0.344-3.992-1.072   c-3.832-2.208-5.144-7.104-2.928-10.928l28-48.496c2.208-3.832,7.112-5.144,10.928-2.928c3.832,2.208,5.144,7.104,2.928,10.928   l-28,48.496C327.448,474.852,324.76,476.284,321.992,476.284z"/></g><g><path id="SVGCleanerId_7_1_" style="fill:#92C7D3;" d="M369.992,476.284c-1.36,0-2.736-0.344-3.992-1.072   c-3.832-2.208-5.144-7.104-2.928-10.928l28-48.496c2.208-3.832,7.104-5.144,10.928-2.928c3.832,2.208,5.144,7.104,2.928,10.928   l-28,48.496C375.448,474.852,372.76,476.284,369.992,476.284z"/></g><g><path id="SVGCleanerId_8_1_" style="fill:#92C7D3;" d="M417.992,476.284c-1.36,0-2.736-0.344-3.992-1.072   c-3.832-2.208-5.144-7.104-2.928-10.928l28-48.496c2.2-3.832,7.112-5.144,10.928-2.928c3.832,2.208,5.144,7.104,2.928,10.928   l-28,48.496C423.448,474.852,420.76,476.284,417.992,476.284z"/></g></svg>`,
    snow: `<svg class="widget__icon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 480 480" style="enable-background:new 0 0 480 480;" xml:space="preserve" width="70px" height="70px"><path style="fill:#92C7D3;" d="M426.208,158.964c-1.12,0-42.648,0-42.648,0c0.744-8.16,1.24-9.968,1.256-14.744  c0.128-42.672-28.36-80.592-70.032-89.776c-23.752-5.232-46.424-1.68-65.184,8.44c-22.888-34.064-60.808-57.2-104.272-59.856  c-5.592-0.768-11.256-1.304-17.056-1.304C57.432,1.724,0,60.948,0,134.012c0,38.072,15.688,72.288,40.648,96.424  c22.072,24.488,52.72,40.304,89.008,42.936c0,0,295.432,1.464,296.552,1.464c29.712,0,53.792-25.936,53.792-57.928  C480,184.9,455.912,158.964,426.208,158.964z"/><g><circle style="fill:#BEDDE5;" cx="63.064" cy="325.34" r="24.936"/><circle style="fill:#BEDDE5;" cx="432.96" cy="335.236" r="24.936"/><circle style="fill:#BEDDE5;" cx="207.064" cy="453.34" r="24.936"/><path style="fill:#BEDDE5;" d="M272,334.276h-12.688l8.976-8.976c3.128-3.128,3.128-8.184,0-11.312s-8.184-3.128-11.312,0   L248,322.964v-12.688c0-4.416-3.584-8-8-8s-8,3.584-8,8v12.688l-8.976-8.976c-3.128-3.128-8.184-3.128-11.312,0   s-3.128,8.184,0,11.312l8.976,8.976H208c-4.416,0-8,3.584-8,8s3.584,8,8,8h12.688l-8.976,8.976c-3.128,3.128-3.128,8.184,0,11.312   c1.56,1.56,3.608,2.344,5.656,2.344s4.096-0.784,5.656-2.344l8.976-8.976v12.688c0,4.416,3.584,8,8,8c4.416,0,8-3.584,8-8v-12.688   l8.976,8.976c1.56,1.56,3.608,2.344,5.656,2.344s4.096-0.784,5.656-2.344c3.128-3.128,3.128-8.184,0-11.312l-8.976-8.976H272   c4.416,0,8-3.584,8-8S276.416,334.276,272,334.276z"/><path style="fill:#BEDDE5;" d="M416,422.276h-12.688l8.976-8.976c3.128-3.128,3.128-8.184,0-11.312s-8.184-3.128-11.312,0   L392,410.964v-12.688c0-4.416-3.584-8-8-8s-8,3.584-8,8v12.688l-8.976-8.976c-3.128-3.128-8.184-3.128-11.312,0   s-3.128,8.184,0,11.312l8.976,8.976H352c-4.416,0-8,3.584-8,8s3.584,8,8,8h12.688l-8.976,8.976c-3.128,3.128-3.128,8.184,0,11.312   c1.56,1.56,3.608,2.344,5.656,2.344s4.096-0.784,5.656-2.344l8.976-8.976v12.688c0,4.416,3.584,8,8,8s8-3.584,8-8v-12.688   l8.976,8.976c1.56,1.56,3.608,2.344,5.656,2.344s4.096-0.784,5.656-2.344c3.128-3.128,3.128-8.184,0-11.312l-8.976-8.976H416   c4.416,0,8-3.584,8-8S420.416,422.276,416,422.276z"/><path style="fill:#BEDDE5;" d="M72,430.276H59.312l8.976-8.976c3.128-3.128,3.128-8.184,0-11.312s-8.184-3.128-11.312,0L48,418.964   v-12.688c0-4.416-3.584-8-8-8s-8,3.584-8,8v12.688l-8.976-8.976c-3.128-3.128-8.184-3.128-11.312,0s-3.128,8.184,0,11.312   l8.976,8.976H8c-4.416,0-8,3.584-8,8s3.584,8,8,8h12.688l-8.976,8.976c-3.128,3.128-3.128,8.184,0,11.312   c1.56,1.56,3.608,2.344,5.656,2.344s4.096-0.784,5.656-2.344L32,457.588v12.688c0,4.416,3.584,8,8,8s8-3.584,8-8v-12.688   l8.976,8.976c1.56,1.56,3.608,2.344,5.656,2.344s4.096-0.784,5.656-2.344c3.128-3.128,3.128-8.184,0-11.312l-8.976-8.976H72   c4.416,0,8-3.584,8-8S76.416,430.276,72,430.276z"/></g></svg>`,
}

const MONTH = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];
const WEEK_DAY = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];

let weatherData = [
    {
        date: 1578945600000,
        temperature: {
            day: 3,
            night: 1,
        },
        cloudiness: 'Ясно',
        precipitation: {
            snow: false,
            rain: false,
        },
        current: true,
    },
    {
        date: 1579032000000,
        temperature: {
            day: 1,
            night: 3,
        },
        cloudiness: 'Облачно',
        precipitation: {
            snow: true,
            rain: false,
        },
    },
    {
        date: 1579118400000,
        temperature: {
            day: 2,
            night: 4,
        },
        cloudiness: 'Ясно',
        precipitation: {
            snow: false,
            rain: true,
        },
    },
    {
        date: 1579204800000,
        temperature: {
            day: 5,
            night: 7,
        },
        cloudiness: 'Облачно',
        precipitation: {
            snow: false,
            rain: false,
        },
    },
    {
        date: 1579291200000,
        temperature: {
            day: 4,
            night: 2,
        },
        cloudiness: 'Ясно',
        precipitation: {
            snow: false,
            rain: false,
        },
    },
    {
        date: 1579377600000,
        temperature: {
            day: 10,
            night: 19,
        },
        cloudiness: 'Ясно',
        precipitation: {
            snow: true,
            rain: false,
        },
    },
    {
        date: 1579464000000,
        temperature: {
            day: 7,
            night: 11,
        },
        cloudiness: 'Облачно',
        precipitation: {
            snow: false,
            rain: false,
        },
    },
];

let headerDay = document.querySelector('#day');
let headerWeek = document.querySelector('#week');

let weatherList = document.querySelector('.widget__list');
let weatherTemplate = document.querySelector('#weather-template').content.querySelector('.widget__item');

function getWeatherItem(object) {
    let weatherElement = weatherTemplate.cloneNode(true);
    let weatherElementDay = weatherElement.querySelector('.widget__day');
    let widgetDate = new Date(object.date);
    if (object.current) {
        weatherElementDay.textContent = 'Сегодня';
        weatherElementDay.classList.add('widget__day--current');
        headerDay.textContent = widgetDate.getDate() + ' ' + ' ' + MONTH[widgetDate.getMonth()] + ',';
        headerWeek.textContent = WEEK_DAY[widgetDate.getDay()];
    } else {
        weatherElementDay.textContent = WEEK_DAY[widgetDate.getDay()];
    }
    weatherElement.querySelector('.widget__date').textContent = widgetDate.getDate() + ' ' + MONTH[widgetDate.getMonth()];
    weatherElement.querySelector('.widget__temperature-day').textContent = `днем -${object.temperature.day}°`;
    weatherElement.querySelector('.widget__temperature-night').textContent = `ночью -${object.temperature.night}°`;
    weatherElement.querySelector('.widget__cloudiness').textContent = object.cloudiness;
    let weatherPrecipitation = weatherElement.querySelector('.widget__precipitation');
    weatherPrecipitation.textContent = object.precipitation.snow ? 'Снег' : object.precipitation.rain ? 'Дождь' : 'Без осадков';
    let image = object.precipitation.rain ? WEATHER_IMAGE.rain : object.precipitation.snow ? WEATHER_IMAGE.snow : object.cloudiness === 'Ясно' ? WEATHER_IMAGE.sunny : WEATHER_IMAGE.cloud;
    weatherElement.querySelector('.widget__date').insertAdjacentHTML('afterend', image);
    return weatherElement;
}

let fragment = document.createDocumentFragment();
for (let i = 0; i < weatherData.length; i++) {
    fragment.appendChild(getWeatherItem(weatherData[i]));
}
weatherList.appendChild(fragment);

const ITEM_WIDTH = 250;
const ITEM_HEIGHT = 360;
const VIEW_ITEM_COUNT = 4;


function moveSlider() {
    let itemsCount = weatherData.length;
    let sliderWrapper = ITEM_WIDTH * VIEW_ITEM_COUNT;
    let sliderItems = document.querySelectorAll('.widget__item');
    let prevButton = document.querySelector('[data-way="prev"]');
    let nextButton = document.querySelector('[data-way="next"]');
    let position = 0;
    weatherList.style.width = ITEM_WIDTH * itemsCount + 'px';
    for (let i = 0; i < sliderItems.length; i++) {
        sliderItems[i].style.width = ITEM_WIDTH + 'px';
    }
    nextButton.addEventListener('click', function () {
        prevButton.removeAttribute('disabled');
        position -= ITEM_WIDTH;
        weatherList.style.left = position + 'px';
        if (position === (VIEW_ITEM_COUNT - itemsCount) * ITEM_WIDTH) {
            nextButton.setAttribute('disabled', '');
        }
    });
    prevButton.addEventListener('click', function () {
        nextButton.removeAttribute('disabled');
        position += ITEM_WIDTH;
        weatherList.style.left = position + 'px';
        if (position === 0) {
            prevButton.setAttribute('disabled', '');
        }
    })
}

moveSlider();