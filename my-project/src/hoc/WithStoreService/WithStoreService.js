import { StoreServiceConsumer } from "../../components/StoreServiceContext/StoreServiceContext";

const WithStoreService = () => (Wrapped) => {
    return (props) => {
        return (
            <StoreServiceConsumer>
                {
                    (storeService) => {
                        return (
                            <Wrapped {...props} storeService={storeService}/>
                        );
                    }
                }
            </StoreServiceConsumer>
        );
    };
};

export default WithStoreService;