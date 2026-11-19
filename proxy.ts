// Remove this file and redeploy to reopen the portfolio.
const maintenancePage = `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Under construction | Nicholas Alonso</title>
  <style>
    :root { color-scheme: light; background: #f8f7f3; color: #202d31; }
    body { margin: 0; min-height: 100svh; display: grid; place-items: center; }
    main { max-width: 36rem; padding: 2rem; }
    p { margin: 0 0 1rem; font: 500 1rem/1.5 system-ui, sans-serif; }
    h1 { margin: 0; font: normal clamp(2.5rem, 7vw, 4.5rem)/1.1 Georgia, serif; }
    address { margin-top: 1.75rem; font: 1rem/1.5 system-ui, sans-serif; }
    a { color: inherit; text-underline-offset: 0.2em; }
  </style>
</head>
<body>
  <main>
    <p>Nicholas Alonso, CFA</p>
    <h1>Under construction</h1>
    <address><a href="mailto:nick.alonso@gmail.com">nick.alonso@gmail.com</a></address>
  </main>
</body>
</html>`;

export function proxy() {
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
