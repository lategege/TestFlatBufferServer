import com.google.flatbuffers.FlatBufferBuilder;
import flatbuffer.FDebris;
import flatbuffer.FDebrisInfo;
import flatbuffer.FResultInfo;

import javax.servlet.ServletException;
import javax.servlet.ServletOutputStream;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.nio.ByteBuffer;
import java.nio.channels.FileChannel;
import java.util.Arrays;

/**
 * Created by xuhongliang on 2017/6/21.
 */
public class ResultFlatBufferServlet extends HttpServlet {


    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        doGet(req, resp);
    }

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {

        FlatBufferBuilder flatBufferBuilder = new FlatBufferBuilder();

        int[] debrisIdArray = new int[Constant.dataNum];
        for (int i = 0; i < Constant.dataNum; i++) {
            int imageId = flatBufferBuilder.createString("图片" + i);
            int nameId = flatBufferBuilder.createString("名称" + i);
            int fdbrisId = FDebris.createFDebris(flatBufferBuilder, imageId, 100 + i, Long.valueOf(i), nameId, true);
            debrisIdArray[i] = fdbrisId;
        }
        int debrisHelpId = flatBufferBuilder.createString("说明xxxxxxxxx");
        int debrisListId = FDebrisInfo.createDebrisListVector(flatBufferBuilder, debrisIdArray);
        int fDebrisInfoId = FDebrisInfo.createFDebrisInfo(flatBufferBuilder, debrisListId, debrisHelpId);
        int rootId = FResultInfo.createFResultInfo(flatBufferBuilder, 200, fDebrisInfoId);
        FResultInfo.finishFResultInfoBuffer(flatBufferBuilder, rootId);
        ByteBuffer buffer = flatBufferBuilder.dataBuffer();
        //存储文件
        byte[] originalData = buffer.array();
        byte[] dataByte = Arrays.copyOfRange(originalData, flatBufferBuilder.dataBuffer().position(), (flatBufferBuilder.dataBuffer().position() + flatBufferBuilder.offset()));
        ServletOutputStream outputStream = resp.getOutputStream();
        outputStream.write(dataByte);
        writeToFile(buffer);

    }

    private void writeToFile(ByteBuffer buffer) throws IOException {

        String path = "/Users/xuhongliang/Desktop/ssh/bos-git/TestFlatBuffer/web";
        File file = new File(path + "/FResultInfo.bin");
        System.out.println(getServletContext().getContextPath());
        if (file.exists()) {
            file.delete();
        }
        ByteBuffer data = buffer;
        FileOutputStream out = null;
        FileChannel channel = null;
        try {
            out = new FileOutputStream(file);
            channel = out.getChannel();
            while (data.hasRemaining()) {
                channel.write(data);
            }

        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            try {
                if (out != null) {
                    out.close();
                }
                if (channel != null) {
                    channel.close();
                }
            } catch (IOException e) {
                e.printStackTrace();
            }
        }
    }
}
