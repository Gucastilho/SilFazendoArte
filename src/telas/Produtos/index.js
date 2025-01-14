import React from "react";
import { FlatList } from "react-native";

import Item from "./Item";
import TelaPadrao from "../../componentes/TelaPadrao";

const produtos = [
    {
        id: 1,
        nome: "CESTA INVERNO",
        descricao: "Cesta de frutas de inverno.",
        preco: 79.9
    },
    {
        id: 2,
        nome: "CESTA VERÃO",
        descricao: "Cesta de frutas de verão",
        preco: 89.9
    },
    {
        id: 3,
        nome: "CESTA ESTAÇÕES",
        descricao: "Uma cesta com frutas da estação vigente.",
        preco: 99.9
    }
];

export default function Produtos (){
    return <TelaPadrao>
            <FlatList
                data={produtos}
                renderItem={({item})=>(<Item {...item}/>)}
                keyExtractor={({id})=>(String(id))}
            />
        </TelaPadrao>
}