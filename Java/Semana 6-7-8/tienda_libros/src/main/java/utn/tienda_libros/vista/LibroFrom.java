package utn.tienda_libros.vista;

import org.springframework.beans.factory.annotation.Autowired;
import utn.tienda_libros.servicio.LibroServicio;

import javax.swing.*;
import javax.swing.table.DefaultTableColumnModel;
import javax.swing.table.DefaultTableModel;

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
        setSize(900, 700);
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
    }
}
