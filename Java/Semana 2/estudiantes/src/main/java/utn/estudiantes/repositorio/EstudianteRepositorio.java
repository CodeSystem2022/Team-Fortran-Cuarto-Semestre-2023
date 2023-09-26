package utn.estudiantes.repositorio;

import utn.estudiantes.modelo.Estudiante;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;
import org.springframework.data.domain.Example;
import org.springframework.data.domain.Sort;
import org.springframework.data.repository.ListCrudRepository;
import org.springframework.data.repository.ListPagingAndSortingRepository;
import org.springframework.data.repository.NoRepositoryBean;
import org.springframework.data.repository.query.QueryByExampleExecutor;


public interface EstudianteRepositorio extends JpaRepository<Estudiante, Integer>{

}