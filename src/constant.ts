export enum PAYMENT_STATUS {
    INITIATE,
    SUCCESS,
    FAILED,
    PENDING,
    REFUND_INITIATE,
    REFUNDED
};

export enum PAYMENT_MODE {
    CASH,
    CREDIT_CARD,
    DEBIT_CARD,
    NET_BANKING,
    UPI
};

export enum BOOKING_STATUS {
    INITIATE,
    SUCCESS,
    FAILED,
    PENDING,
    REFUND_INITIATE,
    REFUNDED,
    CANCELLED
};

export enum USER_ROLE {
    CRM,
    TL,
    GM,
    SM,
    CA
};

export enum INQUIRY_STATUS {
    WARM,
    COLD,
    HOT
};


export enum ORGNIZATION_PERMISSION {
    INQUIRY,
    BOOKING,
};

export enum DEPARTMENT_PERMISSION {
    INQUIRY,
    BOOKING,
};

export enum LEAVE_TYPE{
    SICK_LEAVE,
    CASUAL_LEAVE,
    PAID_LEAVE,
    UNPAID_LEAVE,
    MATERNITY_LEAVE,
    PATERNITY_LEAVE,
    COMP_OFF
}

export enum LEAVE_STATUS{
    PENDING,
    APPROVED,
    REJECTED
};


export enum LEAVE_DURATION{
    FULL_DAY,
    FIRST_HALF,
    SECOND_HALF
} 

