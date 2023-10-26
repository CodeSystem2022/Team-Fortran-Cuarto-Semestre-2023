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
    private DefaultTableModel TablaModeloLiibros;

    @Autowired
    public LibroFrom(LibroServicio libroServicio) {
        this.libroServicio = libroServicio;
        iniciarForma();
    }

    private void iniciarForma() {
        setContentPane(panel);
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        setVisible(true);
<<<<<<< HEAD
        setSize(900, 700);
=======
        setSize(900,700);
        
         //Para obtenner las dimenciones de las ventana
        Toolkit toolkit= Toolkit.getDefaultToolkit();
        Dimension tamanioPantalla = toolkit.getScreenSize();
        int x =(tamanioPantalla.width -getWidth()/2);
        int y =(tamanioPantalla.height -getHeight()/2);
        setLocation(x, y);
>>>>>>> main
    }

    private void createUIComponents() {
        this.TablaModeloLiibros = new DefaultTableModel(0, 5);
        String [] cabecera = {"id", "Libro", "Autor", "Precio", "Existencia"};
        this.TablaModeloLiibros.setColumnIdentifiers(cabecera);
        //Instanciar el objeto JTable
        this.TablaModeloLiibros = new JTable(TablaModeloLiibros);
        listarLibros();
    }

    private void listarLibros() {
        //Limpiar la tabla
        TablaModeloLiibros.setRowCount(0);
        //Obtener los libros de la BD
        var libros = libroServicio.listarLibros();
        //Iteramos cada libro
        libros.forEach((libro) -> { //FuncionLambda
            //Creamos cada registro para agregarlos a la tabla
            Object[] renglonLibro ={
                    
            }


        });

