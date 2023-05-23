async function updateFavorites(picSRCCloudinary, picID, action) {
  const url = `/api/Favorites/alltimeFavorites/${action}/${picID}`;
  const response = await fetch(url, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ picSRCCloudinary }),
  });
  return response;
}
