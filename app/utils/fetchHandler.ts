const fetchHandler = async (url: string, options: RequestInit = {}) => {
  let newUrl = url;
  if (typeof window === "undefined") {
    return;
  } else {
    newUrl = `${window.location.origin}/api${url}`;
  }

  const response = await fetch(newUrl, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options.headers,
    },
  });

  if (!response.ok) {
    throw new Error(response.statusText);
  }
  return response.json();
};

export default fetchHandler;
