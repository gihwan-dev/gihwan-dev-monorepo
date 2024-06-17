export function isValidImage(url: string | null): url is string {
  return url !== null && url !== '';
}
