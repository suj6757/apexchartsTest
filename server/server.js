// express 사용해서 api 호출 링크별로 route 해주게 설정
const express = require('express');

const router = express();
const port = 5000;

router.use('/api/getBasic_Overview_Total', require('./api/sample_GetBasic_Overview_Total'));
router.use('/api/getBasic_Overview_ID_Rate', require('./api/sample_GetBasic_Overview_ID_Rate'));
router.use('/api/getChannel_Posting_Indicator', require('./api/sample_GetChannel_Posting_Indicator'));

router.listen(port, function () {
    console.log(`Example app listening on port : ${  port}`);
});

module.exports = router;