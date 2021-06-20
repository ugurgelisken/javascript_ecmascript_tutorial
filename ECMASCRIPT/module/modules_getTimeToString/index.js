import { formattedDateTime } from './date/getDateTimeString.js';

console.log( formattedDateTime() );

document.querySelector('body').innerHTML = `<h1>${formattedDateTime()}</h1>`;