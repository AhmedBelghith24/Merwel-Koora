// import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'

// const isProtectedRoute = createRouteMatcher([
//   '/products(.*)',
//   '/favorites(.*)',
//   '/cart(.*)',
//   '/orders(.*)',
// ])

// export default clerkMiddleware(async (auth, req) => {
//   if (isProtectedRoute(req)) await auth.protect()
// })

// export const config = {
//   matcher: [
//     // Skip Next.js internals and all static files, unless found in search params
//     '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
//     // Always run for API routes
//     '/(api|trpc)(.*)',
//   ],
// }
import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'
import { NextResponse } from 'next/server'

const isProtectedRoute = createRouteMatcher([
  '/products(.*)',
  '/favorites(.*)',
  '/cart(.*)',
  '/orders(.*)',
])

const isAdminRoute = createRouteMatcher(['/admin(.*)'])

export default clerkMiddleware(async (auth, req) => {
  const { userId } = await auth()
  const isAdminUser = userId === process.env.ADMIN_USER_ID

  // Block non-admins from /admin
  if (isAdminRoute(req) && !isAdminUser) {
    return NextResponse.redirect(new URL('/', req.url))
  }

  // Redirect unauthenticated users trying to access protected routes
  if (isProtectedRoute(req) && !userId) {
    return NextResponse.redirect(new URL('/', req.url))
  }

  return NextResponse.next()
})

export const config = {
  matcher: [
    // Match everything except static assets and Next.js internals
    '/((?!_next|.*\\..*).*)',
    '/(api|trpc)(.*)',
  ],
}
