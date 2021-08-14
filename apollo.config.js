module.exports ={
  client: {
    includes: ["./src/**/*.tsx"],
    tagName: "gql",
    service: {
      name: 'reference-letter-backend',
      url: 'http://localhost:4000/graphql'
    }
  }
}