/* feedreader.js
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */
$(function() {
    describe('RSS Feeds', function() {

      it('are defined', function() {
          expect(allFeeds).toBeDefined();
          expect(allFeeds.length).not.toBe(0);
      });

      /* a test that loops through each feed to check for url */
      it('each has a URL', function() {
        for (let item of allFeeds) {
          expect(item.url).toBeDefined();
          expect(item.url.length).not.toBe(0);
        }
      });

      /* a test that loops through each feed to check for name */
       it('each has a Name', function() {
         for (let item of allFeeds) {
           expect(item.name).toBeDefined();
           expect(item.name.length).not.toBe(0);
         }
       });
    });

    /* test suite named "The menu" */
    describe('The Menu', function() {
      // test to ensure menu is hidden on load
      it('hidden by default', function() {
        expect($('body').hasClass('menu-hidden')).toBe(true);
      });

      // test to ensure the menu is toggled on click
      it('toggles visibility when clicked', function() {
        // triggers opening the menu
        $('.menu-icon-link').trigger('click');
        expect($('body').hasClass('menu-hidden')).not.toBe(true);
        // to reclose menu
        $('.menu-icon-link').trigger('click');
      });

    });

    /* test suite named "Initial Entries" */
    describe('Initial Entries', function() {
      // Runs loadFeed and calls done
      beforeEach(function(done) {
        loadFeed(0, function() {
          done();
        });
      });
      // tests to ensure the .feed container has at least one entry
      it('calls loadFeed successfully', function(done) {
        expect($('.feed').has('.entry')).toBeDefined();
        done();
      });

     });

    /* test suite named "New Feed Selection" */
    describe('New Feed Selection', function() {
      let feedBefore;
      let feedAfter;
      // calling loadFeed(0) and capturing the feed
      beforeEach(function(done) {
        loadFeed(0, function() {
          feedBefore = $('h2').html();
          done();
        });
        // calling loadFeed(1) and capturng feed
        loadFeed(1, function() {
          feedAfter = $('h2').html();
          done();
        });
      });
      //testing if content changed when new feed is chosen
      it('content changes when new feed is loaded', function(done){
        expect(feedBefore).not.toBe(feedAfter);
        done();
      });
    });

}());
