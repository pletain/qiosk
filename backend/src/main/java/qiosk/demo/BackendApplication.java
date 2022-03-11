package qiosk.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.data.mongodb.core.MongoTemplate;

import qiosk.demo.domain.dbtest.OrderImpl;

@SpringBootApplication
public class BackendApplication {

	// @Autowired
	// private MongoTemplate mongoTemplate;

	public static void main(String[] args) {
		SpringApplication.run(BackendApplication.class, args);
	}

	// @Bean
	// public ApplicationRunner applicationRunner() {
	// 	return args -> {
	// 		OrderImpl orderImpl = new OrderImpl();
	// 		orderImpl.setItemName("치즈카츠");
	// 		orderImpl.setPrice(18000);

	// 		mongoTemplate.insert(orderImpl);
	// 		System.out.println("fin");
	// 	};
	// }

}
