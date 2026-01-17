When use sorting algorithms?
Insertion sort: when input is small or items are mostrly sorted.
Bubble sort: almost never.
Selection sort: almost never.
Merge sort: when you can have external sorting proccess it is suitable beacause it needs  space of o(n).
Quick sort: it is like merge sort but because it can be realy slow in worst case(when you pick bad pivot) it is not really usefull.

Comparison sorts: bubble sort, insertion sort, selection sort, merge sort, quick sort.
Non-comparison sorts: counting sort, radix sort.


Some interview questions:
1. Sort 10 schools around your house by distance.
could be insertion sort, because the input is small, it has space complexity of o(1)

2. eBay sorts listings by the current Bid amount(Bid is the value of the current basket).
could be radix or counting, because the Bid ususally is a number between 1 and 1000. it is a fix length.

3. Sport score on ESPN
could be quick sort, cause scores are decimal. 

4. Massive database (can't fit all into memory) needs to sort through past year's user data
merge sort

5. Almost sorted Udemy review data needs to update and add 2 new reviews.
Insertion sort. most of the privoius data is almost sorted.

6. Temprature records for the past 50 years in Canada.
Radix or quick sort

7. Large username database needs to be sorted. Data is very random.
Merge sort if we have enougth memory. or quick sort if I don't want to care about worst case.

8. You want to teach sorting for the first time.
Bubble sort and selection sort.

how sorting function is implemented in javascript?
depending on which js engine, it is different. for example in firefox(spider monkey) they use merge sort, in chrome(v8) quick sort and insertion sort