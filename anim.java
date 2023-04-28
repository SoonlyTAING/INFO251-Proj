public class anim {
    public static void main(String[] args) {
        Fish d = new Fish();
        Cat c = new Cat("Fluffy");
        Animal a = new Fish();
        Animal e = new Spider();
        Pet p = new Cat();
        c.getName();
    }
    
}
abstract class Animal{
    protected int legs;
    protected Animal(int legs){
        this.legs=legs;
    }
    abstract void eat();
    void walk(){
        System.out.println("I can walk because I have " + this.legs + " legs");
    };
}

class Spider extends Animal{

    protected Spider() {
        super(8);
        //TODO Auto-generated constructor stub
    }

    @Override
    void eat() {
        // TODO Auto-generated method stub

    }

}
interface Pet{
    String getName();
    void setName(String name);
    void play();
}

class Cat extends Animal implements Pet {
    String name;


    protected Cat() {
        this("");
        //TODO Auto-generated constructor stub
    }
    protected Cat(String name) {
        super(4);
        setName(name);
        //TODO Auto-generated constructor stub
    }

    @Override
    public String getName() {
        
        return this.name;
    }

    @Override
    public void setName(String name) {
        this.name=name;
        

    }

    @Override
    public void play() {

    }

    @Override
    void eat() {


    }

}
class Fish extends Animal implements Pet{
    String name;
    public Fish(){
        super(0);
    }
    @Override
    public String getName() {
        return this.name;

    }

    @Override
    public void setName(String name) {
        this.name=name;

    }

    @Override
    public void play() {

    }
    @Override
    void eat() {
    }
    @Override
    public void walk(){
        System.out.println("I can't walk because I have 0 legs");
    }

}