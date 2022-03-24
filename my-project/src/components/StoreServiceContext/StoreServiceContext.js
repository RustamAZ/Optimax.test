import { createContext } from "react";

const {
    Provider: StoreServiceProvider,
    Consumer: StoreServiceConsumer
} = createContext();

export {
    StoreServiceProvider,
    StoreServiceConsumer
}