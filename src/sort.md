## selection sort

select the first element as the smallent then compare it, and when we find the small we swap it with that


<ol>
<li>First, we create an outer loop to go over each element once, and store the first element as the smallest value we’ve seen so far in a variable called “lowest”.
</li>
<li>
We then create an inner for-loop to go over each element in the array, starting from i + 1.</li>
<li>
Inside this inner-loop, we check if we the current value is less than our current lowest. If so, we update our lowest to the index of that value.</li>
<li>
After the inner-loop has reached the end of the array, we check to see if the lowest ever got changed; if so, we swap it with arr[i].</li>
<li>
We then go back to outer loop, increment i by 1 (element 2) and repeat the process until each element in the array has been checked.</li>