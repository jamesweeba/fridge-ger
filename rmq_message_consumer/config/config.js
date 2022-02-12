module.exports = {
    // rmqUser: process.env.RMQ_USER   ||"admin"|| "kuphrfng"||"guest"  || "admin" ,
    // rmqPassword: process.env.RMQ_PASSWORD ||"zLZpbNgUDK1" || "XiSF8kPRamIzoKLXXDIwoshRsbkPyTz1" ||"guest" ,
    // rmqHost: process.env.RMQ_HOST || "rabbitmq-dev.esoko.com"||"jaguar.rmq.cloudamqp.com" ||"localhost:5672",
    // apiReleaseStage: process.env.API_RELEASE_STAGE || "development",
    apiPort:process.env.API_PORT || 3003,
    rmqUser: process.env.RMQ_USER   ||"kuphrfng"||"admin"||"guest"  || "admin" ,
    rmqPassword: process.env.RMQ_PASSWORD || "XiSF8kPRamIzoKLXXDIwoshRsbkPyTz1" ||"guest" ||"zLZpbNgUDK1" ,
    rmqHost: process.env.RMQ_HOST || "jaguar.rmq.cloudamqp.com:5171"  ||"rabbitmq-dev.esoko.com"||"jaguar.rmq.cloudamqp.com" ||"localhost:5672",
    apiReleaseStage: process.env.API_RELEASE_STAGE || "development",
}

    

