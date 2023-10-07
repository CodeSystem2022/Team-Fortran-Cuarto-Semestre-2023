package utn.estudiantes.modelo;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Entity
// Boilerplate - Código Repetitivo
@Data // Métodos Get & Set
@NoArgsConstructor // Constructor sin argumentos
@AllArgsConstructor // Constructor con todos los argumentos
@ToString // Método To String de Lombok
public class Estudiante2022 {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private  Integer idestudiante2022;
    private String nombre;
    private String apellido;
    private String telefono;
    private String email;
}   