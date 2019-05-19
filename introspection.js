import fetch from 'node-fetch'
import { makeRemoteExecutableSchema, introspectSchema } from 'graphql-tools'
import { createHttpLink } from 'apollo-link-http'

const getIntrospectSchema = async (url) => {
  console.log(url)
  const makeDatabaseServiceLink = () => createHttpLink({
    uri: url,
    fetch
  })

  // Fetch our schema
  const databaseServiceSchemaDefinition = await introspectSchema(makeDatabaseServiceLink())

  // make an executable schema
  return makeRemoteExecutableSchema({
    schema: databaseServiceSchemaDefinition,
    link: makeDatabaseServiceLink()
  })
}

export default getIntrospectSchema
