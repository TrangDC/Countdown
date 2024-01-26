import React, {useState, useEffect} from "react";

function CountdownTimer() {
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);
    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {
        let intervalId;

        if (isRunning) {
            intervalId = setInterval(() => {
                if (seconds > 0) {
                    setSeconds(seconds - 1);
                } else {
                    if (minutes > 0) {
                        setMinutes(minutes - 1);
                        setSeconds(59);
                    } else {
                        if (hours > 0) {
                            setHours(hours - 1);
                            setMinutes(59);
                            setSeconds(59);
                        } else {
                            setIsRunning(false);
                        }
                    }
                }
            }, 1000);
        }

        return () => {
            clearInterval(intervalId);
        };
    }, [isRunning, hours, minutes, seconds]);

    const handleStart = () => {
        setIsRunning(true);
    };

    const handleReset = () => {
        setHours(0);
        setMinutes(0);
        setSeconds(0);
        setIsRunning(false);
    };

    const handleStop = () => {
        setIsRunning(false);
    }

    return (
        <div>
            <h1>Countdown Timer</h1>
            <div>
                <label>
                    Hours:
                    <input
                        type="number"
                        value={hours}
                        onChange={(e) => setHours(parseInt(e.target.value))}
                    />
                </label>
            </div>
            <div>
                <label>
                    Minutes:
                    <input
                        type="number"
                        value={minutes}
                        onChange={(e) => setMinutes(parseInt(e.target.value))}
                    />
                </label>
            </div>
            <div>
                <label>
                    Seconds:
                    <input
                        type="number"
                        value={seconds}
                        onChange={(e) => setSeconds(parseInt(e.target.value))}
                    />
                </label>
            </div>
            <div>
                <button onClick={handleStart}>Start</button>
                <button onClick={handleStop}>Stop</button>
                <button onClick={handleReset}>Reset</button>
            </div>
            <div>
                <p>
                    {hours.toString().padStart(2, '0')}:
                    {minutes.toString().padStart(2, '0')}:
                    {seconds.toString().padStart(2, '0')}
                </p>
            </div>
        </div>
    );
}

export default CountdownTimer;
