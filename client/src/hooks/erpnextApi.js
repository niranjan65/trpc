

export const apiGet = async (url, headers) => {
  const res = await fetch(url, {
    method: "GET",
    headers,
  });

  if (!res.ok) {
    throw new Error("GET request failed");
  }

  return res.json();
};

export const apiPost = async (url, body, headers) => {
  const res = await fetch(url, {
    method: "POST",
    headers,
    body: JSON.stringify(body),
  });

  if (!res.ok) {
    throw new Error("POST request failed");
  }

  return res.json();
};
