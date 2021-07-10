const express = require('express');
const router = express.Router();

/* bodyParser - POST 파라이터 추출에 필요*/ 
var bodyParser = require('body-parser');
/*전통방식의 GET파라미터 분석에 필요*/
var url = require('url');

router.use(bodyParser.json()); // support encoded bodies
router.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

router.use('/', (req, res) => {
    var grpcjs = require('@grpc/grpc-js');
    var protoLoader = require('@grpc/proto-loader');
    var serverIpOld = '203.245.41.17:50052';
    var serverIpNew = '211.206.127.139:50052';
    var PROTO_PATH_TEST = `${__dirname   }/TrendOverviewService.proto`;
    var packageDefinition_Test = protoLoader.loadSync(PROTO_PATH_TEST,
    {
        keepCase: true,
        longs: String,
        enums: String,
        defaults: true,
        oneofs: true
    });
    var protoDescriptor_Test = grpcjs.loadPackageDefinition(packageDefinition_Test);
    var client_Test = new protoDescriptor_Test.TrendService.TrendInfo(serverIpNew, grpcjs.credentials.createInsecure());

    //param
    /*
    var methodType = req.method;
    var data2 = {};
    if( methodType == 'GET' ){
      var parseObj = url.parse(req.url, true);
      data2.FromDate = parseObj.query.FromDate;
      data2.ToDate = parseObj.query.ToDate;
      data2.Category1 = parseObj.query.Category1;
      data2.Category2 = parseObj.query.Category2;
      data2.Category3 = parseObj.query.Category3;
      data2.Keyword = parseObj.query.Keyword;
      data2.Factor = parseObj.query.Factor;
    }
    else{
      data2.FromDate = req.body.FromDate;
      data2.ToDate = req.body.ToDate;
      data2.Category1 = req.body.Category1;
      data2.Category2 = req.body.Category2;
      data2.Category3 = req.body.Category3;
      data2.Keyword = req.body.Keyword;
      data2.Factor = req.body.Factor;  
 
    }
    */
    var data2 = {
        FromDate : "2021-06-15", 
        ToDate : "2021-06-22", 
        Period_Unit : "Daily",
        Channel_Upper : ["Online Shopping"],
        Channel_Lower : ["Coupang"],
        Keyword : "켈빈 클라인",
        Company : "테스트",
        CompanyCode : 29791304 ,
    }

    client_Test.GetChannel_Posting_Indicator(data2, function(err, data) {
        try
        {
            console.log('error : ', err);
            
            res.send(data);
        }
        catch(ex)
        {
            console.log(ex)
        }
    });
});

module.exports = router;