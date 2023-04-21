public class Car {
   //member variables
   public String make;
   private String model;
   private int mpg;
   private int fuelCapacity;

   //constructor
   public Car(String mdl, String mk, int mpg, int fC) {
      this.make = mk;
      this.model = mdl;
      this.mpg = mpg;
      this.fuelCapacity = fC;
   }

   //methods here
   public static void printFunction(String make, String model) {
      System.out.print(make + " " + model);
   }
   public void printMethod() {
      System.out.println(this.make + " " + this.model + " " + this.mpg);
   }

   public int calcRange() {
      return this.mpg * this.fuelCapacity;
   }


   public static void main(String[] args) {
      //using it like a function()
      String make = "toyota";
      String model = "prius";
      Car.printFunction(make, model);

      //using it like a object.method()
      String make2 = "Honda";
      String model2 = "Civic";
      Car elliesCar = new Car(make2, model2, 43, 13);
      elliesCar.printMethod();
      int elliRange = elliesCar.calcRange();
      System.out.println("Ellies Range is " + elliRange);
   }
}