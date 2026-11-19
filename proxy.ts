import { NextRequest, NextResponse } from "next/server";

// Remove this file and redeploy to reopen the portfolio.
const maintenancePage = `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Nicholas Alonso, CFA | Contact</title>
  <style>
    :root { background: #faf9f6; color: #203235; font: 100%/1.5 system-ui, sans-serif; }
    * { box-sizing: border-box; }
    body { margin: 0; min-height: 100svh; display: grid; place-items: center; }
    main { width: min(100%, 40rem); padding: clamp(1.5rem, 6vw, 4rem); }
    img { display: block; width: 6rem; height: 6rem; object-fit: cover; border-radius: 50%; }
    h1 { margin: 1.25rem 0 .25rem; font: normal clamp(2.25rem, 6vw, 3.6rem)/1.12 Georgia, serif; }
    .role { margin: 0; color: #405957; }
    .note { margin: 1.65rem 0 1rem; }
    address { display: flex; flex-wrap: wrap; align-items: center; gap: .75rem 1.25rem; font-style: normal; }
    a { color: #224c47; text-underline-offset: .2em; }
    .request { padding: .7rem 1rem; background: #234a45; color: white; border-radius: .25rem; text-decoration: none; }
    .request:hover { background: #163832; }
    a:focus-visible { outline: 3px solid #926d2e; outline-offset: 4px; }
  </style>
</head>
<body>
  <main>
    <img src="/images/nick-alonso.png" width="96" height="96" alt="">
    <h1>Nicholas Alonso, CFA</h1>
    <p class="role">Portfolio Manager &amp; Global Strategist</p>
    <p class="note">My website is under construction. You can reach me by email in the meantime.</p>
    <address>
      <a class="request" href="mailto:nick.alonso@gmail.com?subject=R%C3%A9sum%C3%A9%20request">Request my résumé</a>
      <a href="mailto:nick.alonso@gmail.com">nick.alonso@gmail.com</a>
    </address>
  </main>
</body>
</html>`;

export function proxy(request: NextRequest) {
  if (request.nextUrl.pathname === "/images/nick-alonso.png") {
    return NextResponse.next();
  }

  return new Response(maintenancePage, {
    status: 503,
    headers: {
      "Content-Type": "text/html; charset=utf-8",
      "Cache-Control": "no-store",
      "Retry-After": "86400",
    },
  });
}

export const config = { matcher: "/:path*" };
