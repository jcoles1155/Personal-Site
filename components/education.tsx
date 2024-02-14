import Image from "next/image";

import EducationIcon01 from "@/public/images/education-icon-01.svg";
import EducationIcon02 from "@/public/images/education-icon-02.svg";

export default function Education() {
  return (
    <div className="space-y-8">
      <h2 className="h3 font-aspekta text-slate-800 dark:text-slate-100">
        Education
      </h2>
      <ul className="space-y-8">
        {/* Item */}
        <li className="relative group">
          <div className="flex items-start before:absolute before:left-0 before:h-full before:w-px before:bg-slate-200 before:dark:bg-slate-800 before:self-start before:ml-[28px] before:-translate-x-1/2 before:translate-y-8 before:group-last-of-type:hidden">
            <div className="absolute left-0 h-14 w-14 flex items-center justify-center border border-slate-200 dark:border-slate-800 dark:bg-gradient-to-t dark:from-slate-800 dark:to-slate-800/30 bg-white dark:bg-slate-900 rounded-full">
              <Image
                src={EducationIcon01}
                width={24}
                height={24}
                alt="General Assembly"
              />
            </div>
            <div className="pl-20 space-y-1">
              <div className="text-xs text-slate-500 uppercase">
                May 2019{" "}
                <span className="text-slate-400 dark:text-slate-600">·</span>{" "}
                Oct 2019
              </div>
              <div className="font-aspekta font-[650] text-slate-800 dark:text-slate-100">
                Fullstack Bootcamp
              </div>
              <div className="text-sm font-medium text-slate-800 dark:text-slate-100">
                General Assembly
              </div>
              <div className="text-sm text-slate-500 dark:text-slate-400">
                Typical bootcamp antics
              </div>
            </div>
          </div>
        </li>
        {/* Item */}
        <li className="relative group">
          <div className="flex items-start before:absolute before:left-0 before:h-full before:w-px before:bg-slate-200 before:dark:bg-slate-800 before:self-start before:ml-[28px] before:-translate-x-1/2 before:translate-y-8 before:group-last-of-type:hidden">
            <div className="absolute left-0 h-14 w-14 flex items-center justify-center border border-slate-200 dark:border-slate-800 dark:bg-gradient-to-t dark:from-slate-800 dark:to-slate-800/30 bg-white dark:bg-slate-900 rounded-full">
              <Image
                src={EducationIcon01}
                width={24}
                height={24}
                alt="Purdue University"
              />
            </div>
            <div className="pl-20 space-y-1">
              <div className="text-xs text-slate-500 uppercase">
                May 2015{" "}
                <span className="text-slate-400 dark:text-slate-600">·</span>{" "}
                Apr 2016
              </div>
              <div className="font-aspekta font-[650] text-slate-800 dark:text-slate-100">
                AS
              </div>
              <div className="text-sm font-medium text-slate-800 dark:text-slate-100">
                Ventura College
              </div>
              <div className="text-sm text-slate-500 dark:text-slate-400">
                Studied Comp. Sci while working in electronics
              </div>
            </div>
          </div>
        </li>
        {/* Item */}
        <li className="relative group">
          <div className="flex items-start before:absolute before:left-0 before:h-full before:w-px before:bg-slate-200 before:dark:bg-slate-800 before:self-start before:ml-[28px] before:-translate-x-1/2 before:translate-y-8 before:group-last-of-type:hidden">
            <div className="absolute left-0 h-14 w-14 flex items-center justify-center border border-slate-200 dark:border-slate-800 dark:bg-gradient-to-t dark:from-slate-800 dark:to-slate-800/30 bg-white dark:bg-slate-900 rounded-full">
              <Image
                src={EducationIcon02}
                width={24}
                height={26}
                alt="San Jose State UniversitySan Jose State University"
              />
            </div>
            <div className="pl-20 space-y-1">
              <div className="text-xs text-slate-500 uppercase">
                May 2013{" "}
                <span className="text-slate-400 dark:text-slate-600">·</span>{" "}
                Apr 2015
              </div>
              <div className="font-aspekta font-[650] text-slate-800 dark:text-slate-100">
                General Education
              </div>
              <div className="text-sm font-medium text-slate-800 dark:text-slate-100">
                University of San Diego
              </div>
              <div className="text-sm text-slate-500 dark:text-slate-400">
                Played baseball and studied business
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
}
