package qiosk.demo.fileServer;

import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;

import org.apache.commons.io.IOUtils;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.ResponseBody;

import lombok.extern.slf4j.Slf4j;

@Controller
@Slf4j
// @RequiredArgsConstructor
public class ImgController {
    @GetMapping(value = "image/{imagename}", produces = MediaType.IMAGE_JPEG_VALUE)
	public ResponseEntity<byte[]> userSearch(@PathVariable("imagename") String imagename) throws IOException {
		InputStream imageStream = new FileInputStream("static/images/rest_1" + imagename);
		byte[] imageByteArray = IOUtils.toByteArray(imageStream);
		imageStream.close();
		return new ResponseEntity<byte[]>(imageByteArray, HttpStatus.OK);
	}

    @GetMapping(value = "/pic", produces = MediaType.IMAGE_JPEG_VALUE)
    public @ResponseBody byte[] getImageWithMediaType() throws IOException {
        InputStream in = getClass().getResourceAsStream("/static/images/rest_1/image.jpeg");
        return IOUtils.toByteArray(in);
    }
    // @GetMapping(value="/display")
    // public ResponseEntity<Resource> display(@PathParam("restId") String restId, @PathParam("itemId") String itemId) throws MalformedURLException {

    //     //파일 공통 경로
    //     String path = "/static/images/";
    //     String folder = ""; 

    //     switch(restId) {
    //         case "rest_1":
    //             folder = "rest_1/";
    //             break;
    //         case "rest":
    //             break;
    //     }

    //     Resource resource = new UrlResource("file:" + path + folder + itemId);
    //     // Resource resource = new resource.createRelative(path + folder + itemId);
    //     // = defaultLoader.getResource("file:" + path + folder + itemId);
    //     log.info("resource: " + resource);
    //     log.info("resource.exists: " + resource.exists());
    //     if(!resource.exists())
    //         return new ResponseEntity<Resource>(HttpStatus.NOT_FOUND);

    //     HttpHeaders header = new HttpHeaders();
    //     Path filePath = null;

    //     try {
    //         //file의 경로를 구한다.
    //         filePath = Paths.get(path + folder + itemId);
    //         //file의 확장자명에 따라 달라지는 Content-Type
    //         header.add("content-Type", Files.probeContentType(filePath));
    //     } catch (IOException e) {
    //         e.printStackTrace();
    //     }
        
    //     return new ResponseEntity<Resource>(resource, header, HttpStatus.OK);
    // }
}
