"use client";

import axios from "axios";
import { FormEvent, useState } from "react";

export default function SubscribeForm() {
  const [email, setEmail] = useState<string>("");
  const [status, setStatus] = useState<
    "success" | "error" | "loading" | "idle"
  >("idle");
  const [responseMsg, setResponseMsg] = useState<string>("");
  const [statusCode, setStatusCode] = useState<number>();
  async function handleSubscribe(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    try {
      const response = await axios.post("/api/subscribe", { email });

      setStatus("success");
      setStatusCode(response.status);
      setEmail("");
      setResponseMsg(response.data.message);
    } catch (err) {
      if (axios.isAxiosError(err)) {
        setStatus("error");
        setStatusCode(err.response?.status);
        setResponseMsg(err.response?.data.error);
      }
    }
  }
  return (
    <>
      {/* Subscribe form */}
      <form onSubmit={handleSubscribe}>
        <div className="flex flex-col md:flex-row justify-center max-w-xs mx-auto md:max-w-md md:mx-0">
          <input
            type="email"
            className="form-input w-full mb-2 md:mb-0 md:mr-2"
            placeholder="Your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={status === "loading"}
            aria-label="Your email\u2026"
          />
          {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
          <button
            className="btn text-white bg-sky-500 hover:bg-sky-600"
            type="submit"
            disabled={status === "loading"}
          >
            Subscribe
          </button>
        </div>
        <div className="server-message pt-4 text-green-600">
          {status === "success" ? (
            <p className="text-green-600">{responseMsg}</p>
          ) : null}
          {status === "error" ? (
            <p className="text-orange-600">{responseMsg}</p>
          ) : null}
        </div>
      </form>
    </>
  );
}
