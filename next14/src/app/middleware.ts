import { NextResponse } from "next/server";

const isLoggedIn : boolean = false;

export function middleware(request: Request) {
   if (!isLoggedIn  && request.url === 'http://localhost:3000/profile') {
    return NextResponse.redirect(new URL('/', request.url))
   } 

   return NextResponse.next()
}
   export const config = {
    matcher: ['/profile']
   }



