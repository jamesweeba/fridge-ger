module.exports = {
    rmqUser: process.env.RMQ_USER   ||"guest"  || "admin" || "kuphrfng",
    rmqPassword: process.env.RMQ_PASSWORD ||"guest" || "XiSF8kPRamIzoKLXXDIwoshRsbkPyTz1" ,
    rmqHost: process.env.RMQ_HOST ||"localhost:5672"|| "jaguar.rmq.cloudamqp.com" || "rabbitmq-dev.esoko.com",
    apiReleaseStage: process.env.API_RELEASE_STAGE || "development",




}

