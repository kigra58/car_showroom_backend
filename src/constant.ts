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


export const HTTP_STATUS_CODE = {
    OK: {
      message: "The request was successful.",
      code: 200,
      meaning: "Request successful."
    },
    CREATED: {
      message: "The resource was created successfully.",
      code: 201,
      meaning: "Resource created successfully."
    },
    NO_CONTENT: {
      message: "The server successfully processed the request, but is not returning any content.",
      code: 204,
      meaning: "No Content."
    },
    BAD_REQUEST: {
      message: "Bad Request. The server could not understand the request due to invalid syntax.",
      code: 400,
      meaning: "Bad Request."
    },
    UNAUTHORIZED: {
      message: "Unauthorized. Please provide valid credentials.",
      code: 401,
      meaning: "Unauthorized."
    },
    FORBIDDEN: {
      message: "Forbidden. You do not have permission to access this resource.",
      code: 403,
      meaning: "Forbidden."
    },
    NOT_FOUND: {
      message: "Not Found. The resource you requested could not be found.",
      code: 404,
      meaning: "Not Found."
    },
    METHOD_NOT_ALLOWED: {
      message: "Method Not Allowed. The requested method is not allowed for the resource.",
      code: 405,
      meaning: "Method Not Allowed."
    },
    TOO_MANY_REQUESTS: {
      message: "Too Many Requests. Please try again later.",
      code: 429,
      meaning: "Too Many Requests."
    },
    INTERNAL_SERVER_ERROR: {
      message: "Internal Server Error. An unexpected error occurred on the server.",
      code: 500,
      meaning: "Internal Server Error."
    },
    BAD_GATEWAY: {
      message: "Bad Gateway. The server received an invalid response from the upstream server.",
      code: 502,
      meaning: "Bad Gateway."
    },
    SERVICE_UNAVAILABLE: {
      message: "Service Unavailable. The server is temporarily unavailable.",
      code: 503,
      meaning: "Service Unavailable."
    },
    GATEWAY_TIMEOUT: {
      message: "Gateway Timeout. The upstream server did not respond in time.",
      code: 504,
      meaning: "Gateway Timeout."
    }
};

