import axios from "axios";
import { z } from "zod";

const EmailSchema = z
  .string()
  .email({ message: "Please enter a valid email address" });

export async function POST(request: Request) {
  const reqData = await request.json();

  // 1. Validate email address
  const emailValidation = EmailSchema.safeParse(reqData.email);
  console.log(emailValidation);

  if (!emailValidation.success) {
    return new Response(
      JSON.stringify({ error: "Please enter a valid email address" }),
      {
        status: 400,
      }
    );
  }

  // 2. Retrieve Mailchimp credentials from environment variables
  const API_KEY = process.env.MAILCHIMP_API_KEY;
  const API_SERVER = process.env.MAILCHIMP_API_SERVER;
  const AUDIENCE_ID = process.env.MAILCHIMP_AUDIENCE_ID;

  // 3. Construct Mailchimp API request URL
  const url = `https://${API_SERVER}.api.mailchimp.com/3.0/lists/${AUDIENCE_ID}/members`;

  // 4. Prepare request data
  const data = {
    email_address: emailValidation.data,
    status: "subscribed",
  };

  // 5. Set request headers
  const options = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Basic ${Buffer.from(`anystring:${API_KEY}`).toString(
        "base64"
      )}`,
    },
  };

  // 6. Send POST request to Mailchimp API
  try {
    const res = await axios.post(url, data, options);
    console.log(res.data);
    if (res.status === 200) {
      return new Response(
        JSON.stringify({
          message: "Awesome! You have successfully subscribed!",
        }),
        {
          status: 201,
        }
      );
    }
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error(
        `${error.response?.status}`,
        `${error.response?.data.title}`,
        `${error.response?.data.detail}`
      );

      if (error.response?.data.title === "Member Exists") {
        return new Response(
          JSON.stringify({
            error: "Uh oh, it looks like this email's already subscribed🧐",
          }),
          {
            status: 400,
          }
        );
      }
    }

    return new Response(
      JSON.stringify({
        error:
          "Oops! There was an error subscribing you to the newsletter. Please email me at ogbonnakell@gmail.com and I'll add you to the list.",
      }),
      {
        status: 500,
      }
    );
  }
}
