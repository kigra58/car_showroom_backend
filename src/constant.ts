export enum PAYMENT_STATUS {
    INITIATE,
    SUCCESS,
    FAILED,
    PENDING,
    REFUND_INITIATE,
    REFUNDED
}

export enum PAYMENT_MODE {
    CASH,
    CREDIT_CARD,
    DEBIT_CARD,
    NET_BANKING,
    UPI
}

export enum BOOKING_STATUS {
    SUCCESS,
    FAILED,
    PENDING,
    REFUND_INITIATE,
    REFUNDED,
    CANCELLED
}

export enum USER_ROLE {
    USER,
    AGENT,
    TL,
    GM
}