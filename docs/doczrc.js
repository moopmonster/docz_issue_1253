export default {
  typescript: true,
  docgenConfig: {
    searchPath: '../',
  },
  filterComponents: files => {
    return files.filter(
      filepath =>
        /\/[A-Z]\w*\.(ts|tsx)$/.test(filepath) 
    )
  },
}
