export const updateProfile = (host) => (
  $.ajax({
    method: 'PATCH',
    url: `api/hosts/${host.id}`,
    data: {host}
  })
);
