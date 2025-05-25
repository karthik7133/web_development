import java.util.*;

class binsearch {
    public static void main(String[] args) {
        Scanner x = new Scanner(System.in);
        
        // Input size of the array
        System.out.println("Enter the size of array:");
        int j = x.nextInt();
        
        // Input array elements
        int a[] = new int[j];
        System.out.println("Enter the values of array:");
        for (int i = 0; i < j; i++) {
            a[i] = x.nextInt();
        }
        
        // Sort the array in ascending order
        sortedarray(a);
        
        // Print the sorted array
        System.out.println("Sorted Array: " + Arrays.toString(a));
        
        // Perform binary search for the value 10
        bisearch(a, a.length, 10);
        
        x.close();
    }

    // Sorting array in ascending order using selection sort
    static void sortedarray(int a[]) {
        for (int i = 0; i < a.length; i++) {
            int smallest = i;
            for (int j = i + 1; j < a.length; j++) {
                if (a[smallest] > a[j]) {  // Sorting in ascending order
                    smallest = j;
                }
            }
            swap(a, smallest, i);  // Swap smallest found element with current element
        }
    }

    // Swap function to swap two elements in the array
    static void swap(int a[], int s, int i) {
        int temp = a[s];
        a[s] = a[i];
        a[i] = temp;
    }

    // Binary search algorithm to search for element 'x'
    static void bisearch(int a[], int len, int x) {
        int low = 0, high = len - 1;
        while (low <= high) {
            int mid = (low + high) / 2;
            if (a[mid] == x) {
                System.out.println("Element found at index " + mid + "!");
                return;
            }
            if (x < a[mid]) {
                high = mid - 1;
            } else {
                low = mid + 1;
            }
        }
        System.out.println("Element not found!");
    }
}
