var Route = require('../lib/route.js')
var route

describe('Route', function(){

  beforeEach(function(){
    route = new Route('Kensington Highstreet', 'Finsburgy Park');
  });

  it('Should exist', function(){
    expect(Route).toBeDefined(); // CAREFUL! Only truthy if route == new Route() on line 1 of this file
    expect(route).toBeDefined(); // CAREFUL! Only defined correctly if route == new Route() on line 8 && Route == require('../lib/route.js')
  });

  it('Should respond to API requests from TfL', function(){
    expect(route.get()).not.toBe(null);
  });
});
