export function useRouter() {
  const handler = (path) => {
    return history.pushState({ from: location.origin }, "", `${path}`);
  };

  return { push: handler };
}
