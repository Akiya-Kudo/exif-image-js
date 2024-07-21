/**
 * from  winjeysong Exifly Version 0.1.2
 * @see https://github.com/winjeysong/exifly
 */
export function getExt(name: string) {
  return name.split('.').at(-1);
}