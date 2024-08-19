declare module '*.module.css' {
  const classNames: Record<string, string>;
  export default classNames;
}

declare module '*.module.scss' {
  const classNames: Record<string, string>;
  export default classNames;
}

declare module 'is-ios' {
  const isIOS: boolean;
  export default isIOS;
}
