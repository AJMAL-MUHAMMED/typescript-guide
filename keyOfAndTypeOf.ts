const StatusType = {
    PENDING: "pending",
    COMPLETED: "completed",
    FAILED: "failed"
} as const

function getStatus(orderId: string, status: keyof typeof StatusType) {
    console.log(orderId, "==", StatusType[status]);

}

getStatus("order123", "COMPLETED")