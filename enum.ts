//enum works on run time , we can avoide it by using const enum{}


enum StatusType {
    PENDING,
    COMPLETED,
    FAILED
}

function getStatus(orderId: string, status: StatusType) {
    console.log(orderId, "==", status);

}

getStatus("order123", StatusType.FAILED)