
const express = require('express')

const sampecharts = require('./sample-charts')
const sampecharts3d=require('./sample-charts-3d')
const echartsservice=require('./echarts-service')
const errorImageService=require('./error-image')
const base64 = require('base-64');
const bodyParser = require('body-parser');
const {SampleChartServivce}=sampecharts;
const {SampleChartServivce3D}=sampecharts3d
const {EChartsServivce}=echartsservice
const {ErrorImage} = errorImageService
const app = express()
const port = 3000
app.use(express.json())
//app.use(bodyParser.json());
console.log(sampecharts)
//app.use(bodyParser.urlencoded({ extended: false }));
const { v4: uuidv4 } = require('uuid');

const IMAGE_CACHE=[];

const register=({data})=>{

    const val=uuidv4();
    IMAGE_CACHE[val]=data
    return val;

}

const getFromCache=({uuid})=>{
    const val=IMAGE_CACHE[uuid];
    delete IMAGE_CACHE[uuid]
    return val;
}

app.get('/', (req, res) => {

    res.send('Hello World!')
})

app.post('/reg', (req, res) => {    
    res.send(register({data:req.body}))
})

app.get('/image/:uuid', (req, res) => {  
    const uuid = req.params.uuid;
    const sampleData=getFromCache({uuid});
    if(!sampleData){
        ErrorImage({req,res,text:"图片已经取走\n参考("+uuid+")"})
        return;
    }
    EChartsServivce({req,res,sampleData})
    
})

app.get('/base64img/:base64json', (req, res) => {  
    try{
        const base64json = req.params.base64json;
        const decodedData = base64.decode(base64json);
        const sampleData=JSON.parse(decodedData)
        EChartsServivce({req,res,sampleData})
    }catch(error){
        ErrorImage({req,res,text:error})
    }
    
})


app.post('/', (req, res) => {
    
    EChartsServivce({req,res,sampleData:req.body})

})

app.get('/err', (req, res) => {
    ErrorImage({req,res,text:"测试错误场景"})
})


app.post('/body', (req, res) => {
    res.send("'"+JSON.stringify(req.body)+"'\n")
    res.sendStatus(200);
    res.end();
})

app.get('/sample', (req, res) => {
    SampleChartServivce({req, res})
})

app.get('/sample3d', (req, res) => {
    SampleChartServivce3D({req, res})
})

app.get('/ping', (req, res) => {
    res.send('ok!')
})

app.post('/ping', (req, res) => {
    res.send('ok!')
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

