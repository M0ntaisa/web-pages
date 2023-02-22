export const handle = async({ event, resolve }) => {
  const theme = event.cookies.get("siteTheme");

  const response = await resolve(event);
  return response;
}