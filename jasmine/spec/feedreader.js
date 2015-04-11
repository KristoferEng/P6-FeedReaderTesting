/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */

        //Created test for url to be defined and not 0
        it('has URL defined', function() {
            for (var i = 0; i<allFeeds.length; i++){
                expect(allFeeds[i].url).toBeDefined();
                expect(allFeeds[i].url.length).not.toBe(0);
            }
        });

        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */

        //Created test for name to be defined and not 0
        it('has name defined', function() {
            for (var i = 0; i<allFeeds.length; i++){
                expect(allFeeds[i].name).toBeDefined();
                expect(allFeeds[i].name.length).not.toBe(0);
            }
        });
    });

    describe('The menu',function() {
        //Declare variable for use
        var elem;
    /* TODO: Write a new test suite named "The menu" */

        /* TODO: Write a test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */
         //Set variable to body elem
         beforeEach(function() {
            elem = document.getElementsByTagName('body')[0];
         });

        it('is hidden by default', function() {
            //Check if default is hidden
            expect(elem.className).toBe('menu-hidden');
        });
         /* TODO: Write a test that ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * should have two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */
        it('is toggled when clicked', function() {
            //Store menu-icon-link elem
            var elem2 = document.getElementsByClassName('menu-icon-link')[0];
            
            //Click and check if menu-hidden class goes away
            elem2.click();
            expect(elem.className).not.toBe('menu-hidden');

            //Click and check if menu-hidden class comes back
            elem2.click();
            expect(elem.className).toBe('menu-hidden');
        });
    });

var elemAsync;

    describe('Initial entries',function() {
        var elem;

        //For async timer
         beforeEach(function(done) {
            loadFeed(0,function(){
                done();
            });
         });
        /* TODO: Write a new test suite named "Initial Entries" */

        /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test wil require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */
        it('are loaded', function(done) {
            //Check if entries is loaded
            var elems = document.getElementsByClassName('entry')
            expect(elems.length).not.toBe(0);

            //Save for next describe section - Sorry! It was the only way I could figure out...
            elemAsync = document.getElementsByTagName('h2')[0];

            done();
        });
    });
    

    describe('New Feed Selection',function() {

        //For async timer
        beforeEach(function(done) {
            loadFeed(1,function(){
                done();
            });
         });

        //Set back to original
        afterEach(function(done) {
            loadFeed(0,function(){
                done();
            });
         });


        /* TODO: Write a new test suite named "New Feed Selection"
    
        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
        it('are loaded', function(done) {
            //Get tag for headers
            var elems2 = document.getElementsByTagName('h2');
            //Check if different content
            expect(elems2[0]).not.toBe(elemAsync);
            done();
        });
    });


}());
