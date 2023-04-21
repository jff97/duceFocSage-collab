public class Foodweb {
   String[][] matrix;

   //constructor not a function
   public Foodweb(String csvFileName) {
      //populate matrix with
      //this.matrix = stuff;
      //instead of Foodweb use this.matrix
   }

   public String[] apexList() {
      //use this.matrix to access 2d array
      return null;
   }

   public static void main(String[] args) {
      Foodweb instance1 = new Foodweb("../fileName.csv");
      String[] myApexList = instance1.apexList();
   }
}
