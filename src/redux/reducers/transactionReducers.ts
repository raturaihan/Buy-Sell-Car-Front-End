import {
  TransactionAction,
  TransactionActionType,
} from "../actions/typesActions";
import { ITransactionState } from "./typesReducers";

const initialState: ITransactionState = {
  transactions: {
    CurrentPage: 1,
    TotalData: 0,
    TotalPage: 0,
    Limit: 10,
    Data: [],
  },
  transactionsLoading: false,
  transactionsError: null,
  payment: "",
  paymentError: null,
  coupons: [],
  couponsLoading: false,
  couponsError: null,
  coupon: {
    game_id: 0,
    user_id: 0,
    coupon_id: 0,
    coupon_status: "",
    Coupon: { coupon_id: 0, code: "", promo_amount: 0 },
  },
  couponLoading: false,
  couponError: null,
};

export default function transactionReducer(
  state = initialState,
  action: TransactionAction
): ITransactionState {
  switch (action.type) {
    case TransactionActionType.SET_TRANSACTIONS:
      return { ...state, transactions: action.payload };
    case TransactionActionType.SET_TRANSACTIONS_LOADING:
      return { ...state, transactionsLoading: action.payload };
    case TransactionActionType.SET_TRANSACTIONS_ERROR:
      return { ...state, transactionsError: action.payload };
    case TransactionActionType.POST_PAYMENT:
      return { ...state, payment: action.payload };
    case TransactionActionType.POST_PAYMENT_ERROR:
      return { ...state, paymentError: action.payload };
    case TransactionActionType.GET_ALL_COUPONS:
      return { ...state, coupons: action.payload };
    case TransactionActionType.GET_ALL_COUPONS_LOADING:
      return { ...state, couponsLoading: action.payload };
    case TransactionActionType.GET_ALL_COUPONS_ERROR:
      return { ...state, couponsError: action.payload };
    case TransactionActionType.GET_COUPON_INFO:
      return { ...state, coupon: action.payload };
    case TransactionActionType.GET_COUPON_INFO_LOADING:
      return { ...state, couponLoading: action.payload };
    case TransactionActionType.GET_COUPON_INFO_ERROR:
      return { ...state, couponError: action.payload };
    default:
      return state;
  }
}
