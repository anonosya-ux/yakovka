import { client } from './client';

// ─── Rooms ───
export async function getRooms() {
  return client.fetch(
    `*[_type == "room"] | order(order asc) {
      _id,
      title,
      "slug": slug.current,
      price,
      description,
      features,
      area,
      guests,
      images[] {
        _key,
        asset-> { _id, url },
        alt,
        "url": asset->url
      }
    }`
  );
}

export async function getRoomBySlug(slug: string) {
  return client.fetch(
    `*[_type == "room" && slug.current == $slug][0] {
      _id,
      title,
      "slug": slug.current,
      price,
      description,
      features,
      area,
      guests,
      images[] {
        _key,
        asset-> { _id, url },
        alt,
        "url": asset->url
      }
    }`,
    { slug }
  );
}

// ─── Offers ───
export async function getOffers() {
  return client.fetch(
    `*[_type == "offer" && isActive == true] | order(order asc) {
      _id,
      title,
      description,
      image {
        asset-> { _id, url },
        "url": asset->url
      }
    }`
  );
}

// ─── Gallery ───
export async function getGalleryImages(category?: string) {
  const filter = category
    ? `*[_type == "galleryImage" && category == $category]`
    : `*[_type == "galleryImage"]`;
  
  return client.fetch(
    `${filter} | order(order asc) {
      _id,
      image {
        asset-> { _id, url },
        "url": asset->url
      },
      alt,
      category
    }`,
    category ? { category } : {}
  );
}

// ─── Site Settings (singleton) ───
export async function getSiteSettings() {
  return client.fetch(
    `*[_type == "siteSettings"][0] {
      heroTitle,
      heroSubtitle,
      heroBadge,
      aboutTitle,
      aboutText,
      aboutImage {
        asset-> { _id, url },
        "url": asset->url
      },
      phone,
      email
    }`
  );
}
