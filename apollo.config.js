module.exports ={
  client: {
    includes: ["./src/**/*.tsx"],
    tagName: "gql",
    service: {
      name: 'scoop-house-backend',
      url: 'http://localhost:4000/graphql'
    }
  }
}