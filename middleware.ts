import { NextResponse, type NextRequest } from "next/server";

/**
 * Optional access token for the unlisted prototype. When OLIVO_ACCESS_TOKEN
 * is set, the first visit needs ?key=<token>; a cookie remembers it.
 */
export function middleware(req: NextRequest) {
  const token = process.env.OLIVO_ACCESS_TOKEN;
  if (!token) return NextResponse.next();
  const key = req.nextUrl.searchParams.get("key");
  if (key === token) {
    const url = req.nextUrl.clone();
    url.searchParams.delete("key");
    const res = NextResponse.redirect(url);
    res.cookies.set("olivo_key", token, { httpOnly: true, sameSite: "lax", path: "/" });
    return res;
  }
  if (req.cookies.get("olivo_key")?.value === token) return NextResponse.next();
  return new NextResponse("This prototype is private. Ask for the link with the access key.", { status: 401 });
}

export const config = { matcher: ["/((?!_next|video|img|favicon.ico).*)"] };
