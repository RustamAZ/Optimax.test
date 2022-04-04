import { createContext } from "react";

const defaultValue = {}

const {
    Provider: StoreServiceProvider,
    Consumer: StoreServiceConsumer
} = createContext(defaultValue);

export {
    StoreServiceProvider,
    StoreServiceConsumer
}