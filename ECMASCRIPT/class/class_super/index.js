class Time {
  now() {
      return new Date().toLocaleTimeString();
  }
}

class TimeMessage extends Time {
  message() {
      return `Saat şu anda ${super.now()}`;
  }
}

const timeTXT = new TimeMessage();
console.log( timeTXT.message() );