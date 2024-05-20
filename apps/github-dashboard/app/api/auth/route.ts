import { NextResponse } from "next/server";
import { githubOAuthHandler } from "~/app/api/auth/handler";

export const POST = async (req: Request) => {
  try {
    const { code, clientId, clientSecret } = (await req.json()) as {
      code: string;
      clientId: string;
      clientSecret: string;
    };

    if (!code || !clientId || !clientSecret) {
      return NextResponse.json(
        { error: "Invalid parameters" },
        { status: 400 },
      );
    }

    const response = await githubOAuthHandler({ code, clientId, clientSecret });

    return NextResponse.json(response);
  } catch (e) {
    if (e instanceof Error) {
      return NextResponse.json({ error: e.message }, { status: 500 });
    }
    return NextResponse.json({ error: "Unknown error" }, { status: 500 });
  }
};
