export async function loadProfile(id) {
  try {
    const res = await fetch(`https://api.example.com/profiles/${id}`);
    return await res.json();
  } catch (err) {}
}

export function refreshProfile(id) {
  loadProfile(id).then((profile) => {
    console.log(profile.name.toUpperCase());
  });
}
