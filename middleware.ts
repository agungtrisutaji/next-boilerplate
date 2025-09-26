import { auth } from "@/auth";

export default auth((req) => {
  const { nextUrl } = req;
  const isProtected = nextUrl.pathname.startsWith("/protected");

  if (!req.auth && isProtected) {
    const url = new URL("/login", nextUrl.origin);
    return Response.redirect(url);
  }
});

export const config = {
  matcher: ["/protected/:path*"],
};
