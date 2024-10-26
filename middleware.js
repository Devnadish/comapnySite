import { i18n } from "./i18n.config";
import { NextResponse } from "next/server";

export function middleware(request) {
  const pathname = request.nextUrl.pathname;

  // Exclude /sitemap path from redirection
  if (pathname === "/sitemap") {
    return null; // Allow access to the sitemap
  }

  // Exclude /assets path to allow access to public folder assets
  if (/^\/assets(\/|$)/.test(pathname)) {
    return null; // Bypass the middleware for /assets paths
  }

  // Check if the pathname starts with a locale
  const hasLocale = i18n.locales.some((locale) =>
    pathname.startsWith(`/${locale}`)
  );

  // If the pathname does not have a locale, redirect to '/ar'
  if (!hasLocale) {
    return NextResponse.redirect(new URL("/ar", request.url));
  }

  return null; // No redirection needed
}

// Configuration for the middleware matcher
export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|assets).*)"],
};
