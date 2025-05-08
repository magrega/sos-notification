declare module "*.module.css" {
  //for css modules support in TS
  const content: Record<string, string>;
  export default content;
}

declare module "*.png";
declare module "*.svg";
