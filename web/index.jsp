<%--suppress ALL --%>
<%--
  Created by IntelliJ IDEA.
  User: xuhongliang
  Date: 2017/6/20
  Time: 下午5:02
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>$Title$</title>
</head>

<script type="text/javascript" src="${pageContext.request.contextPath }/flatbuffers.js"></script>
<script type="text/javascript" src="${pageContext.request.contextPath }/ResultInfo_generated.js"></script>
<script type="text/javascript" src="${pageContext.request.contextPath }/jquery-1.4.4.min.js"></script>
<script type="text/javascript">

    function readFile() {
        alert("执行");
        var reader = new FileReader();
        var file = document.getElementById('file_input').files[0];
        reader.onload = function () {
            alert("读取");
            var data = new Uint8Array(reader.result);
            alert(data);
            var buf = new flatbuffers.ByteBuffer(data);
            alert(buf);
            alert("解析");
            var FResultInfo = flatbuffer.FResultInfo.getRootAsFResultInfo(buf);
            alert(FResultInfo.code());
        };
        reader.readAsArrayBuffer(file);
    }

    function getFResultInfoWithNetWork() {
        var currentMs = new Date().getMilliseconds();
        var oReq = new XMLHttpRequest();
        oReq.open("GET", "${pageContext.request.contextPath}/reFlatBuffer", true);
        oReq.responseType = "arraybuffer";
        oReq.onload = function (oEvent) {
            var arrayBuffer = oReq.response; // Note: not oReq.responseText
            if (arrayBuffer) {
                var byteArray = new Uint8Array(arrayBuffer);
                // alert(byteArray);
                var buf = new flatbuffers.ByteBuffer(byteArray);
                // alert(buf);
                //alert("解析");
                var FResultInfo = flatbuffer.FResultInfo.getRootAsFResultInfo(buf);
                var resMs = new Date().getMilliseconds();
                alert(resMs - currentMs);
                alert(FResultInfo.code());

            }
        }
        oReq.send(null);
    }

    function getJsonResultInfoWithNetWork() {
        var currentMs = new Date().getMilliseconds();
        $.getJSON("${pageContext.request.contextPath}/reJson",
            function (data) {
                var debrisInfo = data['data'];
                //alert(debrisInfo['debrisHelp']);
                var resMs = new Date().getMilliseconds();
                alert(resMs - currentMs);
                alert(data['code']);
                //alert(resMs - currentMs);
                $.each(debrisInfo['debrisList'], function (i, item) {

                });
            });

    }


</script>
<body>
<input type="file" id="file_input" onchange="readFile();">

<input type="button" onclick="getJsonResultInfoWithNetWork();" value="请求json数据">

<input type="button" onclick="getFResultInfoWithNetWork();" value="请求Flatbuffer数据">
</body>
</html>
