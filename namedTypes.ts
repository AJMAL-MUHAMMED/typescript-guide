type StatusTypes = "pending" | "completed" | "failed";

//when we use type attribute we can assign object as interface ,but the advantage compared to interface is , type will also take inline type like above

let currentStatus: StatusTypes = "failed" 