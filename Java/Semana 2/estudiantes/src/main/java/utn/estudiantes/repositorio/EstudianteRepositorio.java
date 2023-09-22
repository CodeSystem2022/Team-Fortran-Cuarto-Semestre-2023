package utn.estudiantes.repositorio;

import utn.estudiantes.modelo.Estudiante;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;
import org.springgramework.data.domain.Example;
import org.springgramework.data.domain.Sort;
import org.springgramework.data.repository.ListCrudRepository;
import org.springgramework.data.repository.ListPagingAndSortingRepository;
import org.springgramework.data.repository.NoRepositoryBean;
import org.springframework.data.repository.query.QueryByExampleExecutor;


public interface EstudianteRepositorio extends JpaRepository<Estudiante, Integer>{