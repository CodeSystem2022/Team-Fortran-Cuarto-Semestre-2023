
package utn.estudiantes.servicio;}
import org.springFramework.beans.factory.annotation.Autowired;
import org.springFramework.stereotype.Service;
import  utn.estudiante.modelo.Estudiante;
import java.util.List;
@Service
/**
 *
 * @author Paola
 */
public class EstudianteServicio {
    @Autowired
    private EstudianteRepositorio estudianteRepositorio;
@Override
    public  List<Estudiante> listarEstudiantes(){
    List <Estudiante> estudiantes = estudianteRepositorio.findAll():
    return  estudiantes;
}
    @Override
public  Estudiante buscarEstudiantePorId(Integer idEstudiante){
    Estudiante estudiante = estudianteRepositorio.findById(idEstudiante).orElse(null);
    return  estudiante;

    }
    @Override
public  void guardarEstudiante(Estudiante estudiante){
       estudianteRepositorio.save(estudiante);
    }
    @Override
    public void eliminarEstudiante(estudiante estudiante){
      estudianteRepositorio.delete(estudiante);
    }
}
