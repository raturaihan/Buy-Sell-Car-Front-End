import { TransactionAction, TransactionActionType } from "../actions/typesActions";
import { ITransactionState } from "./typesReducers";

const initialState: ITransactionState = {
    transactions: {
        CurrentPage: 1,
        TotalData: 0, 
        TotalPage: 0, 
        Limit: 10, 
        Data: []
    },
    transactionsLoading: false,
    transactionsError: null,
    payment: "",
    paymentError: null
}

export default function transactionReducer(
    state = initialState,
    action: TransactionAction
): ITransactionState {
    switch(action.type) {
        case TransactionActionType.SET_TRANSACTIONS:
            return {...state, transactions: action.payload};
        case TransactionActionType.SET_TRANSACTIONS_LOADING:
            return {...state, transactionsLoading: action.payload}; 
        case TransactionActionType.SET_TRANSACTIONS_ERROR:
            return {...state, transactionsError: action.payload};
        case TransactionActionType.POST_PAYMENT:
            return {...state, payment: action.payload};
        case TransactionActionType.POST_PAYMENT_ERROR:
            return {...state, paymentError: action.payload};
        default:
            return state;
    }
}