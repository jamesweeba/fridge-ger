module.exports = {
    rmqUser: process.env.RMQ_USER  ||"guest"  ||"kuphrfng"||"admin" || "admin" ,
    rmqPassword: process.env.RMQ_PASSWORD ||"guest" || "XiSF8kPRamIzoKLXXDIwoshRsbkPyTz1" ||"zLZpbNgUDK1" ,
    rmqHost: process.env.RMQ_HOST || "87ec-41-191-245-122.ngrok.io" ||"jaguar.rmq.cloudamqp.com:5171"  ||"rabbitmq-dev.esoko.com"||"jaguar.rmq.cloudamqp.com" ||"localhost:5672",
    apiReleaseStage: process.env.API_RELEASE_STAGE || "development",




}

