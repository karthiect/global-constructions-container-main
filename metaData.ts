import data from "./src/constants/metaData.json";
// import blogsData from "./src/constants/blogdata.json";
import type { MetaItem } from "./src/hooks/useMetaTags";
import { paths } from "./src/constants/paths";

const normalizeSlug = (value: unknown): string => {
  const slug = String(value ?? "").trim();
  if (!slug || slug === "/") return "/";

  const withLeading = slug.startsWith("/") ? slug : `/${slug}`;
  const collapsed = withLeading.replace(/\/+/g, "/");

  return collapsed.endsWith("/") ? collapsed : `${collapsed}/`;
};

const normalizeCanonical = (value: unknown): string => {
  const canonical = String(value ?? "").trim();
  if (!canonical) return canonical;

  try {
    const url = new URL(canonical);
    url.pathname = normalizeSlug(url.pathname);
    return url.toString();
  } catch {
    return canonical;
  }
};

// const data: MetaItem[] = [...metaData, ...blogData];
// const publishedData: MetaItem[] =
//   data.filter((item) => String(item?.status).toLowerCase() === "published") ?? [];

// const metaData: MetaItem[] = publishedData.map((item) => ({
//   ...item,
//   slug: normalizeSlug(item?.slug),
//   canonical_link: normalizeCanonical(item?.canonical_link),
//   meta_keywords: Array.isArray(item?.meta_keywords)
//     ? item.meta_keywords.join(", ")
//     : item.meta_keywords,
// }));

const publishedData = data.filter((item) => item?.status === "Published") ?? [];

const blogMetaData =
  publishedData.find(
    (item) => normalizeSlug(item?.slug) === normalizeSlug(paths?.blog),
  ) ?? publishedData[0];

const metaData: MetaItem[] = [
  ...publishedData.map((item) => ({
    ...item,
    slug: normalizeSlug(item?.slug),
    canonical_link: normalizeCanonical(item?.canonical_link),
    meta_keywords: Array.isArray(item?.meta_keywords)
      ? item?.meta_keywords?.join(", ")
      : item?.meta_keywords,
  }))
  ,
  // ...[
  //   ...(blogsData?.length > 0
  //     ? blogsData.map((b) => ({
  //       slug: normalizeSlug(b?.slug ?? blogMetaData?.slug),
  //       meta_title: b?.meta_title ?? blogMetaData?.meta_title,
  //       meta_description:
  //         b?.meta_description ?? blogMetaData?.meta_description,
  //       og_image: b?.og_image ?? blogMetaData?.og_image,
  //       meta_keywords: Array.isArray(b?.meta_keywords)
  //         ? b?.meta_keywords?.join(", ")
  //         : (b?.meta_keywords ??
  //           (Array.isArray(blogMetaData?.meta_keywords)
  //             ? blogMetaData?.meta_keywords?.join(", ")
  //             : blogMetaData?.meta_keywords)),
  //       canonical_link: normalizeCanonical(
  //         b?.canonical_link ?? blogMetaData?.canonical_link,
  //       ),
  //       priority: "0.8",
  //     }))
  //     : []),
  // ],
];

export default metaData;
