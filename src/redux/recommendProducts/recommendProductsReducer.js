import {
    FETCH_RECOMMEND_PRODUCTS_FAIL,
    FETCH_RECOMMEND_PRODUCTS_START,
    FETCH_RECOMMEND_PRODUCTS_SUCCESS
} from "./recommendProductsActions";

const defaultState: RecommendProductsState = {
    loading: true,
    error: null,
    productList: [],
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = defaultState, action) => {
    switch (action.type) {
        case FETCH_RECOMMEND_PRODUCTS_START:
            return {
                ...state, loading: true
            };
        case FETCH_RECOMMEND_PRODUCTS_SUCCESS:
            return {
                ...state, loading: false, productList: action.payload
            };
        case FETCH_RECOMMEND_PRODUCTS_FAIL:
            return {
                ...state, loading: false, error: action.payload
            };
        default:
            return state;
    }
};