package qiosk.demo;

import org.springframework.boot.ApplicationRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import lombok.RequiredArgsConstructor;
import qiosk.demo.domain.item.Item;
import qiosk.demo.domain.item.ItemRepository;

@SpringBootApplication
@RequiredArgsConstructor
public class BackendApplication {

	private final ItemRepository itemRepository;
	public static void main(String[] args) {
		SpringApplication.run(BackendApplication.class, args);
	}

	@Bean
	public ApplicationRunner applicationRunner() {
		return args -> {
			itemRepository.deleteAll();
			Item itemA = new Item("치즈 쫙~통모짜치즈카츠", 11000, "돈카츠 속에 치즈 왕창 묻고 더블로 갓~", "https://qioskbucket.s3.ap-northeast-2.amazonaws.com/itemA.jpeg");
			Item itemB = new Item("고소단백 차슈라멘", 8500, "고소하고 단백한 차슈라멘 한사발 하실레예~", "https://qioskbucket.s3.ap-northeast-2.amazonaws.com/itemB.jpeg");
			Item itemC = new Item("얼큰~얼큰차슈라멘", 9000, "한국식 맵고 칼칼한 얼큰한맛 해장엔 최고최고", "https://qioskbucket.s3.ap-northeast-2.amazonaws.com/itemC.jpeg");
			Item itemD = new Item("두툼바삭 생등심돈카츠", 8500, "100%국내산등심으로 매일숙성작업하는 신선한 돈카츠", "https://qioskbucket.s3.ap-northeast-2.amazonaws.com/itemD.jpeg");
			Item itemE = new Item("가정식카레", 7500, "입맛없을땐 카레 한그릇 뚝딱~", "https://qioskbucket.s3.ap-northeast-2.amazonaws.com/itemE.jpeg");
			itemRepository.save(itemA);
			itemRepository.save(itemB);
			itemRepository.save(itemC);
			itemRepository.save(itemD);
			itemRepository.save(itemE);
		};
	}

}
