const graphql = require("graphql");
const ClienteType = require("./TypeDefs/ClienteType");

const { GraphQLSchema, GraphQLObjectType, GraphQLList, GraphQLInt, GraphQLString } = graphql;

const ClienteData = require("../demo_data.json");

const RootQuery = new GraphQLObjectType({
    name: "RootQueryType",
    fields: {
        getAllClientes: { 
            type: new GraphQLList(ClienteType),
            args: { id: { type: GraphQLInt}},
            resolve(parent, args) {
                // Acesso a um DB - vamos fazer?
                return ClienteData;
            }
        }
    }
});

const Mutation = new GraphQLObjectType({
    name: "Mutation",
    fields: {
        createCliente: {
            type: ClienteType,
            args: {
                nome: { type: GraphQLString },
                sobrenome: { type: GraphQLString },
                email: { type: GraphQLString },
                senha: { type: GraphQLString }
            },
            resolve(parents, args) {
                ClienteData.push({
                    id: ClienteData.length + 1,
                    nome: args.nome,
                    sobrenome: args.sobrenome,
                    email: args.email,
                    senha: args.senha
                })
                return args;
            }
        }
    }
})


module.exports = new GraphQLSchema({query: RootQuery, mutation: Mutation});