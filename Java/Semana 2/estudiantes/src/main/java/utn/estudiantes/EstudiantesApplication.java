package utn.estudiantes;

<<<<<<< HEAD


import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import utn.estudiantes.servicio.EstudianteServicio;


@SpringBootApplication
public class EstudiantesApplication implements CommandLineRunner {

	@Autowired
	private EstudianteServicio estudianteServicio;
	private static Logger logger = LoggerFactory.getLogger(EstudiantesApplication.class);
=======
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class EstudiantesApplication {
>>>>>>> 9606a8b (Cambios a Java Avanzado.-)

	public static void main(String[] args) {
		SpringApplication.run(EstudiantesApplication.class, args);
	}

<<<<<<< HEAD
	@Override
	public void run(String... args) throws Exception {
		
	}
=======
>>>>>>> 9606a8b (Cambios a Java Avanzado.-)
}
