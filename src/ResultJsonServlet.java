import com.alibaba.fastjson.JSON;
import json.Debris;
import json.DebrisInfo;
import json.ResultInfo;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

/**
 * Created by xuhongliang on 2017/6/21.
 */
public class ResultJsonServlet extends HttpServlet {


    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        doGet(req, resp);
    }

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        //创建resultInfo
        ResultInfo resultInfo = new ResultInfo();
        resultInfo.setCode(200);

        //创建碎片信息
        DebrisInfo debrisInfo = new DebrisInfo();
        debrisInfo.setDebrisHelp("碎片说明xxxxxxxxxxxxx");

        //创建碎片集合
        List<Debris> debrisList = new ArrayList<>();

        //创建碎片
        for (int i = 0; i < Constant.dataNum; i++) {
            Debris debris = new Debris();
            debris.setName("碎片" + i);
            debris.setId(i);
            debris.setChangeNum(100 + i);
            debris.setImage("图片" + i);
            debris.setHighlight(i % 2 == 0 ? true : false);
            debrisList.add(debris);
        }
        debrisInfo.setDebrisList(debrisList);
        resultInfo.setData(debrisInfo);
        String resultJsonString = JSON.toJSONString(resultInfo);
        resp.setHeader("Content-type", "text/html;charset=UTF-8");
        resp.getWriter().write(resultJsonString);
    }
}
