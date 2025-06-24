import { NextRequest, NextResponse } from 'next/server';

const pathBlockList = [
  /\.(php7?|aspx|ini|exe)$/i,
  /wp-(admin|login|includes|content|trackback|feed)/i,
  /wp_admin|wp_login|wp_includes/i,
  /\.(env|git|vscode)$/i,
  /(cgi-bin|wordpress|backup|old$|home$|new$|main$|home\/|new\/|main\/)/i,
  /(uploads|jquery|vendor|login|assets|includes|templates|gallery|blog|admin)/i,
  /\/(wp|wp\/|bk|bk\/|bc|bc\/)$/i,
  /\.(ascx|asmx|ashx|suspected)$/i,
  /\/test$/i
];

const botUserAgents = [
  /curl/i,
  /wget/i,
  /http-client/i,
  /python-requests/i,
  /libwww-perl/i,
  /spider/i,
  /crawler/i,
  /scrapy/i,
  /bot/i,
  /scan/i,
  /nmap/i,
  /nikto/i
];

export function middleware(request: NextRequest) {
  const { pathname } = new URL(request.url);

  if (pathname.includes('cms.thefoodie.app')) {
    return NextResponse.next();
  }

  const userAgent = request.headers.get('user-agent') || '';
  const isPathBlocked = pathBlockList.some((pattern) => pattern.test(pathname));
  const isBotAgent = botUserAgents.some((pattern) => pattern.test(userAgent));
  const isEmptyUA = userAgent.trim() === '';

  if (isPathBlocked || isBotAgent || isEmptyUA) {
    return new NextResponse('Forbidden', { status: 403 });
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    // Run middleware on all routes except static assets , image optimization, and API routes
    '/((?!_next/static|_next/image|favicon.ico|api).*)'
  ]
};
