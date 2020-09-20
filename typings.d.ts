declare module '*.css';
declare module '*.less';
declare module "*.png";
declare module '*.svg' {
  export function ReactComponent(props: React.SVGProps<SVGSVGElement>): React.ReactElement
  const url: string
  export default url
}
// declare module 'draft-js-hashtag-plugin'
// declare module 'draft-js-sticker-plugin'
// declare module 'draft-js-linkify-plugin'
// declare module 'draft-js-mention-plugin'
// declare module 'draft-js-undo-plugin'
