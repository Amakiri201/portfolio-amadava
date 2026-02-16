export const ROUTES = {
  HOME: '/',
  PROJECTS: '/projects',
  PROJECT_DETAIL: '/project/:id',
  CONTACT: '/contact',
  USES: '/uses',
} as const;

export type RouteKeys = keyof typeof ROUTES;
