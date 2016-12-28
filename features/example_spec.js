describe('Chimp Jasmine', function() {
  describe('Page title', function () {
    it('should be set by the Meteor method @watch', function () {
      browser.url('http://www.google.com');
      expect(browser.getTitle()).toEqual('Google');
    });
  });
});

