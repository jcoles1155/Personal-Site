import Image from "next/image";

import Brian from "@/public/images/brian_g.jpeg";
import Noah from "@/public/images/noah_t.jpeg";
import Arjan from "@/public/images/arjan_s.jpeg";

export default function WidgetReferences() {
  return (
    <div className="rounded-lg border from-slate-100 bg-gradient-to-t border-slate-200 dark:border-slate-800 dark:bg-gradient-to-t dark:from-slate-800 dark:to-slate-800/30 odd:rotate-1 even:-rotate-1 p-5">
      <div className="font-aspekta font-[650] mb-3">References</div>
      <ul className="space-y-3">
        <li>
          <a
            className="flex justify-between items-center space-x-2 group"
            href="https://www.linkedin.com/in/brianmatthewgonzalez/"
          >
            <div className="grow flex items-center space-x-3 truncate">
              <Image
                className="rounded-full"
                src={Brian}
                width={32}
                height={32}
                alt="Mr. Mark Smularkov"
              />
              <div className="truncate">
                <div className="font-aspekta font-[650] text-sm truncate mb-1">
                  Brian Gonzalez
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-400">
                  CTO, Curri
                </div>
              </div>
            </div>
            <div className="shrink-0 text-sky-500">
              {/* biome-ignore lint/a11y/noSvgWithoutTitle: <explanation> */}
              <svg
                className="fill-current -rotate-45 group-hover:rotate-0 transition-transform ease-out"
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="12"
              >
                <path d="M9.586 5 6.293 1.707 7.707.293 13.414 6l-5.707 5.707-1.414-1.414L9.586 7H0V5h9.586Z" />
              </svg>
            </div>
          </a>
        </li>
        <li>
          <a
            className="flex justify-between items-center space-x-2 group"
            href="https://www.linkedin.com/in/singharjan/"
          >
            <div className="grow flex items-center space-x-3 truncate">
              <Image
                className="rounded-full"
                src={Arjan}
                width={32}
                height={32}
                alt="Jame Kulls"
              />
              <div className="truncate">
                <div className="font-aspekta font-[650] text-sm truncate mb-1">
                  Arjan Singh
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-400">
                  Director of Product, Curri
                </div>
              </div>
            </div>
            <div className="shrink-0 text-sky-500">
              {/* biome-ignore lint/a11y/noSvgWithoutTitle: <explanation> */}
              <svg
                className="fill-current -rotate-45 group-hover:rotate-0 transition-transform ease-out"
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="12"
              >
                <path d="M9.586 5 6.293 1.707 7.707.293 13.414 6l-5.707 5.707-1.414-1.414L9.586 7H0V5h9.586Z" />
              </svg>
            </div>
          </a>
        </li>
        <li>
          <a
            className="flex justify-between items-center space-x-2 group"
            href="https://www.linkedin.com/in/ntutak/"
          >
            <div className="grow flex items-center space-x-3 truncate">
              <Image
                className="rounded-full"
                src={Noah}
                width={32}
                height={32}
                alt="Noah Tutak"
              />
              <div className="truncate">
                <div className="font-aspekta font-[650] text-sm truncate mb-1">
                  Noah Tutak
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-400">
                  CPO, Curri
                </div>
              </div>
            </div>
            <div className="shrink-0 text-sky-500">
              {/* biome-ignore lint/a11y/noSvgWithoutTitle: <explanation> */}
              <svg
                className="fill-current -rotate-45 group-hover:rotate-0 transition-transform ease-out"
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="12"
              >
                <path d="M9.586 5 6.293 1.707 7.707.293 13.414 6l-5.707 5.707-1.414-1.414L9.586 7H0V5h9.586Z" />
              </svg>
            </div>
          </a>
        </li>
      </ul>
    </div>
  );
}
