import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import useSound from "use-sound"; // for handling the sound

import { motion } from "framer-motion";

function Player({ item, open }) {
  const { source, name } = item;
  const [isPlaying, setIsPlaying] = useState(false);
  const [currTime, setCurrTime] = useState({
    min: "",
    sec: "",
  }); // current position of the audio in minutes and seconds

  const [seconds, setSeconds] = useState();
  const [play, { pause, stop, duration, sound }] = useSound(source);

  const sec = duration / 1000;
  const min = Math.floor(sec / 60);
  const secRemain = Math.floor(sec % 60);
  const time = {
    min: min,
    sec: secRemain,
  };

  const playingButton = () => {
    if (isPlaying) {
      pause(); // this will pause the audio
      setIsPlaying(false);
    } else {
      play(); // this will play the audio
      setIsPlaying(true);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (sound) {
        setSeconds(sound.seek([])); // setting the seconds state with the current state
        const min = Math.floor(sound.seek([]) / 60);
        const sec = Math.floor(sound.seek([]) % 60);
        setCurrTime({
          min,
          sec,
        });
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [sound]);

  useEffect(() => {
    stop();
  }, [open, stop]);

  return (
    <div className="w-full flex flex-col justify-center items-center">
      <div className="text-4xl font-semibold">{name}</div>
      <motion.div whileHover={{ scale: 1.1 }}>
        <div className="mt-6">
          {!isPlaying ? (
            <button onClick={playingButton}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="w-10 h-10 fill-primary"
              >
                <path
                  fill-rule="evenodd"
                  d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm14.024-.983a1.125 1.125 0 010 1.966l-5.603 3.113A1.125 1.125 0 019 15.113V8.887c0-.857.921-1.4 1.671-.983l5.603 3.113z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>
          ) : (
            <button onClick={playingButton}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="w-10 h-10 fill-primary"
              >
                <path
                  fill-rule="evenodd"
                  d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zM9 8.25a.75.75 0 00-.75.75v6c0 .414.336.75.75.75h.75a.75.75 0 00.75-.75V9a.75.75 0 00-.75-.75H9zm5.25 0a.75.75 0 00-.75.75v6c0 .414.336.75.75.75H15a.75.75 0 00.75-.75V9a.75.75 0 00-.75-.75h-.75z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>
          )}
        </div>
      </motion.div>
      <div>
        <div className="flex justify-between">
          <div className="text-sm">
            {currTime.min}:{currTime.sec.toString().padStart(2, "0")}
          </div>
          <div className="text-sm">
            {time.min}:{time.sec.toString().padStart(2, "0")}
          </div>
        </div>
        <input
          type="range"
          min="0"
          max={duration / 1000}
          default="0"
          value={seconds}
          className="w-60 appearance-none bg-transparent [&::-webkit-slider-runnable-track]:rounded-full [&::-webkit-slider-runnable-track]:bg-white [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-[12px] [&::-webkit-slider-thumb]:w-[12px] [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-primary"
          onChange={(e) => {
            sound.seek([e.target.value]);
          }}
        />
      </div>
    </div>
  );
}

Player.propTypes = {
  item: PropTypes.object,
  open: PropTypes.object,
};

export default Player;
