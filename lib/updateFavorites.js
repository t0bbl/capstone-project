export default async function updateFavorites(picSRCCloudinary, picID, action) {
  const url = `/api/favorites/alltimefavorites/${picID}?operation=${action}`;

  const response = await fetch(url, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ picSRCCloudinary }),
  });

  return response;
}
