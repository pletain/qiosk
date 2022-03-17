package qiosk.demo;

import org.springframework.boot.ApplicationRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import lombok.RequiredArgsConstructor;
import qiosk.demo.domain.item.service.ItemService;

@SpringBootApplication
@RequiredArgsConstructor
public class BackendApplication {

	private final ItemService itemService;
	public static void main(String[] args) {
		SpringApplication.run(BackendApplication.class, args);
	}

	@Bean
	public ApplicationRunner applicationRunner() {
		return args -> {
			itemService.runTest();
		};
	}

}
