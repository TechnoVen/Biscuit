export const updateProfile = (host) => (
  $.ajax({
    method: 'POST',
    url: 'api/hosts',
    data: {host}
  })
);
