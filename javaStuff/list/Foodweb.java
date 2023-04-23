public class Foodweb {
   String[][] matrix;

   //constructor not a function
   public Foodweb(String csvFileName) {
      //populate matrix with
      //this.matrix = stuff;
      //instead of Foodweb use this.matrix
   }

   //instead of printing it right away it is more flexible if you return a string 
   //then your driver can print the information if it wants to or just use it in a different way
   public String predatorEats(String predator) {
      //returning null is a placeholder for the compiler
      //you will return a string here
      return null;
   }

   //parameters none
   //returns 1d array of apex predators in the food web
   //this could also just be a string instead of a array of strings
   //you would do this by concatenating the apex preds together into a string before returning
   public String[] apexList() {
      //use this.matrix to access 2d array
      //returning null is a placeholder for the stringArray you will return
      return null;
   }

   public String[] producerList() {
      //use this.matrix to find producers
      //return those producers as a string array
      return null;
   }


   public int height(String organism) {
      //use this.matrix to access the matrix
      //use this.height() to recursively call the same method
      //return the height of organism in the foodweb
      return 0;
   }

   //this is a special java feature that makes it so if you try and print the object instead of printing the memory 
   //address the object points to it will print your custom interpretation of the object
   public String toString() {
      //make a string that looks like the foodweb would in a excel file
      //use "\n" to force a newline at the end of a row
      //return that string
      return "";
   }



   public static void main(String[] args) {
      Foodweb web1 = new Foodweb("./csvFiles/example1.csv");
      Foodweb web2 = new Foodweb("./csvFiles/example2.csv");
      String[] myApexList = web1.apexList();
      //this next line uses the toString() method defined above it will print it pretty
      System.out.println(web1);
      System.out.println(web2);
   }
}