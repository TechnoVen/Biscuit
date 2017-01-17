export const updateProfile = (host) => (
  $.ajax({
    method: 'PATCH',
    url: `api/hosts/${host.id}`,
    data: {host}
  })
);

export const fetchHostProfile = (host) => (
  $.ajax({
      method: 'GET',
      url: `api/hosts/${host.id}`
  })
);
