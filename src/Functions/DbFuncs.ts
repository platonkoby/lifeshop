import { DocumentData, QuerySnapshot } from "firebase/firestore";
import React from "react";
import { Item } from "../models/items.models";

export const retrieveData = (request : Promise<QuerySnapshot<DocumentData>>, setAction : React.Dispatch<React.SetStateAction<Item[]>>) => (
    request
    .then((snapshot) => snapshot.docs.map((item) => item.data()))
    .then((itemList) => setAction([...itemList as Item[]]))
)