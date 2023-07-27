export function useRouter() {
  const handler = (path) => {
    window.dispatchEvent(new CustomEvent("popstate", { detail: path }));
    return history.pushState(
      { from: location.pathname, to: path },
      "",
      `${path}`
    );
  };

  return { push: handler };
}
