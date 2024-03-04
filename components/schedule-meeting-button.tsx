"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useRef, useState } from "react";

export default function ScheduleMeetingButton() {
  const ref = useRef(null);
  const [show, toggle] = useState(false);

  useEffect(() => {
    if (!ref.current) {
      return;
    }

    if (show) {
      // @ts-ignore:next-line
      ref.current.showModal();
    } else {
      // @ts-ignore:next-line
      ref.current.close();
    }
  });

  return (
    <>
      {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
      <button
        onClick={() => toggle(!show)}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        <FontAwesomeIcon icon={faPhone} className="mr-2" />
        Schedule a 30
      </button>

      <div className={"align-middle"}>
        {/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
        <dialog
          ref={ref}
          className={"w-3/4 lg:w-5/6"}
          style={{
            height: "800px",
            position: "relative",
            //   transform: "translate(-50%, -50%)",
          }}
          onClick={(e) => {
            if (ref.current === null) return;
            // @ts-ignore:next-line
            const dialogDimensions = ref.current.getBoundingClientRect();
            if (
              e.clientX < dialogDimensions.left ||
              e.clientX > dialogDimensions.right ||
              e.clientY < dialogDimensions.top ||
              e.clientY > dialogDimensions.bottom
            ) {
              // @ts-ignore:next-line
              ref.current.close();
            }
          }}
        >
          <iframe
            src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ2PJSUmkZluo-n0ZxEWNwq_X8pa_9eJH27d_sNyGSNX5HXYmrycvnV1YYNMd4svtAtfEctdjZof?gv=true"
            // style="border: 0"
            width="100%"
            height="600"
            // frameborder="0"
            title="Schedule a meeting"
          />
        </dialog>
      </div>
    </>
  );
}
