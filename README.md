# echarts-server
An echarts server rendering option into png


## 直接取得例子的图片

http://localhost:3000/sample

```bash
curl -d @sample-data.json  -H "Content-Type: application/json" http://localhost:3000/ -o sample.png
```
sample-data.json是一个文件。位于test目录下

## 注册后，取得一个图片

* 注册 curl -d @sample-data.json  -H "Content-Type: application/json" http://localhost:3000/reg， 会得到一个uuid，下面步骤使用
  
* 取回图片 curl  http://localhost:3000/image/0699d631-499d-4e90-beee-35ea4f06a781  -o newimage.png

