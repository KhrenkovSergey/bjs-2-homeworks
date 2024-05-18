class AlarmClock {
    constructor() {
      this.alarmCollection = [];
      this.timerId = null;
    }
  
    addClock(time, callback, id) {
      if (id === undefined) {
        throw new Error('error text');
      }
      if (this.alarmCollection.some(item => item.id === id)) {
        console.error('Такой будильник уже существует');
        return;
      }
      this.alarmCollection.push({
        id,
        time,
        callback,
        canCall: true
      });
    }
  
    removeClock(id) {
      let index = this.alarmCollection.findIndex(item => item.id === id);
      if (index === -1) {
        return false;
      }
      this.alarmCollection.splice(index, 1);
      return true;
    }
  
    getCurrentFormattedTime() {
      let date = new Date();
      let hours = date.getHours();
      let minutes = date.getMinutes();
      if (hours < 10) {
        hours = '0' + hours;
      }
      if (minutes < 10) {
        minutes = '0' + minutes;
      }
      return `${hours}:${minutes}`;
    }
  
    start() {
      let checkClock = (alarm) => {
        if (alarm.time === this.getCurrentFormattedTime() && alarm.canCall) {
          alarm.canCall = false;
          alarm.callback();
        }
      };
      if (this.timerId === null) {
        this.timerId = setInterval(() => {
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