import { useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import { Cliente } from "../../types/cliente";
import { LOAD_CLIENTES } from "../../graphql/Queries";


const ClientList = () => {
    const [clientes, setClientes] = useState<Cliente[]>([])
    const { data, loading, error} = useQuery(LOAD_CLIENTES);

    useEffect(() => {
        console.log(data);
        if(data) {
            setClientes(data.getAllClientes);
        }
    }, [data])


    return <>{JSON.stringify(clientes)}</>
};

export default ClientList;