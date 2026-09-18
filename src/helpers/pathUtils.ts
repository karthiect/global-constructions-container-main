export function normalizePath(value: string | null | undefined): string {
  const raw = String(value ?? "").trim().toLowerCase();

  if (!raw || raw === "/") return "/";

  const withLeading = raw.startsWith("/") ? raw : `/${raw}`;
  const collapsed = withLeading.replace(/\/+/g, "/");

  return collapsed.endsWith("/") ? collapsed : `${collapsed}/`;
}

/**
 * Normalize a blog post slug into a relative path segment.
 *
 * Keeps only the post identifier and strips any leading "/", trailing "/",
 * and optional "/blog/" prefix.
 */
export function normalizeBlogSlug(slug: string | null | undefined): string {
  const raw = String(slug ?? "").trim();
  const trimmed = raw.replace(/^\/+|\/+$/g, "");
  return trimmed.replace(/^blog\//, "");
}
