interface NavItemLike {
	href: string;
	subMenu?: { href: string }[];
}

export function isPathActive(href: string, pathname: string | null): boolean {
	if (!pathname) return false;
	if (href === "/") return pathname === "/";
	return pathname === href || pathname.startsWith(href + "/");
}

export function isNavItemActive(item: NavItemLike, pathname: string | null): boolean {
	if (isPathActive(item.href, pathname)) return true;
	return !!item.subMenu?.some((sub) => isPathActive(sub.href, pathname));
}
