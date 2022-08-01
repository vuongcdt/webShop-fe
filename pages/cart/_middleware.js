import { NextResponse } from 'next/server';

export function middleware(req) {
    console.log(req.cookies.wordpress_login);
    if (req.cookies.wordpress_login) {
        return NextResponse.next();
    } else {
        return NextResponse.redirect(new URL('/login', req.url));
    }
}
