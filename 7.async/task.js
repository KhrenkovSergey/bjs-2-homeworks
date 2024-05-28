

class AlarmClock {
  constructor() {
      this.alarmCollection = [];
      this.intervalId = null;
  }

  addClock(time, callback) {
      if (!time || !callback) {
          throw new Error('Отсутствуют обязательные аргументы');
      }

      if (this.alarmCollection.some(alarm => alarm.time === time)) {
          console.warn('Уже присутствует звонок на это же время');
      }

      this.alarmCollection.push({
          time,
          callback,
          canCall: true
      });
  }

  removeClock(time) {
      this.alarmCollection = this.alarmCollection.filter(alarm => alarm.time !== time);
  }

  getCurrentFormattedTime() {
      const date = new Date();
      const hours = date.getHours().toString().padStart(2, '0');
      const minutes = date.getMinutes().toString().padStart(2, '0');
      return `${hours}:${minutes}`;
  }

  start() {
      if (this.intervalId !== null) {
          return;
      }

      const checkClock = (alarm) => {
          if (alarm.time === this.getCurrentFormattedTime() && alarm.canCall) {
              alarm.canCall = false;
              alarm.callback();
          }
      };

      this.intervalId = setInterval(() => {
          this.alarmCollection.forEach(alarm => checkClock(alarm));
      }, 1000);
  }

  stop() {
    clearInterval(this.intervalId);
    this.intervalId = null;
  }

  resetAllCalls() {
      this.alarmCollection.forEach(alarm => alarm.canCall = true);
  }

  clearAlarms() {
      this.stop();
      this.alarmCollection = [];
  }
}


// const myAlarm = new AlarmClock();
// myAlarm.addClock('08:30', () => console.log('Пора вставать!'));
// myAlarm.addClock('08:31', () => console.log('Серьезно, пора вставать!'));
// myAlarm.start();
