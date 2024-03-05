import Image from "next/image";

import GALogo from "@/public/images/ga_logo.webp";
import VCLogo from "@/public/images/vc_logo.jpeg";
import USDLogo from "@/public/images/usd_logo2.webp";
import CloudPractitionerLogo from "@/public/images/AWS-Certified_Cloud-Practitioner.png";

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
              <a href={"https://aws.amazon.com/certification/exams/"}>
                <Image
                  src={CloudPractitionerLogo}
                  width={56}
                  height={56}
                  alt="General Assembly"
                />
              </a>
            </div>
            <div className="pl-20 space-y-1">
              <div className="text-xs text-slate-500 uppercase">
                March 2024{" "}
              </div>
              <div className="font-aspekta font-[650] text-slate-800 dark:text-slate-100">
                AWS Certified Cloud Practitioner
              </div>
            </div>
          </div>
          <br />
        </li>
        {/* Item */}
        <li className="relative group">
          <div className="flex items-start before:absolute before:left-0 before:h-full before:w-px before:bg-slate-200 before:dark:bg-slate-800 before:self-start before:ml-[28px] before:-translate-x-1/2 before:translate-y-8 before:group-last-of-type:hidden">
            <div className="absolute left-0 h-14 w-14 flex items-center justify-center border border-slate-200 dark:border-slate-800 dark:bg-gradient-to-t dark:from-slate-800 dark:to-slate-800/30 bg-white dark:bg-slate-900 rounded-full">
              <a href={"https://generalassemb.ly/"}>
                <Image
                  src={GALogo}
                  width={32}
                  height={32}
                  alt="General Assembly"
                />
              </a>
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
                src={VCLogo}
                width={58}
                height={58}
                alt="Ventura College"
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
                src={USDLogo}
                width={54}
                height={56}
                alt="University of San Diego"
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
                Studied Computer science and business while playing baseball
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
}
