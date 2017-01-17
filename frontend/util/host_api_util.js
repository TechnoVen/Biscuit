export const updateHostProfile = (host) => (
  $.ajax({
    method: 'PATCH',
    url: `api/hosts/${host.id}`,
    data: {host}
  })
);

export const fetchHostProfile = () => (
  $.ajax({
      method: 'GET',
      url: `api/hosts`
  })
);
