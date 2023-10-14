package utn.tienda_libros.servicio;

import utn.tienda_libros.modelo.Libro;
import java.util.List;

public interface ILibroServicio {
    public List<Libro> listaLibros();
    public Libro busacLibroPorId(Integer idLibro);

    public void guardarLibro(Libro libro);

    public void eliminarLibro(Libro libro);
}
