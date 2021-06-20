class DateGenerator {
  constructor() {
    this.time = new Date();
  }
  day() {
    return this.time.getUTCDate();
  }
  month() {
    return this.time.getMonth();
  }
  year() {
    return this.time.getFullYear();
  }
}

class DateTimeGenerator extends DateGenerator {
  hour() {
    return this.time.getHours();
  }
  minute() {
    return this.time.getMinutes();
  }
  second() {
    return this.time.getSeconds();
  }
}


const time = new DateTimeGenerator();

// Saniyede bir tarih ve saati güncelle
setInterval(() => {
  const time = new DateTimeGenerator();
  const clock = `${time.day()}/${time.month()}/${time.year()} ${time.hour()}:${time.minute()}:${time.second()}`;
  document.getElementById("datetime").innerHTML = "<h1>" + clock + "</h1>";

}, 1000);