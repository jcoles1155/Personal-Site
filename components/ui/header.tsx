"use client";

import Link from "next/link";
import ThemeToggle from "./theme-toggle";
import ScheduleMeetingButton from "../schedule-meeting-button";

import { usePathname } from "next/navigation";

export default function Header() {
  // get current page
  const pathname = usePathname();

  return (
    <header>
      <div className="flex items-center justify-between h-16 before:block mt-6">
        <div className="grow flex justify-end space-x-4">
          {/* If current page === /subscribe then hide */}
          {pathname !== "/subscribe" && <ScheduleMeetingButton />}

          {/* Light switch */}
          <ThemeToggle />

          {/* Button */}
          {pathname !== "/subscribe" && (
            <Link
              className="btn-sm text-slate-100 bg-sky-500 hover:bg-sky-600"
              href="/subscribe"
            >
              Contact
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}
