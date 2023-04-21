/*
 * Assignment description 
 * implement an list data structure that supports the following behavior
 * base the list on an array
 * add
 * contains?
 * find index
 * delete by index
 * delete by value
 */

public class List {
   //member variable
   private int[] arrBackbone;
   private int filled;

   //make a empty list
   public List(int initSize) {
      this.arrBackbone = new int[initSize];
   }

   //add
   //takes in a integer
   //adds it to the list
   public void add(int toAdd) {
      //if the array is to big
      if (this.filled == this.arrBackbone.length) {
         //then make the array bigger
         int newSize = 2 * this.arrBackbone.length;
         int[] replacement = new int[newSize];

         for (int i = 0; i < arrBackbone.length; i++) {
            //copy the values from arrbackbone into replacement
         }
         this.arrBackbone = replacement;
      } else {
         //the array has room to add the element
         this.arrBackbone[filled] = toAdd;
         filled++;
      }
   }

   //contains?
   public boolean contains(int findNum) {
      for (int i = 0; i < this.arrBackbone.length; i++) {
         if (this.arrBackbone[i] == findNum) {
            return true;
         }
      }
      return false;
   }

   //find by index

   //delete by index


   public static void main(String[] args) {
      List myList = new List(10);
      for (int i = 0; i < 20; i++) {
         myList.add(i);
      }
      int randomNum = 5;
      if (myList.contains((randomNum))) {
         //do something specific to 5 being in the dataset
      } else {
         //do something specfic to 5 not being in the dataset
      }
   }
}
