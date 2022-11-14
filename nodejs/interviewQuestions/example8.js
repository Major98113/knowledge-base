function getMostProfitFromStockQuotes( quotes = [] ) {
    let sum = 0;
    let countOfQuotes = 0;
    
    quotes.forEach( ( quote, i ) => {
        const biggestQuoteAfterCurrent = quotes.find( ( item, j ) => ( j > i ) && item > quote );

        if( biggestQuoteAfterCurrent ) {
            sum -= quote;
            countOfQuotes++;
        }
        else {
            sum += quote * countOfQuotes;
            countOfQuotes = 0;
        }
    });

    return sum;
}

getMostProfitFromStockQuotes( [ 1, 2, 3, 4, 5, 6 ] )       //=> 15  (buy at 1,2,3,4,5 and then sell all at 6)
getMostProfitFromStockQuotes( [ 6, 5, 4, 3, 2, 1 ] )      // => 0   (nothing to buy for profit)
getMostProfitFromStockQuotes( [ 1, 6, 5, 10, 8, 7 ] )     // => 18  (buy at 1,6,5 and sell all at 10)
getMostProfitFromStockQuotes( [ 1, 2, 10, 3, 2, 7, 3, 2 ] )  // => 26  (buy at 1,2 and sell them at 10. Then buy at 3,2 and sell them at 7)