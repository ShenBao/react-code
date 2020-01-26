import { useEffect, useState } from "react";
import dayjs from "dayjs";
import workIng from "./assets/干活.gif";

function App() {
  const [currentTime, setCurrentTime] = useState(dayjs());
  const startTime = dayjs()
    .set("hour", 9)
    .set("minute", 0)
    .set("second", 0)
    .set("millisecond", 0);
  const targetTime = dayjs()
    .set("hour", 18)
    .set("minute", 0)
    .set("second", 0)
    .set("millisecond", 0);

  useEffect(() => {
    // 更新当前时间
    const intervalId = setInterval(() => {
      setCurrentTime(dayjs());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  // 计算到18:00的剩余时间
  const timeDifference = targetTime.diff(currentTime, "second");
  const isStartWorkTime = currentTime.isBefore(startTime, "minute");
  const isAfterTargetTime = currentTime.isAfter(targetTime, "minute");

  // 格式化时间
  const formatTime = (time: dayjs.Dayjs): string => {
    return time.format("HH:mm:ss");
  };

  // 格式化时间差
  const formatTimeDifference = (seconds: number): string => {
    const duration = dayjs.duration(seconds, "seconds");
    return duration.format("HH:mm:ss");
  };

  let countdown = (
    <>
      <span>距离18:00 还剩 </span>
      {formatTimeDifference(timeDifference)}
    </>
  );

  if (isAfterTargetTime) {
    countdown = (
      <>
        <span style={{ fontSize: 14 }}>距离18:00</span>
        <span className="exceed">已超过</span>
        <span className="time">{formatTimeDifference(-timeDifference)}</span>
      </>
    );
  }

  if (isStartWorkTime) {
    countdown = (
      <>
        <div style={{ fontSize: 14 }}>还未到09:00，尽情的玩吧</div>
      </>
    );
  }

  return (
    <div className="app">
      <div className="header">
        <div className="current">{formatTime(currentTime)}</div>
        <div className="countdown">{countdown}</div>
      </div>
      <div className="img">
        <img src={workIng} alt="" />
      </div>
    </div>
  );
}

export default App;
