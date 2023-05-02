import java.util.List;
import java.util.ArrayList;
class Carte {

    private String titlu;
    private String autor;

    public Carte(String titlu, String autor) {
        this.titlu = titlu;
        this.autor = autor;
    }

    public String getTitlu() {
        return titlu;
    }

    public String getAutor() {
        return autor;
    }

    @Override
    public String toString() {
        return titlu + " de " + autor;
    }
}

class Biblioteca {
    private List<Carte> listaCarti;

    public Biblioteca() {
        listaCarti = new ArrayList<>();
    }

    public void adaugaCarte(Carte carte) {
        listaCarti.add(carte);
    }

    public void adaugaCarte(String titlu, String autor) {
        listaCarti.add(new Carte(titlu, autor));
    }

    public void stergeCarte(Carte carte) {
        listaCarti.remove(carte);
    }

    public void stergeCarte(int index) {
        listaCarti.remove(index);
    }

    public List<Carte> getListaCarti() {
        return listaCarti;
    }

    public List<Carte> cautaCarte(String subStr) {
        List<Carte> rezultat = new ArrayList<>();

        for (Carte carte : listaCarti) {
            if (carte.getTitlu().contains(subStr) || carte.getAutor().contains(subStr)) {
                rezultat.add(carte);
            }
        }

        return rezultat;
    }
}

public class Main {
    public static void main(String[] args) {
        Biblioteca biblioteca = new Biblioteca();

        Carte carte1 = new Carte("Java Programming", "John Smith");
        Carte carte2 = new Carte("Data Structures and Algorithms", "Alice Brown");
        Carte carte3 = new Carte("Clean Code", "Robert Martin");

        biblioteca.adaugaCarte(carte1);
        biblioteca.adaugaCarte(carte2);

        biblioteca.adaugaCarte("The Pragmatic Programmer", "Andrew Hunt");

        // Afisam lista de carti din biblioteca
        System.out.println("Lista de carti din biblioteca:");
        for (Carte carte : biblioteca.getListaCarti()) {
            System.out.println(carte);
        }

        // Stergem o carte din biblioteca
        biblioteca.stergeCarte(0);

        // Afisam lista actualizata de carti din biblioteca
        System.out.println("Lista actualizata de carti din biblioteca:");
        for (Carte carte : biblioteca.getListaCarti()) {
            System.out.println(carte);
        }

        // Cautam cartile care contin subStr "Code"
        List<Carte> rezultat = biblioteca.cautaCarte("Code");

        // Afisam lista de carti care contin subStr "Code"
        System.out.println("Lista de carti care contin subStr \"Code\":");
        for (Carte carte : rezultat) {
            System.out.println(carte);
        }
    }
}