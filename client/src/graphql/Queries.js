import { gql } from "@apollo/client";

export const LOAD_CLIENTES = gql`
    query {
        getAllClientes {
            id,
            nome,
            sobrenome,
            email
        }
    }
`; 