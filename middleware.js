import { i18n } from "./i18n.config";
import { NextResponse } from "next/server";
import { getLocale } from "@/lib/getlocal";

export function middleware(request) {
  const pathname = request.nextUrl.pathname;

  // Check if the pathname starts with a locale
  const hasLocale = i18n.locales.some((locale) =>
    pathname.startsWith(`/${locale}`)
  );

  // If the pathname does not have a locale, redirect to '/ar'
  if (!hasLocale) {
    return NextResponse.redirect(new URL("/ar", request.url));
  }

  // Exclude /assets path
  if (/^\/assets(\/|$)/.test(pathname)) {
    return null; // Bypass the middleware for /assets paths
  }

  return null; // No redirection needed
}

export const config = {
  //   matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};

// import { i18n } from './i18n.config';
// import { NextResponse } from 'next/server';
// import { getLocale } from '@/lib/getlocal';

// export function middleware(request) {
//     const pathname = request.nextUrl.pathname;

//     const pathnameIsMissingLocale = i18n.locales.every(
//         (locale) =>
//             !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`,
//     );
//     if (/^\/assets(\/|$)/.test(pathname)) {
//         // Exclude /assets path
//         return null; // Return null to bypass the middleware for /assets paths
//     }

//     if (pathnameIsMissingLocale) {
//         const locale = getLocale(request);
//         return NextResponse.redirect(
//             new URL(
//                 `/${locale}${pathname.startsWith('/') ? '' : '/'}${pathname}`,
//                 request.url,
//             ),
//         );
//     }
// }

// export const config = {
//     matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
// };
