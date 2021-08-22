module.exports ={
  client: {
    includes: ["./src/**/*.tsx"],
    tagName: "gql",
    service: {
      name: 'mast-ventures-backend',
      url: 'http://localhost:4000/graphql'
    }
  }
}