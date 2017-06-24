/**
 * Clean path.
 */

export function cleanPath(path) {
    return path.replace(/\/\//g, '/');
}

/**
 * Normalize pathname.
 */

export function normalizePathname(pathname) {
    return pathname.split('?')[0].split("#")[0];
}

/**
 * Normalize route based on the parent.
 */

export function createRoute(path, parent) {
    if (path[0] === '/' && path.length === 1) return path;
    if (typeof parent === 'undefined') return path;
    if (parent.normalizedRoute[0] === '/' && parent.normalizedRoute.length === 1) return path;
    return `${parent.normalizedRoute}/${path}`;
}
