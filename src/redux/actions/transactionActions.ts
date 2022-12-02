import { Dispatch } from "react";
import instance from "../../config/axios";
import {
  ICoupon,
  IGames,
  ITransactionPagination,
  PaymentParams,
} from "../../interface";
import { TransactionAction, TransactionActionType } from "./typesActions";

interface IParams {
  page: number;
  limit: number;
  full_name: string;
  sortBy: string;
  sort: string;
}

export const setTransactions = (
  payload: ITransactionPagination
): TransactionAction => {
  return {
    type: TransactionActionType.SET_TRANSACTIONS,
    payload: payload,
  };
};

export const setTransactionsLoading = (payload: boolean): TransactionAction => {
  return {
    type: TransactionActionType.SET_TRANSACTIONS_LOADING,
    payload: payload,
  };
};

export const setTransactionsError = (
  payload: string | null
): TransactionAction => {
  return {
    type: TransactionActionType.SET_TRANSACTIONS_ERROR,
    payload: payload,
  };
};

export const postPayment = (payload: string): TransactionAction => {
  return {
    type: TransactionActionType.POST_PAYMENT,
    payload: payload,
  };
};

export const postPaymentError = (payload: string | null): TransactionAction => {
  return {
    type: TransactionActionType.POST_PAYMENT_ERROR,
    payload: payload,
  };
};

export const getCoupons = (payload: IGames[]): TransactionAction => {
  return {
    type: TransactionActionType.GET_ALL_COUPONS,
    payload: payload,
  };
};

export const getCouponsLoading = (payload: boolean): TransactionAction => {
  return {
    type: TransactionActionType.GET_ALL_COUPONS_LOADING,
    payload: payload,
  };
};

export const getCouponsError = (payload: string | null): TransactionAction => {
  return {
    type: TransactionActionType.GET_ALL_COUPONS_ERROR,
    payload: payload,
  };
};

export const getCouponInfo = (payload: IGames): TransactionAction => {
  return {
    type: TransactionActionType.GET_COUPON_INFO,
    payload: payload,
  };
};

export const getCouponInfoLoading = (payload: boolean): TransactionAction => {
  return {
    type: TransactionActionType.GET_COUPON_INFO_LOADING,
    payload: payload,
  };
};

export const getCouponInfoError = (
  payload: string | null
): TransactionAction => {
  return {
    type: TransactionActionType.GET_COUPON_INFO_ERROR,
    payload: payload,
  };
};

export const setGameCoupons = (payload: ICoupon[]): TransactionAction => {
  return {
    type: TransactionActionType.GET_GAME_COUPONS,
    payload: payload,
  };
};

export const setGameCouponsLoading = (payload: boolean): TransactionAction => {
  return {
    type: TransactionActionType.GET_GAME_COUPONS_LOADING,
    payload: payload,
  };
};

export const setGameCouponsError = (
  payload: string | null
): TransactionAction => {
  return {
    type: TransactionActionType.GET_GAME_COUPONS_ERROR,
    payload: payload,
  };
};

export const playGame = (payload: ICoupon): TransactionAction => {
  return {
    type: TransactionActionType.PLAY_GAME,
    payload: payload,
  };
};

export const playGameError = (payload: string | null): TransactionAction => {
  return {
    type: TransactionActionType.PLAY_GAME_ERROR,
    payload: payload,
  };
};

export const resetTransaction = (): TransactionAction => {
    return {
        type: TransactionActionType.RESET_TRANSACTION
    }
}

export const fetchTransactions = ({
  page,
  limit,
  full_name,
  sortBy,
  sort,
}: IParams) => {
  return async (dispatch: Dispatch<TransactionAction>) => {
    dispatch(setTransactionsLoading(true));
    dispatch(setTransactionsError(""));

    await instance
      .get("/admin/transaction?", {
        params: {
          page: page,
          limit: limit,
          full_name: full_name,
          sort: sort,
          sortBy: sortBy,
        },
      })
      .then((response) => {
        if (!response.data) {
          throw new Error("Failed to fetch transactions");
        }
        return response.data;
      })
      .then((data) => {
        dispatch(setTransactions(data));
      })
      .catch((error) => {
        dispatch(setTransactionsError(error));
      })
      .finally(() => dispatch(setTransactionsLoading(false)));
  };
};

export const doPayment = ({
  car_id,
  final_amount,
  trans_type,
  coupon_id,
}: PaymentParams) => {
  return async (dispatch: Dispatch<TransactionAction>) => {
    dispatch(postPaymentError(""));

    await instance
      .post("/user/transaction", {
        car_id: car_id,
        final_amount: final_amount,
        trans_type: trans_type,
        coupon_id: coupon_id,
      })
      .then((response) => {
        if (!response.data) {
          throw new Error("failed to do payment");
        }
        return response.data;
      })
      .then((data) => {
        dispatch(postPayment(data));
      })
      .catch((error) => {
        dispatch(postPaymentError(error));
      });
  };
};

export const getUserCoupons = () => {
  return async (dispatch: Dispatch<TransactionAction>) => {
    dispatch(getCouponsLoading(true));
    dispatch(getCouponsError(""));

    await instance
      .get("/user/coupon")
      .then((response) => {
        if (!response.data) {
          throw new Error("Failed to fetch coupons");
        }
        return response.data;
      })
      .then((data) => {
        dispatch(getCoupons(data));
      })
      .catch((error) => {
        dispatch(getCouponsError(error));
      })
      .finally(() => dispatch(getCouponsLoading(false)));
  };
};

export const getUserCouponInfo = (code: string | undefined) => {
  return async (dispatch: Dispatch<TransactionAction>) => {
    dispatch(getCouponInfoLoading(true));
    dispatch(getCouponInfoError(""));

    await instance
      .get(`/user/coupon-info/${code}`)
      .then((response) => {
        if (!response.data) {
          throw new Error("Failed to fetch coupon info");
        }
        return response.data;
      })
      .then((data) => {
        dispatch(getCouponInfo(data));
      })
      .catch((error) => {
        dispatch(getCouponInfoError(error));
      })
      .finally(() => dispatch(getCouponInfoLoading(false)));
  };
};

export const getGameCoupons = () => {
  return async (dispatch: Dispatch<TransactionAction>) => {
    dispatch(setGameCouponsLoading(true));
    dispatch(setGameCouponsError(""));

    await instance
      .get("/user/coupons")
      .then((response) => {
        if (!response.data) {
          throw new Error("Failed to fetch coupons game");
        }
        return response.data;
      })
      .then((data) => {
        dispatch(setGameCoupons(data));
      })
      .catch((error) => {
        dispatch(setGameCouponsError(error));
      })
      .finally(() => dispatch(setGameCouponsLoading(false)));
  };
};

export const playGames = () => {
  return async (dispatch: Dispatch<TransactionAction>) => {
    dispatch(playGameError(""));

    await instance
      .post("/user/games")
      .then((response) => {
        if (!response.data) {
          throw new Error("Failed to play game");
        }
        return response.data;
      })
      .then((data) => {
        dispatch(playGame(data));
      })
      .catch((error) => {
        dispatch(playGameError(error))
      });
  };
};
