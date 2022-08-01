import { NextResponse } from 'next/server';

export function middleware(req) {
    if (req.cookies.wordpress_login) {
        return NextResponse.next();
    } else {
        return NextResponse.redirect(new URL('/login', req.url));
    }
}
