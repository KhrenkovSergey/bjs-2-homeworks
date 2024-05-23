class AlarmClock {
    constructor() {
      this.alarmCollection = [];
      this.intervalId;
    }
  
    addClock(time, callback) {
      if (this.alarmCollection.some(item => item.time === time)) {
        console.error('Такой будильник уже существует');
        return;
      }
      this.alarmCollection.push({
        time,
        callback,
        canCall: true
      });
    }
  
    removeClock(time) {
      let index = this.alarmCollection.findIndex(item => item.time === time);
      if (index === -1) {
        return false;
      }
      this.alarmCollection.splice(index, 1);
      return true;
    }
  
    getCurrentFormattedTime() {
      let date = new Date();
      let hours = date.getHours().toString().padStart(2, '0');
      let minutes = date.getMinutes().toString().padStart(2, '0');
      // let hours = date.getHours();
      // let minutes = date.getMinutes();
      // if (hours < 10) {
      //   hours = '0' + hours;
      // }
      // if (minutes < 10) {
      //   minutes = '0' + minutes;
      // }
      return `${hours}:${minutes}`;
    }
  
    start() {
      let checkClock = (alarm) => {
        if (alarm.time === this.getCurrentFormattedTime() && alarm.canCall) {
          alarm.canCall = false;
          alarm.callback();
        }
      };
      if (this.intervalId === undefined) {
        this.intervalId = setInterval(() => {
          this.alarmCollection.forEach(alarm => checkClock(alarm));
        }, 1000);
      }
    }
  
    stop() {
      if (this.timerId !== null) {
        clearInterval(this.timerId);
        this.timerId = null;
      }
    }
  
    resetAllCalls() {
      this.alarmCollection.forEach(alarm => alarm.canCall = true);
    }
  
    clearAlarms() {
      this.stop();
      this.alarmCollection = [];
    }
    
  }

