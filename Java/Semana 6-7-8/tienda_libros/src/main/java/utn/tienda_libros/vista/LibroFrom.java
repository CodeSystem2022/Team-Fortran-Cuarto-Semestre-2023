package utn.tienda_libros.vista;

import org.springframework.beans.factory.annotation.Autowired;
import utn.tienda_libros.servicio.LibroServicio;

import javax.swing.*;
<<<<<<< HEAD
import javax.swing.table.DefaultTableColumnModel;
import javax.swing.table.DefaultTableModel;

=======
@Componet
>>>>>>> main
public class LibroFrom extends JFrame {
    LibroServicio libroServicio;
    private JPanel panel;
    private JTable tablaLibros;
    private JTextField libroTexto;
    private JTextField autorTexto;
    private JTextField precioTexto;
    private JTextField existenciasTexto;
    private DefaultTableModel tablaModeloLiibros;

    @Autowired
    public LibroFrom(LibroServicio libroServicio){
        this.libroServicio = libroServicio;
        iniciarForma();
        agregarButton.addActionListener(e -> agregarLibro());
    }
    private void iniciarForma() {
        setContentPane(panel);
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        setVisible(true);
<<<<<<<HEAD
        setSize(900, 700);
=======
        setSize(900, 700);

        //Para obtenner las dimenciones de las ventana
        Toolkit toolkit = Toolkit.getDefaultToolkit();
        Dimension tamanioPantalla = toolkit.getScreenSize();
        int x = (tamanioPantalla.width - getWidth() / 2);
        int y = (tamanioPantalla.height - getHeight() / 2);
        setLocation(x, y);
>>>>>>>main
    }

    private void createUIComponents() {
        this.tablaModeloLibros = new DefaultTableModel(0, 5);
        String[] cabecera = {"id", "Libro", "Autor", "Precio", "Existencia"};
        this.tablaModeloLiibros.setColumnIdentifiers(cabecera);
        //Instanciar el objeto JTable
        this.tablaModeloLibros = new JTable(tablaModeloLiibros);
        listarLibros();
    }

    private void listarLibros() {
        //Limpiar la tabla
        tablaModeloLibros.setRowCount(0);
        //Obtener los libros de la BD
        var libros = libroServicio.listarLibros();
        //Iteramos cada libro
        libros.forEach((libro) -> { //FuncionLambda
            //Creamos cada registro para agregarlos a la tabla
            Object[] renglonLibro = {
                    libro.getidLibro(),
                    libro.getNombreLibro(),
                    libro.getAutor(),
                    libro.getPrecio(),
                    libro.getExistencias(),
            }
            this.tablaModeloLibros.addRow(renglonLibro);

        });

    }
}

