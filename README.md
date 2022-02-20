# Book App

## Issues and bugs

-   performing search with different startIndex returns a different number of totalItems despite that search params remain unchanged (q, orderBy). Therefore if you go to the last page of search results, sometimes it may not find any results. To prevent this, I use recursion on getBooksBySearch thunk by performing the search on previous page. But there is another bug - in this case it doesn't show the current page on pagination.
