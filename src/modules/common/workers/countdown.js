addEventListener('message', function (val) {
  const interval = 1000;
  let ms = val.data;
  let count = 0;
  const startTime = Date.now();

  const countDownStart = () => {
    count++;
    const offset = new Date().getTime() - (startTime + count * interval);
    let nextTime = interval - offset;
    if (nextTime < 0) {
      nextTime = 0;
    }
    ms -= interval;

    if (ms < 0) {
      postMessage(ms);
      clearTimeout(this._timeCounter);
    } else {
      postMessage(ms);
      this._timeCounter = setTimeout(() => {
        countDownStart();
      }, nextTime);
    }
  };

  if (ms >= 0) {
    this._timeCounter = setTimeout(() => {
      countDownStart();
    }, interval);
  }
});
