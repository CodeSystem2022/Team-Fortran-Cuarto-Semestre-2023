package utn.tienda_libros.vista;

import org.springframework.beans.factory.annotation.Autowired;
import utn.tienda_libros.servicio.LibroServicio;

import javax.swing.*;
@Componet
public class LibroFrom extends JFrame {

    LibroServicio libroServicio;
    private JPanel panel;

    @Autowired
    public LibroFrom(LibroServicio libroServicio){
        this.libroServicio = libroServicio;
        iniciarForma();
    }

    private void iniciarForma(){
        setContentPane(panel);
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        setVisible(true);
        setSize(900,700);
        
         //Para obtenner las dimenciones de las ventana
        Toolkit toolkit= Toolkit.getDefaultToolkit();
        Dimension tamanioPantalla = toolkit.getScreenSize();
        int x =(tamanioPantalla.width -getWidth()/2);
        int y =(tamanioPantalla.height -getHeight()/2);
        setLocation(x, y);
    }
}