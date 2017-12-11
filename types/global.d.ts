/** Global definitions for developement **/

// for style loader
declare module '*.css' {
  const styles: any
  export = styles
}
declare module '*.jpeg' {
  var image: any
  export = image
}

declare module '*.jpg' {
  var image: any
  export default image
}
